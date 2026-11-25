#!/usr/bin/env node
// Local development server that mirrors Vercel routing (static files + /api/state)

const http = require("http");
const fs = require("fs");
const path = require("path");
const stateHandler = require("./api/state");

const PORT = parseInt(process.env.PORT || "8000", 10);
const ROOT = __dirname;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png"
};

const server = http.createServer(async (req, res) => {
  const urlPath = (req.url || "/").split("?")[0];

  if (urlPath === "/api/state") {
    return stateHandler(req, res);
  }

  let filePath = path.join(ROOT, urlPath === "/" ? "index.html" : urlPath);
  if (!filePath.startsWith(ROOT)) {
    res.statusCode = 403;
    return res.end("Forbidden");
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }

  if (!fs.existsSync(filePath)) {
    res.statusCode = 404;
    return res.end("Not found");
  }

  const ext = path.extname(filePath).toLowerCase();
  res.setHeader("Content-Type", MIME_TYPES[ext] || "application/octet-stream");
  res.setHeader("Cache-Control", "no-store");
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`BOOYAH! Math Chaos dev server running at http://localhost:${PORT}`);
});
