// Vercel Serverless Function: /api/state
// Uses Upstash Redis / Vercel KV REST API in production, with local JSON file fallback for localhost dev.

const fs = require("fs");
const path = require("path");

const STORE_KEY = "booyah_math_chaos_state_v1";
const LOCAL_DATA_FILE = path.join(__dirname, "..", "data", "store.json");

function defaultStore() {
  return {
    updatedAt: new Date().toISOString(),
    customDecks: [],
    deckOverrides: {},
    season: {
      groups: [
        { name: "Team Lions", avatar: "🦁", totalPoints: 0, wins: 0, solved: 0, steals: 0 },
        { name: "Team Dragons", avatar: "🐉", totalPoints: 0, wins: 0, solved: 0, steals: 0 },
        { name: "Team Eagles", avatar: "🦅", totalPoints: 0, wins: 0, solved: 0, steals: 0 },
        { name: "Team Wolves", avatar: "🐺", totalPoints: 0, wins: 0, solved: 0, steals: 0 }
      ],
      stealMatrix: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      matchesPlayed: 0,
      history: []
    }
  };
}

function getRedisConfig() {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  if (url && token) {
    return { url: url.replace(/\/+$/, ""), token };
  }
  return null;
}

async function readStore() {
  const redis = getRedisConfig();
  if (redis) {
    const resp = await fetch(`${redis.url}/get/${encodeURIComponent(STORE_KEY)}`, {
      headers: { Authorization: `Bearer ${redis.token}` }
    });
    if (!resp.ok) throw new Error(`Redis GET failed: ${resp.status}`);
    const data = await resp.json();
    if (!data.result) return defaultStore();
    return typeof data.result === "string" ? JSON.parse(data.result) : data.result;
  }

  try {
    if (fs.existsSync(LOCAL_DATA_FILE)) {
      const raw = fs.readFileSync(LOCAL_DATA_FILE, "utf8");
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error("Failed reading local store:", err);
  }
  return defaultStore();
}

async function writeStore(payload) {
  const next = {
    ...defaultStore(),
    ...payload,
    updatedAt: new Date().toISOString()
  };

  const redis = getRedisConfig();
  if (redis) {
    const resp = await fetch(`${redis.url}/set/${encodeURIComponent(STORE_KEY)}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${redis.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(JSON.stringify(next))
    });
    if (!resp.ok) throw new Error(`Redis SET failed: ${resp.status}`);
    return { store: next, backend: "upstash-redis" };
  }

  if (process.env.VERCEL) {
    return { store: next, backend: "unconfigured", persisted: false };
  }

  const dir = path.dirname(LOCAL_DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(LOCAL_DATA_FILE, JSON.stringify(next, null, 2), "utf8");
  return { store: next, backend: "local-file", persisted: true };
}

function sendJson(res, status, data) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(data));
}

async function parseJsonBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 2 * 1024 * 1024) {
        reject(new Error("Payload too large"));
      }
    });
    req.on("end", () => {
      if (!raw) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch (e) {
        reject(e);
      }
    });
    req.on("error", reject);
  });
}

module.exports = async (req, res) => {
  try {
    const backend = getRedisConfig()
      ? "upstash-redis"
      : process.env.VERCEL
        ? "unconfigured"
        : "local-file";

    if (req.method === "GET") {
      const store = await readStore();
      return sendJson(res, 200, { ok: true, backend, data: store });
    }

    if (req.method === "PUT" || req.method === "POST") {
      const body = await parseJsonBody(req);
      const current = await readStore();

      // Support partial updates (only customDecks or only season) or full replace
      const merged = {
        customDecks: Array.isArray(body.customDecks) ? body.customDecks : current.customDecks,
        deckOverrides: body.deckOverrides && typeof body.deckOverrides === "object"
          ? body.deckOverrides
          : (current.deckOverrides || {}),
        season: body.season && typeof body.season === "object" ? body.season : current.season
      };

      const result = await writeStore(merged);
      return sendJson(res, 200, { ok: true, backend: result.backend, data: result.store });
    }

    return sendJson(res, 405, { ok: false, error: "Method not allowed" });
  } catch (err) {
    console.error("/api/state error:", err);
    return sendJson(res, 500, { ok: false, error: err.message || "Internal server error" });
  }
};
