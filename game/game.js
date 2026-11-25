// BOOYAH! — Math Chaos (Grade 7 Smartboard, Google-Forms Deck Builder & Networked Persistence)

const SQUAD_AVATARS = ["🦁", "🐉", "🦅", "🐺", "🦊", "🦈", "🐯", "🦉", "🦖", "🐙", "⚡", "🔥"];
const RANDOM_ADJECTIVES = ["Shadow", "Crimson", "Sky", "Iron", "Blaze", "Storm", "Apex", "Night", "Turbo", "Solar", "Cyber", "Golden", "Hyper", "Frost"];
const RANDOM_NOUNS = ["Lions", "Dragons", "Eagles", "Wolves", "Foxes", "Sharks", "Tigers", "Owls", "Raptors", "Titans", "Hawks", "Panthers", "Vipers", "Falcons"];
const LOCAL_CACHE_KEY = "booyah_math_chaos_cache_v1";

const REWARDS_BY_ID = {
  plus1: {
    id: "plus1",
    type: "plus",
    icon: "✨",
    title: "+1 Point",
    desc: "Safe & steady! +1 point.",
    applyType: "delta",
    value: 1,
    hype: 1
  },
  plus2: {
    id: "plus2",
    type: "plus",
    icon: "⚡",
    title: "+2 Surge",
    desc: "Nice power-up! +2 points.",
    applyType: "delta",
    value: 2,
    hype: 2
  },
  booyah: {
    id: "booyah",
    type: "booyah",
    icon: "👑",
    title: "BOOYAH! +3",
    desc: "Clutch win! +3 points to your squad!",
    applyType: "delta",
    value: 3,
    hype: 4
  },
  minus1: {
    id: "minus1",
    type: "minus",
    icon: "💣",
    title: "-1 Bomb!",
    desc: "Boom! You stepped on a -1 trap!",
    applyType: "delta",
    value: -1,
    hype: 0
  },
  steal: {
    id: "steal",
    type: "steal",
    icon: "🥷",
    title: "Steal +2!",
    desc: "Snatch up to 2 points from a rival!",
    applyType: "steal",
    value: 2,
    hype: 3
  },
  tornado: {
    id: "tornado",
    type: "tornado",
    icon: "🌪️",
    title: "Tornado!",
    desc: "Scramble EVERYONE'S marks!",
    applyType: "tornado",
    value: 0,
    hype: 4
  },
  swap: {
    id: "swap",
    type: "swap",
    icon: "🔄",
    title: "Squad Swap!",
    desc: "Trade your entire score with ANY squad!",
    applyType: "swap",
    value: 0,
    hype: 5
  },
  double: {
    id: "double",
    type: "double",
    icon: "💎",
    title: "2× JACKPOT!",
    desc: "Ultra rare! Doubles your total score!",
    applyType: "double",
    value: 2,
    hype: 6
  }
};

const CHOSEN_WEIGHTS = [
  { id: "plus1", weight: 25 },
  { id: "plus2", weight: 20 },
  { id: "minus1", weight: 14 },
  { id: "steal", weight: 13 },
  { id: "booyah", weight: 11 },
  { id: "tornado", weight: 9 },
  { id: "swap", weight: 5 },
  { id: "double", weight: 3 }
];

const RARE_NEAR_MISS_WEIGHTS = [
  { id: "booyah", weight: 38 },
  { id: "tornado", weight: 24 },
  { id: "swap", weight: 22 },
  { id: "double", weight: 16 }
];

function createDefaultSeason() {
  return {
    groups: [
      { name: "Team Lions", avatar: "🦁", totalPoints: 0, wins: 0, solved: 0, steals: 0 },
      { name: "Team Dragons", avatar: "🐉", totalPoints: 0, wins: 0, solved: 0, steals: 0 },
      { name: "Team Eagles", avatar: "🦅", totalPoints: 0, wins: 0, solved: 0, steals: 0 },
      { name: "Team Wolves", avatar: "🐺", totalPoints: 0, wins: 0, solved: 0, steals: 0 }
    ],
    stealPairs: {},
    matchesPlayed: 0,
    history: []
  };
}

const state = {
  activeTab: "board",
  customDecks: [],
  deckOverrides: {}, // { [chapterId]: { name, questions } }
  season: createDefaultSeason(),
  selectedDeckInManager: "7M01",
  selectedDecksForMatch: new Set(CHAPTERS.filter((c) => c.grade === 7).map((c) => c.id)),
  deckCategoryFilter: "Grade 7",
  builderGradeFilter: "Grade 7",
  deckSearchQuery: "",
  difficultyMode: "adaptive",
  setupTeams: [
    { name: "Team Lions", avatar: "🦁" },
    { name: "Team Dragons", avatar: "🐉" },
    { name: "Team Eagles", avatar: "🦅" },
    { name: "Team Wolves", avatar: "🐺" }
  ],
  saveTimer: null,

  groups: [],
  currentGroup: 0,
  answeringGroup: 0,
  attemptedGroups: new Set(),
  activeOptions: [],
  questionResolved: false,
  riskSpentThisTile: false,

  tiles: [],
  questionPools: { easy: [], medium: [], hard: [], all: [] },
  tileCount: 20,
  timerSeconds: 0,
  timerHandle: null,
  timeLeft: 0,
  activeTileIndex: null,
  riskArmed: false,

  rewardWinnerGroup: 0,
  drawsRemaining: 1,
  cardPicked: false,
  pendingTornadoAnim: false,
  matchSaved: false,
  muted: false,
  isRouletteRunning: false
};

// --- Networked Persistence (/api/state + localStorage offline fallback) ---
const Store = {
  setStatus(icon, text) {
    const pill = $("syncPill");
    if (pill) pill.innerHTML = `<span>${icon}</span><span class="sync-text">${text}</span>`;
  },
  loadLocalCache() {
    try {
      const raw = localStorage.getItem(LOCAL_CACHE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },
  saveLocalCache() {
    try {
      localStorage.setItem(
        LOCAL_CACHE_KEY,
        JSON.stringify({
          customDecks: state.customDecks,
          deckOverrides: state.deckOverrides,
          season: state.season
        })
      );
    } catch {
      // Ignore quota errors
    }
  },
  async load() {
    const cached = this.loadLocalCache();
    if (cached) {
      if (Array.isArray(cached.customDecks)) state.customDecks = cached.customDecks;
      if (cached.deckOverrides && typeof cached.deckOverrides === "object") {
        state.deckOverrides = cached.deckOverrides;
      }
      if (cached.season) state.season = normalizeSeason(cached.season);
    }

    try {
      const resp = await fetch("/api/state", { cache: "no-store" });
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const json = await resp.json();
      if (json.ok && json.data) {
        if (Array.isArray(json.data.customDecks)) state.customDecks = json.data.customDecks;
        if (json.data.deckOverrides && typeof json.data.deckOverrides === "object") {
          state.deckOverrides = json.data.deckOverrides;
        }
        if (json.data.season) state.season = normalizeSeason(json.data.season);
        this.saveLocalCache();
        if (json.backend === "unconfigured") this.setStatus("🟡", "Local Cache (Add Redis)");
        else this.setStatus("🟢", json.backend === "upstash-redis" ? "Cloud Synced" : "Server Synced");
        return;
      }
    } catch {
      this.setStatus("🟡", "Offline Cache");
    }
  },
  async save() {
    this.saveLocalCache();
    const ind = $("deckSaveIndicator");
    if (ind) ind.textContent = "Saving...";
    try {
      const resp = await fetch("/api/state", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customDecks: state.customDecks,
          deckOverrides: state.deckOverrides,
          season: state.season
        })
      });
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const json = await resp.json();
      if (json.backend === "unconfigured") this.setStatus("🟡", "Local Cache (Add Redis)");
      else this.setStatus("🟢", json.backend === "upstash-redis" ? "Cloud Synced" : "Server Synced");
      if (ind) ind.textContent = "Saved ✓";
    } catch {
      this.setStatus("🟡", "Offline Cache");
      if (ind) ind.textContent = "Saved locally";
    }
  },
  saveDebounced() {
    this.saveLocalCache();
    const ind = $("deckSaveIndicator");
    if (ind) ind.textContent = "Typing...";
    clearTimeout(state.saveTimer);
    state.saveTimer = setTimeout(() => this.save(), 450);
  }
};

function normalizeSeason(s) {
  const def = createDefaultSeason();
  const groups = Array.isArray(s.groups) && s.groups.length > 0
    ? s.groups.map((g, i) => ({
        name: g.name || `Team ${i + 1}`,
        avatar: g.avatar || SQUAD_AVATARS[i % SQUAD_AVATARS.length],
        totalPoints: Number(g.totalPoints) || 0,
        wins: Number(g.wins) || 0,
        solved: Number(g.solved) || 0,
        steals: Number(g.steals) || 0
      }))
    : def.groups;

  const stealPairs = s.stealPairs && typeof s.stealPairs === "object" ? { ...s.stealPairs } : {};
  if (Array.isArray(s.stealMatrix) && Object.keys(stealPairs).length === 0) {
    for (let i = 0; i < s.stealMatrix.length; i++) {
      for (let j = 0; j < (s.stealMatrix[i]?.length || 0); j++) {
        const val = s.stealMatrix[i][j] || 0;
        if (val > 0 && groups[i] && groups[j]) {
          stealPairs[`${groups[i].name}|${groups[j].name}`] = val;
        }
      }
    }
  }

  return {
    groups,
    stealPairs,
    matchesPlayed: Number(s.matchesPlayed) || 0,
    history: Array.isArray(s.history) ? s.history : []
  };
}

// --- Web Audio Synthesizer ---
const AudioFX = {
  ctx: null,
  ensure() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new Ctx();
    }
    if (this.ctx && this.ctx.state === "suspended") this.ctx.resume().catch(() => {});
  },
  tone(freq, duration = 0.12, type = "sine", gainVal = 0.14, delay = 0) {
    if (state.muted) return;
    this.ensure();
    if (!this.ctx) return;
    const now = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(gainVal, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + duration);
  },
  click() { this.tone(540, 0.05, "triangle", 0.1); },
  drumroll() {
    for (let i = 0; i < 6; i++) this.tone(160 + i * 25, 0.05, "triangle", 0.08, i * 0.07);
  },
  correct() {
    this.tone(523.25, 0.12, "triangle", 0.15, 0);
    this.tone(659.25, 0.12, "triangle", 0.15, 0.09);
    this.tone(783.99, 0.22, "triangle", 0.16, 0.18);
  },
  jackpot() {
    [523.25, 659.25, 783.99, 1046.5].forEach((f, idx) => this.tone(f, 0.2, "triangle", 0.16, idx * 0.08));
  },
  sadTrombone() {
    this.tone(311.13, 0.22, "sawtooth", 0.09, 0);
    this.tone(293.66, 0.22, "sawtooth", 0.09, 0.24);
    this.tone(277.18, 0.22, "sawtooth", 0.09, 0.48);
    this.tone(261.63, 0.5, "sawtooth", 0.09, 0.72);
  },
  wrong() {
    this.tone(220, 0.16, "sawtooth", 0.1, 0);
    this.tone(175, 0.24, "sawtooth", 0.1, 0.13);
  },
  taunt() {
    this.tone(392, 0.09, "square", 0.07, 0);
    this.tone(349, 0.18, "square", 0.07, 0.1);
  },
  tornado() {
    for (let i = 0; i < 9; i++) this.tone(280 + (i % 2 === 0 ? i * 65 : -i * 22), 0.08, "sawtooth", 0.08, i * 0.06);
  },
  steal() {
    this.tone(440, 0.09, "square", 0.08, 0);
    this.tone(660, 0.18, "square", 0.08, 0.08);
  }
};

// --- Confetti ---
const Confetti = {
  particles: [],
  running: false,
  burst(count = 75) {
    const canvas = $("confettiCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const colors = ["#fbbf24", "#10b981", "#38bdf8", "#f43f5e", "#8b5cf6", "#ffffff"];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 260,
        y: canvas.height * 0.42,
        vx: (Math.random() - 0.5) * 14,
        vy: -Math.random() * 14 - 4,
        size: Math.random() * 8 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 90 + Math.random() * 40,
        rot: Math.random() * Math.PI * 2,
        vrot: (Math.random() - 0.5) * 0.25
      });
    }
    if (!this.running) {
      this.running = true;
      requestAnimationFrame(() => this.loop());
    }
  },
  loop() {
    const canvas = $("confettiCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.particles = this.particles.filter((p) => p.life > 0);
    for (const p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.38;
      p.rot += p.vrot;
      p.life--;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.min(1, p.life / 25);
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    }
    if (this.particles.length > 0) requestAnimationFrame(() => this.loop());
    else {
      this.running = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
};

// --- Canvas Physics & Scoreboard Animation Engine (ScoreFX) ---
const SQUAD_COLORS = ["#f59e0b", "#f43f5e", "#06b6d4", "#8b5cf6", "#10b981", "#ec4899", "#3b82f6", "#eab308"];

const ScoreFX = {
  items: [],
  running: false,
  getCardEl(idx) {
    return document.querySelector(`.group-card[data-squad-idx="${idx}"]`);
  },
  getCardCenter(idx) {
    const el = this.getCardEl(idx);
    if (!el) return { x: window.innerWidth / 2, y: 110 };
    const r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  },
  ensureLoop() {
    if (this.running) return;
    this.running = true;
    requestAnimationFrame(() => this.tick());
  },
  spawnRing(x, y, color, maxR = 76) {
    this.items.push({ kind: "ring", x, y, r: 10, maxR, color, alpha: 1 });
    this.ensureLoop();
  },
  spawnSparks(x, y, color, count = 20, gravity = 0.28) {
    for (let i = 0; i < count; i++) {
      const ang = Math.random() * Math.PI * 2;
      const spd = 2.5 + Math.random() * 7;
      this.items.push({
        kind: "spark",
        x,
        y,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd - 1.5,
        gravity,
        r: 2.5 + Math.random() * 3.5,
        color,
        life: 32 + Math.random() * 22,
        maxLife: 54
      });
    }
    this.ensureLoop();
  },
  impactCard(idx, isPositive) {
    const el = this.getCardEl(idx);
    if (!el) return;
    el.classList.remove("fx-impact-pos", "fx-impact-neg");
    void el.offsetWidth;
    el.classList.add(isPositive ? "fx-impact-pos" : "fx-impact-neg");
  },
  animateOdometer(idx, fromVal, toVal, durationMs = 700) {
    const el = this.getCardEl(idx);
    const numEl = el?.querySelector(".group-score");
    if (!numEl) return;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      numEl.textContent = String(Math.round(fromVal + (toVal - fromVal) * eased));
      numEl.style.transform = t < 1 ? `scale(${1 + 0.18 * Math.sin(t * Math.PI)})` : "scale(1)";
      if (t < 1) requestAnimationFrame(step);
      else numEl.textContent = String(toVal);
    };
    requestAnimationFrame(step);
  },
  updateBarsToCurrentState() {
    const maxScore = Math.max(1, ...state.groups.map((g) => g.score));
    state.groups.forEach((g, idx) => {
      const fill = this.getCardEl(idx)?.querySelector(".score-bar-fill");
      if (fill) fill.style.width = `${Math.round((g.score / maxScore) * 100)}%`;
    });
  },
  launchOrbs(targetIdx, oldScore, newScore, color = "#fbbf24", count = 8) {
    const start = { x: window.innerWidth / 2, y: window.innerHeight * 0.52 };
    const end = this.getCardCenter(targetIdx);
    const ctrl = {
      x: (start.x + end.x) / 2 + (Math.random() - 0.5) * 180,
      y: Math.min(start.y, end.y) - 90
    };
    let landed = false;

    for (let i = 0; i < count; i++) {
      this.items.push({
        kind: "orb",
        t: -i * 0.08,
        speed: 0.032,
        start,
        ctrl,
        end,
        color,
        trail: [],
        onLand: () => {
          this.spawnRing(end.x, end.y, color, 68);
          this.spawnSparks(end.x, end.y, color, 8, 0.18);
          if (!landed) {
            landed = true;
            this.impactCard(targetIdx, true);
            this.animateOdometer(targetIdx, oldScore, newScore, 650);
            this.updateBarsToCurrentState();
          }
        }
      });
    }
    this.ensureLoop();
  },
  playStealBeam(thiefIdx, victimIdx, oldThief, newThief, oldVictim, newVictim) {
    const thiefPt = this.getCardCenter(thiefIdx);
    const victimPt = this.getCardCenter(victimIdx);
    const thiefColor = SQUAD_COLORS[thiefIdx % SQUAD_COLORS.length];

    // Phase 1: Jagged lightning tether from thief -> victim
    this.items.push({
      kind: "beam",
      from: thiefPt,
      to: victimPt,
      color: "#38bdf8",
      life: 44,
      maxLife: 44
    });

    // Phase 2: Rip orbs out of victim -> thief
    setTimeout(() => {
      this.impactCard(victimIdx, false);
      this.spawnRing(victimPt.x, victimPt.y, "#f43f5e", 72);
      this.spawnSparks(victimPt.x, victimPt.y, "#f43f5e", 18, 0.25);
      this.animateOdometer(victimIdx, oldVictim, newVictim, 550);
      this.updateBarsToCurrentState();

      const ctrl = {
        x: (victimPt.x + thiefPt.x) / 2,
        y: Math.max(victimPt.y, thiefPt.y) + 95
      };
      let landed = false;
      for (let i = 0; i < 6; i++) {
        this.items.push({
          kind: "orb",
          t: -i * 0.08,
          speed: 0.036,
          start: victimPt,
          ctrl,
          end: thiefPt,
          color: thiefColor,
          trail: [],
          onLand: () => {
            this.spawnRing(thiefPt.x, thiefPt.y, thiefColor, 72);
            this.spawnSparks(thiefPt.x, thiefPt.y, thiefColor, 10, 0.18);
            if (!landed) {
              landed = true;
              this.impactCard(thiefIdx, true);
              this.animateOdometer(thiefIdx, oldThief, newThief, 600);
              this.updateBarsToCurrentState();
            }
          }
        });
      }
      this.ensureLoop();
    }, 280);
    this.ensureLoop();
  },
  playSwapComets(idxA, idxB, oldA, newA, oldB, newB) {
    const ptA = this.getCardCenter(idxA);
    const ptB = this.getCardCenter(idxB);
    const colA = SQUAD_COLORS[idxA % SQUAD_COLORS.length];
    const colB = SQUAD_COLORS[idxB % SQUAD_COLORS.length];
    const midX = (ptA.x + ptB.x) / 2;
    const midY = (ptA.y + ptB.y) / 2;

    this.items.push({
      kind: "orb",
      t: 0,
      speed: 0.024,
      start: ptA,
      ctrl: { x: midX, y: midY - 110 },
      end: ptB,
      color: colA,
      trail: [],
      onLand: () => {
        this.spawnRing(ptB.x, ptB.y, colA, 80);
        this.spawnSparks(ptB.x, ptB.y, colA, 20, 0.15);
        this.impactCard(idxB, true);
        this.animateOdometer(idxB, oldB, newB, 600);
        this.updateBarsToCurrentState();
      }
    });
    this.items.push({
      kind: "orb",
      t: 0,
      speed: 0.024,
      start: ptB,
      ctrl: { x: midX, y: midY + 110 },
      end: ptA,
      color: colB,
      trail: [],
      onLand: () => {
        this.spawnRing(ptA.x, ptA.y, colB, 80);
        this.spawnSparks(ptA.x, ptA.y, colB, 20, 0.15);
        this.impactCard(idxA, true);
        this.animateOdometer(idxA, oldA, newA, 600);
        this.updateBarsToCurrentState();
      }
    });
    this.ensureLoop();
  },
  playTornadoVortex(oldScores, newScores) {
    const board = $("scoreboard");
    const br = board ? board.getBoundingClientRect() : { left: 0, top: 80, width: window.innerWidth, height: 140 };
    const cx = br.left + br.width / 2;
    const cy = br.top + br.height / 2 + 20;

    // 40 swirling wind particles
    for (let i = 0; i < 40; i++) {
      this.items.push({
        kind: "vortex",
        cx,
        cy,
        angle: (i / 40) * Math.PI * 2,
        radius: 30 + (i % 5) * 40,
        spinSpeed: 0.16 + (i % 3) * 0.04,
        life: 62,
        maxLife: 62,
        color: i % 2 === 0 ? "#8b5cf6" : "#38bdf8"
      });
    }

    // Orbiting score chips lifting off each card and slamming back down
    state.groups.forEach((g, idx) => {
      const origin = this.getCardCenter(idx);
      this.items.push({
        kind: "chip",
        x: origin.x,
        y: origin.y,
        cx,
        cy,
        target: origin,
        angle: (idx / Math.max(1, state.groups.length)) * Math.PI * 2,
        text: `${g.avatar} ${oldScores[idx]}`,
        color: SQUAD_COLORS[idx % SQUAD_COLORS.length],
        life: 66,
        maxLife: 66,
        onDone: () => {
          this.spawnRing(origin.x, origin.y, "#8b5cf6", 65);
          this.animateOdometer(idx, oldScores[idx], newScores[idx], 550);
          this.updateBarsToCurrentState();
        }
      });
    });
    this.ensureLoop();
  },
  playBombImpact(targetIdx, oldScore, newScore) {
    const pt = this.getCardCenter(targetIdx);
    this.impactCard(targetIdx, false);
    this.spawnRing(pt.x, pt.y, "#f43f5e", 88);
    this.spawnSparks(pt.x, pt.y, "#f43f5e", 28, 0.32);
    this.animateOdometer(targetIdx, oldScore, newScore, 550);
    this.updateBarsToCurrentState();
  },
  tick() {
    const canvas = $("fxCanvas");
    if (!canvas) {
      this.running = false;
      return;
    }
    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const nextItems = [];
    for (const it of this.items) {
      if (it.kind === "orb") {
        it.t += it.speed;
        if (it.t < 0) {
          nextItems.push(it);
          continue;
        }
        if (it.t >= 1) {
          it.onLand?.();
          continue;
        }
        const u = 1 - it.t;
        const x = u * u * it.start.x + 2 * u * it.t * it.ctrl.x + it.t * it.t * it.end.x;
        const y = u * u * it.start.y + 2 * u * it.t * it.ctrl.y + it.t * it.t * it.end.y;
        it.trail.push({ x, y });
        if (it.trail.length > 10) it.trail.shift();

        for (let k = 0; k < it.trail.length; k++) {
          const p = it.trail[k];
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3 + k * 0.65, 0, Math.PI * 2);
          ctx.fillStyle = it.color;
          ctx.globalAlpha = ((k + 1) / it.trail.length) * 0.65;
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(x, y, 9, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.globalAlpha = 1;
        ctx.shadowColor = it.color;
        ctx.shadowBlur = 16;
        ctx.fill();
        ctx.shadowBlur = 0;
        nextItems.push(it);
      } else if (it.kind === "ring") {
        it.r += (it.maxR - it.r) * 0.18;
        it.alpha -= 0.045;
        if (it.alpha <= 0) continue;
        ctx.beginPath();
        ctx.arc(it.x, it.y, it.r, 0, Math.PI * 2);
        ctx.strokeStyle = it.color;
        ctx.lineWidth = 4;
        ctx.globalAlpha = it.alpha;
        ctx.stroke();
        nextItems.push(it);
      } else if (it.kind === "spark") {
        it.x += it.vx;
        it.y += it.vy;
        it.vy += it.gravity;
        it.life--;
        if (it.life <= 0) continue;
        ctx.beginPath();
        ctx.arc(it.x, it.y, it.r, 0, Math.PI * 2);
        ctx.fillStyle = it.color;
        ctx.globalAlpha = it.life / it.maxLife;
        ctx.fill();
        nextItems.push(it);
      } else if (it.kind === "beam") {
        it.life--;
        if (it.life <= 0) continue;
        ctx.beginPath();
        ctx.moveTo(it.from.x, it.from.y);
        const segs = 7;
        for (let s = 1; s < segs; s++) {
          const f = s / segs;
          const jx = it.from.x + (it.to.x - it.from.x) * f + (Math.random() - 0.5) * 24;
          const jy = it.from.y + (it.to.y - it.from.y) * f + (Math.random() - 0.5) * 24;
          ctx.lineTo(jx, jy);
        }
        ctx.lineTo(it.to.x, it.to.y);
        ctx.strokeStyle = it.color;
        ctx.lineWidth = 4;
        ctx.globalAlpha = it.life / it.maxLife;
        ctx.shadowColor = it.color;
        ctx.shadowBlur = 14;
        ctx.stroke();
        ctx.shadowBlur = 0;
        nextItems.push(it);
      } else if (it.kind === "vortex") {
        it.life--;
        if (it.life <= 0) continue;
        it.angle += it.spinSpeed;
        const p = 1 - it.life / it.maxLife;
        const rad = it.radius * (p < 0.5 ? 1 - p * 0.7 : p * 1.1);
        const x = it.cx + Math.cos(it.angle) * rad;
        const y = it.cy + Math.sin(it.angle) * (rad * 0.45);
        ctx.beginPath();
        ctx.arc(x, y, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = it.color;
        ctx.globalAlpha = Math.sin(p * Math.PI);
        ctx.fill();
        nextItems.push(it);
      } else if (it.kind === "chip") {
        it.life--;
        if (it.life <= 0) {
          it.onDone?.();
          continue;
        }
        const p = 1 - it.life / it.maxLife;
        it.angle += 0.22;
        const orbitR = p < 0.7 ? 120 * Math.sin((p / 0.7) * Math.PI) : 0;
        const bx = p < 0.7
          ? it.cx + Math.cos(it.angle) * orbitR
          : it.cx + (it.target.x - it.cx) * ((p - 0.7) / 0.3);
        const by = p < 0.7
          ? it.cy + Math.sin(it.angle) * (orbitR * 0.45)
          : it.cy + (it.target.y - it.cy) * ((p - 0.7) / 0.3);

        ctx.save();
        ctx.globalAlpha = 1;
        ctx.fillStyle = "#121a2b";
        ctx.strokeStyle = it.color;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.roundRect(bx - 36, by - 16, 72, 32, 10);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "#ffffff";
        ctx.font = "800 15px 'Plus Jakarta Sans', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(it.text, bx, by);
        ctx.restore();
        nextItems.push(it);
      }
    }

    ctx.globalAlpha = 1;
    this.items = nextItems;
    if (this.items.length > 0) requestAnimationFrame(() => this.tick());
    else {
      this.running = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
};

// --- Scratchpad ---
const Scratchpad = {
  drawing: false,
  ctx: null,
  init() {
    const canvas = $("scratchCanvas");
    this.ctx = canvas.getContext("2d");
    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: (e.clientX - rect.left) * (canvas.width / rect.width),
        y: (e.clientY - rect.top) * (canvas.height / rect.height)
      };
    };
    canvas.addEventListener("pointerdown", (e) => {
      this.drawing = true;
      const p = getPos(e);
      this.ctx.beginPath();
      this.ctx.moveTo(p.x, p.y);
    });
    canvas.addEventListener("pointermove", (e) => {
      if (!this.drawing) return;
      const p = getPos(e);
      this.ctx.lineTo(p.x, p.y);
      this.ctx.strokeStyle = "#fbbf24";
      this.ctx.lineWidth = 3.5;
      this.ctx.lineCap = "round";
      this.ctx.lineJoin = "round";
      this.ctx.stroke();
    });
    window.addEventListener("pointerup", () => { this.drawing = false; });
  },
  resizeAndClear() {
    const canvas = $("scratchCanvas");
    canvas.width = canvas.clientWidth || 720;
    canvas.height = 175;
    if (this.ctx) this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
};

// --- Helpers ---
function $(id) { return document.getElementById(id); }

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function weightedPick(items, excludeIds = new Set()) {
  const filtered = items.filter((item) => !excludeIds.has(item.id));
  const pool = filtered.length > 0 ? filtered : items;
  const total = pool.reduce((sum, x) => sum + x.weight, 0);
  let roll = Math.random() * total;
  for (const item of pool) {
    roll -= item.weight;
    if (roll <= 0) return item.id;
  }
  return pool[0].id;
}

function compressImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const maxDim = 480;
        let w = img.width;
        let h = img.height;
        if (w > maxDim || h > maxDim) {
          const ratio = Math.min(maxDim / w, maxDim / h);
          w = Math.round(w * ratio);
          h = Math.round(h * ratio);
        }
        const c = document.createElement("canvas");
        c.width = w;
        c.height = h;
        c.getContext("2d").drawImage(img, 0, 0, w, h);
        resolve(c.toDataURL("image/jpeg", 0.78));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

function isSuddenDeathFinale() {
  const remaining = state.tiles.filter((t) => !t.used).length;
  return remaining > 0 && remaining <= 3;
}

function getDefaultChapterQuestions(chapterId) {
  return QUESTIONS.filter((q) => q.chapter === chapterId).map((q) => ({
    id: `bi_${q.id}`,
    difficulty: q.difficulty || "medium",
    question: q.question,
    options: [...q.options],
    answer: q.answer,
    explanation: q.explanation || ""
  }));
}

function getAllDecks() {
  const custom = state.customDecks.map((d) => ({
    id: d.id,
    name: d.name,
    category: "Custom",
    builtIn: false,
    modified: false,
    questions: (d.questions || []).map((q) => ({ difficulty: "medium", ...q }))
  }));

  const builtIn = CHAPTERS.map((ch) => {
    const override = state.deckOverrides[ch.id];
    if (override) {
      return {
        id: ch.id,
        name: override.name || `${ch.id}: ${ch.name}`,
        category: ch.group || "Geometry",
        builtIn: true,
        modified: true,
        questions: (override.questions || []).map((q) => ({ difficulty: "medium", ...q }))
      };
    }
    return {
      id: ch.id,
      name: `${ch.id}: ${ch.name}`,
      category: ch.group || "Geometry",
      builtIn: true,
      modified: false,
      questions: getDefaultChapterQuestions(ch.id)
    };
  });

  return [...custom, ...builtIn];
}

// Ensures any deck (custom OR built-in chapter) returns a mutable object in state
function ensureMutableDeck(deckId) {
  const custom = state.customDecks.find((d) => d.id === deckId);
  if (custom) return custom;

  const ch = CHAPTERS.find((c) => c.id === deckId);
  if (!ch) return null;

  if (!state.deckOverrides[deckId]) {
    state.deckOverrides[deckId] = {
      name: `${ch.id}: ${ch.name}`,
      questions: getDefaultChapterQuestions(deckId)
    };
  }
  return state.deckOverrides[deckId];
}

// --- Sidebar & Tabs ---
function switchTab(tabId) {
  state.activeTab = tabId;
  document.querySelectorAll(".nav-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });
  ["board", "decks", "rivalry", "setup"].forEach((id) => {
    $(`tab-${id}`).classList.toggle("hidden", id !== tabId);
  });
  const titles = {
    board: "🎮 Play Board",
    decks: "📝 Decks & Builder",
    rivalry: "🏆 Season Rivalry",
    setup: "⚙️ Match Setup"
  };
  $("topbarTitle").textContent = titles[tabId] || "🔥 BOOYAH!";

  if (tabId === "decks") renderDecksManager();
  if (tabId === "rivalry") renderRivalryTab();
  if (tabId === "setup") {
    renderSetupTeams();
    renderSetupDeckPicker();
  }
}

// --- Dynamic Team Builder (Random X Teams + Auto-Spawning Empty Box) ---
function syncSetupInputsFromSeason() {
  if (state.season.groups.length >= 2) {
    state.setupTeams = state.season.groups.slice(0, 8).map((g, i) => ({
      name: g.name || `Team ${i + 1}`,
      avatar: g.avatar || SQUAD_AVATARS[i % SQUAD_AVATARS.length]
    }));
  }
  renderSetupTeams();
}

function generateRandomTeams(count) {
  const n = Math.max(2, Math.min(12, count || 4));
  const adjs = shuffle(RANDOM_ADJECTIVES);
  const nouns = shuffle(RANDOM_NOUNS);
  const teams = [];
  for (let i = 0; i < n; i++) {
    teams.push({
      name: `${adjs[i % adjs.length]} ${nouns[i % nouns.length]}`,
      avatar: SQUAD_AVATARS[i % SQUAD_AVATARS.length]
    });
  }
  state.setupTeams = teams;
  renderSetupTeams();
}

function updateTeamCountBadge() {
  const badge = $("teamCountBadge");
  if (badge) badge.textContent = String(state.setupTeams.length);
  document.querySelectorAll("#setupTeamRows .team-remove-btn").forEach((btn) => {
    btn.disabled = state.setupTeams.length <= 2;
  });
}

function appendEmptyTeamRow(container) {
  const emptyRow = document.createElement("div");
  emptyRow.className = "team-row is-empty";
  emptyRow.innerHTML = `
    <span class="team-avatar-pill">➕</span>
    <input class="team-name-input" type="text" maxlength="24" placeholder="Type a team name to add..." />
  `;
  const input = emptyRow.querySelector("input");

  const onPromote = (e) => {
    const val = e.target.value;
    if (!val.trim()) return;

    // Promote this row in-place into a real team WITHOUT losing typing focus!
    input.removeEventListener("input", onPromote);
    const newIdx = state.setupTeams.length;
    const avatar = SQUAD_AVATARS[newIdx % SQUAD_AVATARS.length];
    state.setupTeams.push({ name: val, avatar });

    emptyRow.classList.remove("is-empty");
    emptyRow.querySelector(".team-avatar-pill").textContent = avatar;

    const rmBtn = document.createElement("button");
    rmBtn.className = "team-remove-btn";
    rmBtn.type = "button";
    rmBtn.title = "Remove team";
    rmBtn.textContent = "✕";
    rmBtn.addEventListener("click", () => {
      if (state.setupTeams.length <= 2) return;
      state.setupTeams.splice(newIdx, 1);
      renderSetupTeams();
    });
    emptyRow.appendChild(rmBtn);

    input.addEventListener("input", (ev) => {
      if (state.setupTeams[newIdx]) state.setupTeams[newIdx].name = ev.target.value;
    });

    updateTeamCountBadge();
    appendEmptyTeamRow(container);
  };

  input.addEventListener("input", onPromote);
  container.appendChild(emptyRow);
}

function renderSetupTeams() {
  const container = $("setupTeamRows");
  if (!container) return;
  container.innerHTML = "";

  state.setupTeams.forEach((team, idx) => {
    const row = document.createElement("div");
    row.className = "team-row";
    row.innerHTML = `
      <span class="team-avatar-pill">${team.avatar}</span>
      <input class="team-name-input" type="text" maxlength="24" value="${escapeHtml(team.name)}" placeholder="Team ${idx + 1}" />
      <button class="team-remove-btn" type="button" title="Remove team" ${state.setupTeams.length <= 2 ? "disabled" : ""}>✕</button>
    `;
    row.querySelector("input").addEventListener("input", (e) => {
      state.setupTeams[idx].name = e.target.value;
    });
    row.querySelector(".team-remove-btn").addEventListener("click", () => {
      if (state.setupTeams.length <= 2) return;
      state.setupTeams.splice(idx, 1);
      renderSetupTeams();
    });
    container.appendChild(row);
  });

  appendEmptyTeamRow(container);
  updateTeamCountBadge();
}

// --- Smart Chapter & Deck Picker ---
function getFilteredDecksForPicker() {
  const q = state.deckSearchQuery.trim().toLowerCase();
  return getAllDecks().filter((deck) => {
    // When searching by text, search across ALL grades unless specifically filtering Custom
    if (!q && state.deckCategoryFilter !== "ALL" && deck.category !== state.deckCategoryFilter) {
      return false;
    }
    if (q && state.deckCategoryFilter === "Custom" && deck.category !== "Custom") {
      return false;
    }
    if (q && !deck.name.toLowerCase().includes(q) && !deck.id.toLowerCase().includes(q)) {
      return false;
    }
    return true;
  });
}

function updateDeckSummaryBadge() {
  const all = getAllDecks();
  let selectedDecks = 0;
  let totalQuestions = 0;
  all.forEach((d) => {
    if (state.selectedDecksForMatch.has(d.id)) {
      selectedDecks++;
      totalQuestions += d.questions.length;
    }
  });
  const badge = $("deckSummaryBadge");
  if (badge) badge.textContent = `${selectedDecks} deck(s) • ${totalQuestions} questions ready`;
}

function renderSetupDeckPicker() {
  const grid = $("setupDeckGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const visible = getFilteredDecksForPicker();
  if (visible.length === 0) {
    grid.innerHTML = `<p style="color:var(--muted); padding:10px;">No chapters/decks match your filter.</p>`;
    updateDeckSummaryBadge();
    return;
  }

  visible.forEach((deck) => {
    const isEmptyPlaceholder = deck.questions.length === 0;
    const selected = !isEmptyPlaceholder && state.selectedDecksForMatch.has(deck.id);
    const card = document.createElement("div");
    card.className = "deck-pick-card" + (selected ? " selected" : "");
    if (isEmptyPlaceholder) card.style.opacity = "0.72";
    const codeLabel = deck.builtIn ? deck.id : "★ CUSTOM";
    const cleanTitle = deck.builtIn && deck.name.startsWith(`${deck.id}: `)
      ? deck.name.slice(deck.id.length + 2)
      : deck.name;

    card.innerHTML = `
      <div class="deck-pick-info">
        <div class="deck-pick-code">${escapeHtml(codeLabel)} ${deck.modified ? "• Edited" : ""}</div>
        <div class="deck-pick-name">${escapeHtml(cleanTitle)}</div>
        <div class="deck-pick-meta">${isEmptyPlaceholder ? "🚧 Placeholder (0 Qs)" : `${deck.questions.length} questions`}</div>
      </div>
      <button class="deck-only-btn" type="button" title="${isEmptyPlaceholder ? "Add questions to this chapter" : "Select ONLY this deck"}">
        ${isEmptyPlaceholder ? "Add Qs" : "Only"}
      </button>
    `;

    card.addEventListener("click", () => {
      if (isEmptyPlaceholder) {
        state.selectedDeckInManager = deck.id;
        state.builderGradeFilter = deck.category;
        switchTab("decks");
        return;
      }
      if (state.selectedDecksForMatch.has(deck.id)) state.selectedDecksForMatch.delete(deck.id);
      else state.selectedDecksForMatch.add(deck.id);
      renderSetupDeckPicker();
    });

    card.querySelector(".deck-only-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      if (isEmptyPlaceholder) {
        state.selectedDeckInManager = deck.id;
        state.builderGradeFilter = deck.category;
        switchTab("decks");
        return;
      }
      state.selectedDecksForMatch.clear();
      state.selectedDecksForMatch.add(deck.id);
      renderSetupDeckPicker();
    });

    grid.appendChild(card);
  });

  updateDeckSummaryBadge();
}

// --- Scaling Difficulty Pool & Tile Building ---
function buildTiles() {
  const all = getAllDecks();
  let pool = [];
  all.forEach((deck) => {
    if (state.selectedDecksForMatch.has(deck.id)) {
      deck.questions.forEach((q) => {
        if (q.question && Array.isArray(q.options) && q.options.length >= 2) {
          pool.push({
            ...q,
            difficulty: q.difficulty || "medium",
            deckLabel: deck.name
          });
        }
      });
    }
  });
  if (pool.length === 0) {
    pool = QUESTIONS.map((q) => ({ ...q, deckLabel: `${q.chapter}: ${q.topic}` }));
  }

  state.questionPools = {
    easy: shuffle(pool.filter((q) => q.difficulty === "easy")),
    medium: shuffle(pool.filter((q) => q.difficulty === "medium")),
    hard: shuffle(pool.filter((q) => q.difficulty === "hard")),
    all: shuffle(pool)
  };

  state.tiles = Array.from({ length: state.tileCount }, (_, idx) => ({
    number: idx + 1,
    question: null, // Assigned on open based on scaling difficulty & match progress!
    used: false
  }));
}

function pickQuestionForProgress(squadIdx = state.currentGroup) {
  const openedCount = state.tiles.filter((t) => t.used).length;
  const progress = openedCount / Math.max(1, state.tileCount);
  const mode = state.difficultyMode || "adaptive";

  if (mode === "adaptive") {
    const squad = state.groups[squadIdx] || { score: 0, skillOffset: 0 };
    const sortedScores = state.groups.map((g) => g.score).sort((a, b) => b - a);
    const topScore = sortedScores[0] || 0;
    const secondScore = sortedScores[1] || 0;
    const gapFromLeader = topScore - squad.score;
    const leadMargin = squad.score === topScore && topScore > secondScore ? topScore - secondScore : 0;

    const baseTarget = progress * 2.0; // 0 (Easy) -> 1 (Medium) -> 2 (Hard)
    const rubberBand = gapFromLeader >= 3 ? -0.35 : leadMargin >= 4 ? 0.25 : 0;
    const target = Math.max(0, Math.min(2, baseTarget + (squad.skillOffset || 0) + rubberBand));

    const candidates = [
      { tier: "easy", center: 0 },
      { tier: "medium", center: 1 },
      { tier: "hard", center: 2 }
    ].filter((c) => state.questionPools[c.tier]?.length > 0);

    if (candidates.length > 0) {
      const weights = candidates.map((c) => ({
        tier: c.tier,
        w: Math.exp(-Math.pow(target - c.center, 2) / 0.55) + 0.08
      }));
      const totalW = weights.reduce((s, x) => s + x.w, 0);
      let roll = Math.random() * totalW;
      for (const item of weights) {
        roll -= item.w;
        if (roll <= 0) return state.questionPools[item.tier].pop();
      }
      return state.questionPools[weights[0].tier].pop();
    }
  }

  let tierOrder = ["easy", "medium", "hard"];
  if (mode === "progressive") {
    if (progress < 0.35) tierOrder = ["easy", "medium", "hard"];
    else if (progress < 0.70) tierOrder = ["medium", "hard", "easy"];
    else tierOrder = ["hard", "medium", "easy"];
  } else if (mode === "easy") {
    tierOrder = ["easy", "medium", "hard"];
  } else if (mode === "medium") {
    tierOrder = ["medium", "easy", "hard"];
  } else if (mode === "hard") {
    tierOrder = ["hard", "medium", "easy"];
  } else {
    tierOrder = ["all"];
  }

  for (const tier of tierOrder) {
    const bucket = state.questionPools[tier];
    if (bucket && bucket.length > 0) {
      return bucket.pop();
    }
  }

  const all = getAllDecks().flatMap((d) =>
    state.selectedDecksForMatch.has(d.id) ? d.questions.map((q) => ({ ...q, deckLabel: d.name })) : []
  );
  const fallback = all.length > 0 ? all : QUESTIONS;
  return fallback[Math.floor(Math.random() * fallback.length)];
}

function startNewMatch(switchToBoard = true) {
  const validTeams = state.setupTeams
    .map((t, i) => ({
      name: (t.name || "").trim() || `Team ${i + 1}`,
      avatar: t.avatar || SQUAD_AVATARS[i % SQUAD_AVATARS.length]
    }))
    .filter((t) => t.name.length > 0);

  const finalTeams = validTeams.length >= 2
    ? validTeams
    : [
        { name: "Team Lions", avatar: "🦁" },
        { name: "Team Dragons", avatar: "🐉" }
      ];

  state.groups = finalTeams.map((t) => ({
    name: t.name,
    score: 0,
    avatar: t.avatar,
    deltaText: "",
    deltaClass: "",
    streak: 0,
    skillOffset: 0,
    riskTokens: 1,
    matchSolved: 0,
    matchSteals: 0
  }));

  state.tileCount = parseInt($("tileCount").value, 10) || 20;
  state.difficultyMode = $("difficultyMode")?.value || "adaptive";
  state.timerSeconds = parseInt($("timerSelect").value, 10) || 0;
  state.currentGroup = 0;
  state.riskArmed = false;
  state.pendingTornadoAnim = false;
  state.matchSaved = false;

  buildTiles();
  $("gameOverModal").classList.add("hidden");
  renderAll();
  if (switchToBoard) switchTab("board");
}

// --- Play Board Rendering (Non-Adjustable Scores + Racing Leader Bars + #1 Crown) ---
function renderScoreboard(tornadoEffect = false, overrideScores = null) {
  const board = $("scoreboard");
  board.innerHTML = "";
  const scoresToUse = overrideScores || state.groups.map((g) => g.score);
  const maxScore = Math.max(1, ...scoresToUse);
  const topLeader = Math.max(...scoresToUse);

  state.groups.forEach((g, idx) => {
    const val = scoresToUse[idx];
    const isLeader = val > 0 && val === topLeader;
    const pct = Math.round((val / maxScore) * 100);

    const card = document.createElement("div");
    card.className = "group-card";
    card.dataset.squad = idx % 8;
    card.dataset.squadIdx = idx;
    if (idx === state.currentGroup) card.classList.add("active");
    if (idx === state.currentGroup && state.riskArmed) card.classList.add("risk-armed");
    if (tornadoEffect) card.classList.add("tornado-spin");

    card.innerHTML = `
      <div class="group-header">
        <div class="group-name">${g.avatar} ${escapeHtml(g.name)}</div>
        <div class="badges-inline">
          ${isLeader ? '<span class="crown-badge">👑 #1</span>' : ""}
          ${g.streak >= 2 ? `<span class="streak-badge">🔥 ${g.streak}</span>` : ""}
          ${idx === state.currentGroup ? '<span class="turn-badge">Turn</span>' : ""}
        </div>
      </div>
      <div class="group-score-row">
        <div>
          <span class="group-score">${val}</span><span class="score-unit">pts</span>
        </div>
        ${g.deltaText ? `<span class="score-delta ${g.deltaClass}">${g.deltaText}</span>` : ""}
      </div>
      <div class="score-bar-track">
        <div class="score-bar-fill" style="width: ${pct}%;"></div>
      </div>
    `;
    board.appendChild(card);
  });
}

function renderGrid() {
  const grid = $("tileGrid");
  grid.innerHTML = "";
  grid.className = "tile-grid";
  if (state.tileCount === 16) grid.classList.add("cols-4");
  if (state.tileCount === 24) grid.classList.add("cols-6");

  state.tiles.forEach((tile, idx) => {
    const btn = document.createElement("button");
    btn.className = "tile";
    btn.dataset.index = idx;
    btn.style.animationDelay = `${idx * 16}ms`;
    if (tile.used) {
      btn.classList.add("used");
      btn.disabled = true;
      btn.innerHTML = `<span>✓</span><span class="tile-sub">Cleared</span>`;
    } else {
      btn.innerHTML = `<span>${tile.number}</span><span class="tile-sub">Open</span>`;
      btn.addEventListener("click", () => openTile(idx));
    }
    grid.appendChild(btn);
  });

  const remaining = state.tiles.filter((t) => !t.used).length;
  const activeG = state.groups[state.currentGroup];
  $("tilesRemaining").textContent = `${remaining} / ${state.tiles.length} tiles left`;
  $("activeGroupLabel").textContent = `${activeG.avatar} ${activeG.name}'s Turn`;
  $("randomTileBtn").disabled = remaining === 0 || state.isRouletteRunning;

  const finale = isSuddenDeathFinale();
  $("finalePill").classList.toggle("hidden", !finale);
  $("boardControls").classList.toggle("finale-active", finale);

  const riskBtn = $("riskItBtn");
  riskBtn.classList.toggle("armed", state.riskArmed);
  if (state.riskArmed) {
    riskBtn.textContent = "🔥 RISK ARMED! (Cancel)";
    riskBtn.disabled = false;
  } else if (activeG.riskTokens > 0) {
    riskBtn.textContent = `🔥 Risk It! (${activeG.riskTokens} left)`;
    riskBtn.disabled = remaining === 0;
  } else {
    riskBtn.textContent = "🔥 Risk Used";
    riskBtn.disabled = true;
  }
}

function renderAll(tornadoEffect = false) {
  renderScoreboard(tornadoEffect);
  renderGrid();
}

function clearScoreDeltas() {
  state.groups.forEach((g) => {
    g.deltaText = "";
    g.deltaClass = "";
  });
}

// --- Tile Roulette ---
function pickRandomTile() {
  const available = state.tiles.map((t, i) => (t.used ? -1 : i)).filter((i) => i !== -1);
  if (available.length === 0 || state.isRouletteRunning) return;
  if (available.length === 1) return openTile(available[0]);

  state.isRouletteRunning = true;
  $("randomTileBtn").disabled = true;

  let steps = 12;
  let lastIdx = -1;
  const interval = setInterval(() => {
    if (lastIdx !== -1) {
      const prevEl = document.querySelector(`.tile[data-index="${lastIdx}"]`);
      if (prevEl) prevEl.classList.remove("roulette-highlight");
    }
    const pick = available[Math.floor(Math.random() * available.length)];
    lastIdx = pick;
    const el = document.querySelector(`.tile[data-index="${pick}"]`);
    if (el) el.classList.add("roulette-highlight");
    AudioFX.click();

    steps--;
    if (steps <= 0) {
      clearInterval(interval);
      state.isRouletteRunning = false;
      setTimeout(() => {
        if (el) el.classList.remove("roulette-highlight");
        openTile(pick);
      }, 280);
    }
  }, 85);
}

// --- Question Modal + Option Removal & Shuffle on Rebound ---
function openTile(index) {
  if (state.tiles[index].used || state.isRouletteRunning) return;
  AudioFX.click();

  state.activeTileIndex = index;
  state.answeringGroup = state.currentGroup;
  state.attemptedGroups = new Set();
  state.questionResolved = false;
  state.riskSpentThisTile = state.riskArmed;

  if (state.riskArmed) {
    state.groups[state.currentGroup].riskTokens = Math.max(0, state.groups[state.currentGroup].riskTokens - 1);
  }

  const tile = state.tiles[index];
  if (!tile.question) {
    tile.question = pickQuestionForProgress(state.answeringGroup);
  }
  const q = tile.question;
  const optImages = Array.isArray(q.optionImages) ? q.optionImages : [];
  state.usedOptionTexts = new Set(q.options.map((t) => String(t).trim()));
  state.activeOptions = q.options.map((text, idx) => ({
    text,
    imageUrl: optImages[idx] || "",
    isCorrect: idx === q.answer
  }));

  const finale = isSuddenDeathFinale();
  $("qChapterBadge").textContent = `Tile #${tile.number} • ${q.deckLabel || q.topic || "Math"}`;

  // Hide difficulty badge in Adaptive/Mixed modes so kids never feel unfairly judged
  const diff = q.difficulty || "medium";
  const diffBadge = $("qDifficultyBadge");
  if (diffBadge) {
    if (state.difficultyMode === "adaptive" || state.difficultyMode === "mixed") {
      diffBadge.classList.add("hidden");
    } else {
      diffBadge.className = `diff-badge ${diff}`;
      diffBadge.textContent = diff === "easy" ? "🟢 Easy" : diff === "hard" ? "🔴 Hard" : "🟡 Medium";
    }
  }
  const stakesBadge = $("qStakesBadge");
  if (state.riskArmed || finale) {
    stakesBadge.classList.remove("hidden");
    stakesBadge.textContent = state.riskArmed ? "🔥 RISK IT: 2 CARDS vs -2 PTS" : "⚡ FINALE: +2 BONUS PTS";
  } else {
    stakesBadge.classList.add("hidden");
  }

  // Render visual diagram (SVG and/or teacher image)
  const diagBox = $("qDiagramBox");
  const svgHtml = typeof generateMathDiagramSVG === "function" ? generateMathDiagramSVG(q) : "";
  const imgHtml = q.imageUrl ? `<img class="q-custom-img" src="${escapeHtml(q.imageUrl)}" alt="Question diagram" />` : "";
  if (svgHtml || imgHtml) {
    diagBox.innerHTML = `${imgHtml}${svgHtml}`;
    diagBox.classList.remove("hidden");
  } else {
    diagBox.innerHTML = "";
    diagBox.classList.add("hidden");
  }

  $("qText").innerHTML = typeof renderRichMath === "function" ? renderRichMath(q.question, true) : escapeHtml(q.question);
  $("qHintBox").classList.add("hidden");
  $("qHintBox").innerHTML = "";
  const hintBtn = $("qHintBtn");
  hintBtn.disabled = false;
  hintBtn.textContent = state.groups[state.answeringGroup].score > 0 ? "💡 Hint (−1 pt)" : "💡 Free Hint";

  $("qVictoryOverlay").classList.add("hidden");
  $("scratchpadWrap").classList.add("hidden");
  $("reboundPanel").classList.add("hidden");
  $("qExplanation").classList.add("hidden");
  $("qExplanation").className = "explanation-box hidden";
  $("qRevealSkipBtn").classList.add("hidden");
  $("qNextBtn").classList.add("hidden");

  updateSolverBar();
  renderQuestionOptions(false);
  startQuestionTimer();
  $("questionModal").classList.remove("hidden");
}

function closeQuestionModalSafely() {
  clearInterval(state.timerHandle);
  $("questionModal").classList.add("hidden");

  if (!state.questionResolved && state.activeTileIndex !== null) {
    if (state.riskSpentThisTile && !state.tiles[state.activeTileIndex].used) {
      state.groups[state.currentGroup].riskTokens += 1;
    }
    state.riskSpentThisTile = false;
    renderAll(false);
  }
}

function updateSolverBar() {
  const g = state.groups[state.answeringGroup];
  const isSteal = state.answeringGroup !== state.currentGroup;
  $("solverLabel").textContent = isSteal
    ? `⚡ STEAL: ${g.avatar} ${g.name}`
    : `${g.avatar} ${g.name}`;
  $("solverHint").textContent = isSteal ? "🔄 New decoy added & shuffled!" : "";
}

function generatePlausibleDecoy(correctText, usedSet) {
  const txt = String(correctText || "").trim();
  const candidates = [];

  // 1. LaTeX fraction: $\frac{a}{b}$
  const latexFrac = txt.match(/^\$\\frac\{(-?\d+)\}\{(\d+)\}\$$/);
  if (latexFrac) {
    const a = parseInt(latexFrac[1], 10);
    const b = parseInt(latexFrac[2], 10);
    for (const [da, db] of [[1, 0], [-1, 0], [0, 1], [1, 1], [2, 1], [-2, 1]]) {
      if (b + db > 1) candidates.push(`$\\frac{${a + da}}{${b + db}}$`);
    }
  }

  // 2. Plain fraction: a/b
  const plainFrac = txt.match(/^([−-]?\d+)\/(\d+)$/);
  if (plainFrac) {
    const a = parseInt(plainFrac[1].replace("−", "-"), 10);
    const b = parseInt(plainFrac[2], 10);
    for (const [da, db] of [[1, 0], [-1, 0], [0, 1], [1, 2], [2, 1]]) {
      if (b + db > 1) candidates.push(`${a + da}/${b + db}`);
    }
  }

  // 3. Coordinate point: (x, y)
  const coord = txt.match(/^\(([−-]?\d+),\s*([−-]?\d+)\)$/);
  if (coord) {
    const x = parseInt(coord[1].replace("−", "-"), 10);
    const y = parseInt(coord[2].replace("−", "-"), 10);
    candidates.push(`(${x + 1}, ${y})`, `(${x}, ${y + 1})`, `(${x - 1}, ${y + 2})`, `(${-x}, ${-y})`, `(${y + 1}, ${x})`);
  }

  // 4. Ratio: a : b
  const ratio = txt.match(/^(\d+)\s*:\s*(\d+)$/);
  if (ratio) {
    const a = parseInt(ratio[1], 10);
    const b = parseInt(ratio[2], 10);
    candidates.push(`${a + 1} : ${b}`, `${a} : ${b + 1}`, `${a + 2} : ${b + 1}`, `${b + 1} : ${a + 1}`);
  }

  // 5. Numeric value with optional prefix/suffix (e.g., Rs. 200, 15%, 55°, x = 7, 64 cm³)
  const numWrap = txt.match(/^(.*?)([−-]?\d+(?:\.\d+)?)(.*)$/);
  if (numWrap && !latexFrac && !plainFrac && !coord && !ratio) {
    const pre = numWrap[1];
    const numStr = numWrap[2].replace("−", "-");
    const suf = numWrap[3];
    const num = parseFloat(numStr);
    const isInt = !numStr.includes(".");
    const offsets = Math.abs(num) >= 100
      ? [10, -10, 20, -20, 15, -15, 30]
      : Math.abs(num) >= 20
        ? [2, -2, 4, -4, 5, -5, 8, -8]
        : [1, -1, 2, -2, 3, -3, 4];

    for (const off of offsets) {
      const val = isInt ? Math.round(num + off) : Number((num + off).toFixed(2));
      const formatted = val < 0 && numWrap[2].startsWith("−") ? `−${Math.abs(val)}` : String(val);
      candidates.push(`${pre}${formatted}${suf}`);
    }
  }

  // 6. Set: {1, 2, 3}
  const setM = txt.match(/^\{([^}]*)\}$/);
  if (setM) {
    candidates.push("{0, 1}", "{1, 3, 5}", "{2, 4, 6}", "{1, 2, 4}", "{3, 5, 7}");
  }

  // 7. Generic conceptual / text fallbacks
  const genericPool = [
    "Depends on scale",
    "Only if equal",
    "Not enough data",
    "Always doubled",
    "Zero in all cases",
    "Half the value"
  ];
  candidates.push(...genericPool);

  for (const cand of candidates) {
    const clean = String(cand).trim();
    if (clean && !usedSet.has(clean)) {
      usedSet.add(clean);
      return clean;
    }
  }
  const fallback = `Option ${usedSet.size + 1}`;
  usedSet.add(fallback);
  return fallback;
}

function renderQuestionOptions(waitingForRebound = false) {
  const optionsGrid = $("qOptions");
  optionsGrid.innerHTML = "";
  const letters = ["A", "B", "C", "D"];

  state.activeOptions.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.disabled = waitingForRebound;
    const textHtml = typeof renderRichMath === "function" ? renderRichMath(opt.text, false) : escapeHtml(opt.text);
    const imgHtml = opt.imageUrl ? `<img class="opt-img" src="${escapeHtml(opt.imageUrl)}" alt="Option ${letters[i]}" />` : "";
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><div class="opt-content">${imgHtml}<span>${textHtml}</span></div>`;
    btn.addEventListener("click", () => handleAnswer(i));
    optionsGrid.appendChild(btn);
  });
}

function startQuestionTimer() {
  clearInterval(state.timerHandle);
  const pill = $("qTimer");
  const track = $("qTimerBarTrack");
  const fill = $("qTimerBarFill");

  if (!state.timerSeconds) {
    pill.classList.add("hidden");
    if (track) track.classList.add("hidden");
    return;
  }
  state.timeLeft = state.timerSeconds;
  pill.classList.remove("hidden", "urgent");
  pill.textContent = `⏱️ ${state.timeLeft}s`;
  if (track && fill) {
    track.classList.remove("hidden");
    fill.classList.remove("urgent");
    fill.style.width = "100%";
  }

  state.timerHandle = setInterval(() => {
    state.timeLeft--;
    pill.textContent = `⏱️ ${state.timeLeft}s`;
    const pct = Math.max(0, (state.timeLeft / state.timerSeconds) * 100);
    if (fill) fill.style.width = `${pct}%`;

    if (state.timeLeft <= 5 || pct <= 25) {
      pill.classList.add("urgent");
      if (fill) fill.classList.add("urgent");
    }
    if (state.timeLeft <= 0) {
      clearInterval(state.timerHandle);
      handleAnswer(-1);
    }
  }, 1000);
}

function handleAnswer(selectedIdx) {
  clearInterval(state.timerHandle);
  const tile = state.tiles[state.activeTileIndex];
  const q = tile.question;
  const solverIdx = state.answeringGroup;
  const solver = state.groups[solverIdx];
  const wasFinale = isSuddenDeathFinale();

  const chosenOpt = selectedIdx >= 0 ? state.activeOptions[selectedIdx] : null;
  const isCorrect = Boolean(chosenOpt && chosenOpt.isCorrect);

  if (isCorrect) {
    tile.used = true;
    state.questionResolved = true;
    AudioFX.jackpot();
    Confetti.burst(95);
    solver.streak += 1;
    solver.skillOffset = Math.min(1.0, (solver.skillOffset || 0) + 0.35);
    solver.matchSolved += 1;

    const optionBtns = $("qOptions").querySelectorAll(".option-btn");
    optionBtns.forEach((btn, i) => {
      btn.disabled = true;
      if (state.activeOptions[i].isCorrect) btn.classList.add("correct");
    });

    const finaleBonus = wasFinale ? 2 : 0;
    if (finaleBonus > 0) {
      clearScoreDeltas();
      solver.score += finaleBonus;
      solver.deltaText = `+${finaleBonus}⚡`;
      solver.deltaClass = "pos";
      renderScoreboard(false);
    }

    const draws = state.riskArmed && solverIdx === state.currentGroup ? 2 : 1;
    state.riskArmed = false;

    const cheers = ["🎉 BRILLIANT!", "🔥 GENIUS!", "⚡ AWESOME!", "👑 UNSTOPPABLE!", "🌟 CLUTCH!"];
    $("qVictoryBadge").textContent = cheers[Math.floor(Math.random() * cheers.length)];
    const streakTxt = solver.streak >= 2 ? ` • 🔥 ${solver.streak} IN A ROW!` : "";
    const finaleTxt = finaleBonus ? " • +2 FINALE!" : "";
    $("qVictorySub").textContent = `${solver.avatar} ${solver.name}${streakTxt}${finaleTxt}`;
    $("qVictoryOverlay").classList.remove("hidden");

    // Auto-jump straight into the 3 Mystery Cards after 1.25s celebration
    setTimeout(() => {
      $("qVictoryOverlay").classList.add("hidden");
      $("questionModal").classList.add("hidden");
      openRewardModal(solverIdx, draws);
    }, 1250);
    return;
  }

  AudioFX.wrong();
  solver.streak = 0;
  solver.skillOffset = Math.max(-1.0, (solver.skillOffset || 0) - 0.45);
  state.attemptedGroups.add(solverIdx);

  if (selectedIdx >= 0 && state.activeOptions[selectedIdx]) {
    state.activeOptions.splice(selectedIdx, 1);
  }

  if (state.riskArmed && solverIdx === state.currentGroup) {
    state.riskArmed = false;
    clearScoreDeltas();
    const prev = solver.score;
    solver.score = Math.max(0, solver.score - 2);
    const lost = prev - solver.score;
    solver.deltaText = lost > 0 ? `-${lost}🔥` : "0🔥";
    solver.deltaClass = "neg";
    renderScoreboard(false);
  }

  const remainingGroups = state.groups
    .map((g, i) => ({ g, i }))
    .filter(({ i }) => !state.attemptedGroups.has(i));

  if (remainingGroups.length > 0) {
    // Replace the eliminated wrong option with a brand-new plausible decoy & shuffle all 4!
    const correctOpt = state.activeOptions.find((o) => o.isCorrect);
    const decoyText = generatePlausibleDecoy(correctOpt?.text || "", state.usedOptionTexts || new Set());
    state.activeOptions.push({ text: decoyText, imageUrl: "", isCorrect: false });
    state.activeOptions = shuffle(state.activeOptions);
    renderQuestionOptions(true);

    const reboundPanel = $("reboundPanel");
    const reboundGroups = $("reboundGroups");
    reboundPanel.classList.remove("hidden");
    reboundGroups.innerHTML = "";

    $("reboundTitle").textContent = selectedIdx === -1
      ? `⏰ Time's up for ${solver.name}! New decoy added & options shuffled — Teacher: pick a squad to steal:`
      : `❌ Wrong by ${solver.name}! Wrong option replaced with a new decoy & shuffled — Teacher: pick a squad to steal:`;

    remainingGroups.forEach(({ g, i }) => {
      const btn = document.createElement("button");
      btn.className = "btn btn-primary";
      btn.type = "button";
      btn.textContent = `${g.avatar} Pass to ${g.name}`;
      btn.addEventListener("click", () => {
        AudioFX.click();
        state.answeringGroup = i;
        reboundPanel.classList.add("hidden");
        $("qRevealSkipBtn").classList.add("hidden");
        updateSolverBar();
        renderQuestionOptions(false);
        startQuestionTimer();
      });
      reboundGroups.appendChild(btn);
    });

    const skipBtn = $("qRevealSkipBtn");
    skipBtn.classList.remove("hidden");
    skipBtn.onclick = () => revealSolutionAndMoveOn();
  } else {
    revealSolutionAndMoveOn();
  }
}

function revealSolutionAndMoveOn() {
  clearInterval(state.timerHandle);
  state.tiles[state.activeTileIndex].used = true;
  state.questionResolved = true;
  state.riskArmed = false;

  const q = state.tiles[state.activeTileIndex].question;
  $("reboundPanel").classList.add("hidden");
  $("qRevealSkipBtn").classList.add("hidden");

  const optionBtns = $("qOptions").querySelectorAll(".option-btn");
  optionBtns.forEach((btn, i) => {
    btn.disabled = true;
    if (state.activeOptions[i] && state.activeOptions[i].isCorrect) btn.classList.add("correct");
  });

  const expBox = $("qExplanation");
  expBox.classList.remove("hidden");
  expBox.classList.add("is-wrong");
  const solRaw = q.explanation || `Correct answer: ${q.options[q.answer]}`;
  const solHtml = typeof renderRichMath === "function" ? renderRichMath(solRaw, false) : escapeHtml(solRaw);
  expBox.innerHTML = `<strong>👀 Solution:</strong> ${solHtml}`;

  const nextBtn = $("qNextBtn");
  nextBtn.classList.remove("hidden");
  nextBtn.className = "btn btn-ghost";
  nextBtn.textContent = "Next Squad →";
  nextBtn.onclick = () => {
    $("questionModal").classList.add("hidden");
    const missedIdx = state.currentGroup;
    advanceTurn(false);
    requestAnimationFrame(() => ScoreFX.impactCard(missedIdx, false));
  };
}

// --- 3 Mystery Cards ---
function openRewardModal(winnerGroupIdx, drawsRemaining) {
  state.rewardWinnerGroup = winnerGroupIdx;
  state.drawsRemaining = drawsRemaining;
  state.pendingTornadoAnim = false;
  setupSingleCardDraw();
  $("rewardModal").classList.remove("hidden");
}

function setupSingleCardDraw() {
  state.cardPicked = false;
  const winner = state.groups[state.rewardWinnerGroup];
  $("rewardSubtitle").textContent = `${winner.avatar} ${winner.name} — Tap a card!`;

  const badge = $("drawsLeftBadge");
  if (state.drawsRemaining > 1) {
    badge.classList.remove("hidden");
    badge.textContent = `🔥 ${state.drawsRemaining} Draws Left!`;
  } else {
    badge.classList.add("hidden");
  }

  $("tauntBanner").classList.add("hidden");
  $("greedPanel").classList.add("hidden");
  $("rewardContinueBtn").classList.add("hidden");

  const row = $("cardsRow");
  row.innerHTML = "";
  for (let idx = 0; idx < 3; idx++) {
    const card = document.createElement("div");
    card.className = "reward-card";
    card.innerHTML = `
      <div class="card-face card-front">
        <div class="card-q">?</div>
        <span>Card ${idx + 1}</span>
      </div>
      <div class="card-face card-back"></div>
    `;
    card.addEventListener("click", () => selectMysteryCard(idx));
    row.appendChild(card);
  }
}

function populateCardBack(cardEl, reward, isChosen) {
  const back = cardEl.querySelector(".card-back");
  back.className = `card-face card-back type-${reward.type}`;
  const shortTag = {
    plus1: "+1",
    plus2: "+2",
    booyah: "+3 BOOYAH",
    minus1: "-1 BOMB",
    steal: "STEAL +2",
    tornado: "SCRAMBLE",
    swap: "SWAP",
    double: "2× JACKPOT"
  }[reward.id] || reward.title;

  back.innerHTML = `
    ${isChosen ? '<span class="chosen-tag">Picked!</span>' : ""}
    <div class="reward-icon">${reward.icon}</div>
    <div class="reward-title">${shortTag}</div>
  `;
}

function selectMysteryCard(chosenIdx) {
  if (state.cardPicked) return;
  state.cardPicked = true;
  state.drawsRemaining -= 1;

  const chosenId = weightedPick(CHOSEN_WEIGHTS);
  const chosenReward = REWARDS_BY_ID[chosenId];

  // Subtle casino near-miss: ~32% of turns inject ONE rare card into ONE unchosen slot;
  // all other unchosen slots use the natural deck odds (so players also dodge bombs & see normal cards).
  const usedIds = new Set([chosenId]);
  const unchosenIndices = [0, 1, 2].filter((i) => i !== chosenIdx);
  const injectNearMiss = chosenReward.hype < 4 && Math.random() < 0.32;
  const nearMissSlot = injectNearMiss
    ? unchosenIndices[Math.floor(Math.random() * unchosenIndices.length)]
    : -1;

  const unchosenRewards = {};
  for (const i of unchosenIndices) {
    const table = i === nearMissSlot ? RARE_NEAR_MISS_WEIGHTS : CHOSEN_WEIGHTS;
    const otherId = weightedPick(table, usedIds);
    usedIds.add(otherId);
    unchosenRewards[i] = REWARDS_BY_ID[otherId];
  }

  const cards = $("cardsRow").querySelectorAll(".reward-card");
  populateCardBack(cards[chosenIdx], chosenReward, true);
  for (const i of unchosenIndices) {
    populateCardBack(cards[i], unchosenRewards[i], false);
  }

  AudioFX.drumroll();
  cards[chosenIdx].classList.add("flipped", "chosen");

  setTimeout(() => {
    for (const i of unchosenIndices) {
      cards[i].classList.add("flipped", "unchosen");
    }

    const winner = state.groups[state.rewardWinnerGroup];
    const others = Object.values(unchosenRewards);
    const ultraRareMissed = others.find((r) => r.hype >= 5);
    const dodgedBomb = chosenReward.hype >= 1 && others.some((r) => r.id === "minus1");
    const taunt = $("tauntBanner");
    taunt.classList.remove("hidden");

    if (chosenReward.hype >= 5) {
      taunt.textContent = `🤯 ${winner.avatar} ${chosenReward.icon} ${chosenReward.title}!`;
    } else if (dodgedBomb && Math.random() < 0.5) {
      taunt.textContent = `😌 DODGED 💣 -1!`;
    } else if (ultraRareMissed && Math.random() < 0.7) {
      AudioFX.taunt();
      taunt.textContent = `😬 SO CLOSE → ${ultraRareMissed.icon}`;
    } else {
      taunt.textContent = `${chosenReward.icon} ${winner.avatar} ${chosenReward.title}`;
    }

    resolveRewardEffect(chosenReward);
  }, 650);
}

function runScoreCutscene(delayBeforeCloseMs, oldScores, tornadoEffect, fxFn) {
  state.cutsceneActive = true;
  setTimeout(() => {
    $("rewardModal").classList.add("hidden");
    $("targetModal").classList.add("hidden");
    // Render scoreboard at oldScores first so bars & numbers visibly animate to new values
    renderScoreboard(tornadoEffect, oldScores);
    requestAnimationFrame(() => {
      fxFn();
    });

    setTimeout(() => {
      state.cutsceneActive = false;
      renderScoreboard(false); // Sync crowns & final badges
      if (state.drawsRemaining > 0) {
        setupSingleCardDraw();
        $("rewardModal").classList.remove("hidden");
      } else {
        advanceTurn(false);
      }
    }, 1350);
  }, delayBeforeCloseMs);
}

function resolveRewardEffect(reward) {
  const winnerIdx = state.rewardWinnerGroup;
  const winner = state.groups[winnerIdx];
  clearScoreDeltas();

  if (reward.applyType === "delta") {
    if (reward.value < 0) {
      const oldScores = state.groups.map((g) => g.score);
      const oldVal = winner.score;
      winner.score = Math.max(0, winner.score + reward.value);
      winner.deltaText = `${winner.score - oldVal}`;
      winner.deltaClass = "neg";
      AudioFX.sadTrombone();
      runScoreCutscene(700, oldScores, false, () => {
        ScoreFX.playBombImpact(winnerIdx, oldVal, winner.score);
      });
      return;
    }

    if (state.drawsRemaining === 0 && Math.random() < 0.45) {
      showGreedOffer(reward.value);
      return;
    }

    const oldScores = state.groups.map((g) => g.score);
    const oldVal = winner.score;
    winner.score += reward.value;
    winner.deltaText = `+${reward.value}`;
    winner.deltaClass = "pos";
    if (reward.value >= 3) {
      AudioFX.jackpot();
      Confetti.burst(80);
    } else AudioFX.correct();

    const orbColor = SQUAD_COLORS[winnerIdx % SQUAD_COLORS.length];
    runScoreCutscene(650, oldScores, false, () => {
      ScoreFX.launchOrbs(winnerIdx, oldVal, winner.score, orbColor, 5 + reward.value * 2);
    });
  } else if (reward.applyType === "double") {
    const oldScores = state.groups.map((g) => g.score);
    const oldVal = winner.score;
    const bonus = Math.max(2, winner.score);
    winner.score += bonus;
    winner.deltaText = winner.score === bonus ? "+2💎" : "2×💎";
    winner.deltaClass = "pos";
    AudioFX.jackpot();
    Confetti.burst(110);

    runScoreCutscene(700, oldScores, false, () => {
      ScoreFX.launchOrbs(winnerIdx, oldVal, winner.score, "#f472b6", 12);
    });
  } else if (reward.applyType === "tornado") {
    const oldScores = state.groups.map((g) => g.score);
    AudioFX.tornado();
    applyTornado();
    const newScores = state.groups.map((g) => g.score);
    triggerTornadoVortex();

    runScoreCutscene(700, oldScores, true, () => {
      ScoreFX.playTornadoVortex(oldScores, newScores);
    });
  } else if (reward.applyType === "steal" || reward.applyType === "swap") {
    AudioFX.steal();
    setTimeout(() => {
      $("rewardModal").classList.add("hidden");
      openTargetModal(reward.applyType, reward.value);
    }, 850);
  }
}

function triggerTornadoVortex() {
  const overlay = $("vortexOverlay");
  if (!overlay) return;
  overlay.classList.remove("hidden");
  setTimeout(() => overlay.classList.add("hidden"), 1150);
}

function showGreedOffer(basePoints) {
  const winnerIdx = state.rewardWinnerGroup;
  const winner = state.groups[winnerIdx];
  const panel = $("greedPanel");
  const cashBtn = $("greedCashBtn");
  const spinBtn = $("greedSpinBtn");
  const reels = [$("slotReel0"), $("slotReel1"), $("slotReel2")];

  panel.classList.remove("hidden");
  $("slotPayoutPill").textContent = `+${basePoints} → 💎 +${basePoints * 2} / 💀 0`;
  cashBtn.textContent = `💰 KEEP +${basePoints}`;
  cashBtn.disabled = false;
  spinBtn.disabled = false;

  reels.forEach((r) => {
    r.className = "slot-reel";
    r.textContent = "💎";
  });

  cashBtn.onclick = () => {
    panel.classList.add("hidden");
    const oldScores = state.groups.map((g) => g.score);
    const oldVal = winner.score;
    winner.score += basePoints;
    winner.deltaText = `+${basePoints}`;
    winner.deltaClass = "pos";
    AudioFX.correct();
    const orbColor = SQUAD_COLORS[winnerIdx % SQUAD_COLORS.length];
    runScoreCutscene(150, oldScores, false, () => {
      ScoreFX.launchOrbs(winnerIdx, oldVal, winner.score, orbColor, 6 + basePoints);
    });
  };

  spinBtn.onclick = () => {
    cashBtn.disabled = true;
    spinBtn.disabled = true;

    const won = Math.random() < 0.45;
    const symbols = ["💎", "💀", "⚡", "💣", "👑", "🔥"];
    const finalIcons = won ? ["💎", "💎", "💎"] : ["💎", "💎", "💀"];
    const lockTimes = [750, 1400, 2250];
    const startTime = Date.now();

    reels.forEach((r) => r.classList.add("spinning"));

    const tickHandle = setInterval(() => {
      const elapsed = Date.now() - startTime;
      let allLocked = true;

      reels.forEach((r, idx) => {
        if (elapsed < lockTimes[idx]) {
          allLocked = false;
          r.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        } else if (r.classList.contains("spinning")) {
          r.classList.remove("spinning");
          r.classList.add("locked");
          r.textContent = finalIcons[idx];
          AudioFX.tone(idx === 2 ? 780 : 520 + idx * 110, 0.08, "triangle", 0.14);
        }
      });

      if (!allLocked) {
        AudioFX.tone(360 + (elapsed % 180), 0.03, "square", 0.05);
      } else {
        clearInterval(tickHandle);
        const oldScores = state.groups.map((g) => g.score);
        const oldVal = winner.score;

        if (won) {
          reels.forEach((r) => r.classList.add("win"));
          const winPts = basePoints * 2;
          winner.score += winPts;
          winner.deltaText = `+${winPts}💎`;
          winner.deltaClass = "pos";
          $("tauntBanner").textContent = `🤑 JACKPOT! +${winPts} PTS!`;
          AudioFX.jackpot();
          Confetti.burst(120);
          runScoreCutscene(700, oldScores, false, () => {
            ScoreFX.launchOrbs(winnerIdx, oldVal, winner.score, "#10b981", 12);
          });
        } else {
          reels.forEach((r, idx) => r.classList.add(idx === 2 ? "bust" : "win"));
          winner.deltaText = "💀 0";
          winner.deltaClass = "neg";
          $("tauntBanner").textContent = `💀 BUST! +0`;
          const modalCard = $("rewardModal").querySelector(".modal");
          modalCard.classList.add("shake-bust");
          setTimeout(() => modalCard.classList.remove("shake-bust"), 500);
          AudioFX.sadTrombone();
          runScoreCutscene(700, oldScores, false, () => {
            ScoreFX.playBombImpact(winnerIdx, oldVal, winner.score);
          });
        }
      }
    }, 75);
  };
}

function applyTornado() {
  const scores = state.groups.map((g) => g.score);
  const allEqual = scores.every((s) => s === scores[0]);
  let scrambled = shuffle(scores);
  if (!allEqual) {
    let guard = 0;
    while (scrambled.every((s, i) => s === scores[i]) && guard < 12) {
      scrambled = shuffle(scores);
      guard++;
    }
  }
  state.groups.forEach((g, i) => {
    g.score = scrambled[i];
    g.deltaText = "🌪️";
    g.deltaClass = "info";
  });
}

function openTargetModal(mode, stealAmount) {
  const actorIdx = state.rewardWinnerGroup;
  const actor = state.groups[actorIdx];
  $("targetTitle").textContent = mode === "swap" ? "🔄 Squad Swap!" : "🥷 Steal Points!";
  $("targetPrompt").textContent = mode === "swap"
    ? `${actor.avatar} ${actor.name} (${actor.score} pts): Pick ANY squad to swap your entire score with!`
    : `${actor.avatar} ${actor.name}: Choose a squad to steal up to ${stealAmount} points from!`;

  const list = $("targetList");
  list.innerHTML = "";

  state.groups.forEach((target, idx) => {
    if (idx === actorIdx) return;
    const btn = document.createElement("button");
    btn.className = "steal-target-btn";
    btn.innerHTML = `<span>${target.avatar} ${escapeHtml(target.name)}</span><span>${target.score} pts</span>`;
    btn.addEventListener("click", () => {
      clearScoreDeltas();
      const oldScores = state.groups.map((g) => g.score);
      const oldActor = actor.score;
      const oldTarget = target.score;

      if (mode === "swap") {
        actor.score = oldTarget;
        target.score = oldActor;
        actor.deltaText = "🔄";
        actor.deltaClass = "info";
        target.deltaText = "🔄";
        target.deltaClass = "info";
        Confetti.burst(60);
      } else {
        const lost = Math.min(stealAmount, target.score);
        target.score -= lost;
        actor.score += stealAmount;
        target.deltaText = lost > 0 ? `-${lost}` : "0";
        target.deltaClass = "neg";
        actor.deltaText = `+${stealAmount}`;
        actor.deltaClass = "pos";
      }

      actor.matchSteals += 1;
      if (!state.season.stealPairs) state.season.stealPairs = {};
      const pairKey = [actor.name, target.name].sort().join("|");
      state.season.stealPairs[pairKey] = (state.season.stealPairs[pairKey] || 0) + 1;

      AudioFX.steal();
      runScoreCutscene(80, oldScores, false, () => {
        if (mode === "swap") {
          ScoreFX.playSwapComets(actorIdx, idx, oldActor, actor.score, oldTarget, target.score);
        } else {
          ScoreFX.playStealBeam(actorIdx, idx, oldActor, actor.score, oldTarget, target.score);
        }
      });
    });
    list.appendChild(btn);
  });

  $("targetModal").classList.remove("hidden");
}

function advanceTurn(tornadoEffect) {
  const remaining = state.tiles.filter((t) => !t.used).length;
  if (remaining === 0) {
    renderAll(tornadoEffect);
    setTimeout(finishAndSaveMatch, 450);
    return;
  }
  state.currentGroup = (state.currentGroup + 1) % state.groups.length;
  state.riskArmed = false;
  renderAll(tornadoEffect);
}

// --- Multi-Day Season Rivalry (Dynamic N Teams, No Manual Adjusters) ---
function findOrCreateSeasonGroup(name, avatar) {
  const norm = name.trim().toLowerCase();
  let found = state.season.groups.find((g) => g.name.trim().toLowerCase() === norm);
  if (!found) {
    found = {
      name: name.trim(),
      avatar: avatar || SQUAD_AVATARS[state.season.groups.length % SQUAD_AVATARS.length],
      totalPoints: 0,
      wins: 0,
      solved: 0,
      steals: 0
    };
    state.season.groups.push(found);
  } else if (avatar) {
    found.avatar = avatar;
  }
  return found;
}

async function finishAndSaveMatch() {
  AudioFX.jackpot();
  Confetti.burst(130);

  if (!state.matchSaved) {
    state.matchSaved = true;
    const maxScore = Math.max(...state.groups.map((g) => g.score));
    const anyPoints = state.groups.some((g) => g.score > 0 || g.matchSolved > 0);

    if (anyPoints) {
      state.groups.forEach((g) => {
        const sg = findOrCreateSeasonGroup(g.name, g.avatar);
        sg.totalPoints += g.score;
        sg.solved += g.matchSolved;
        sg.steals += g.matchSteals;
        if (g.score === maxScore && maxScore > 0) sg.wins += 1;
      });
      state.season.matchesPlayed += 1;
      state.season.history.unshift({
        date: new Date().toLocaleString(),
        scores: state.groups.map((g) => ({ name: g.name, avatar: g.avatar, score: g.score }))
      });
      state.season.history = state.season.history.slice(0, 20);
      await Store.save();
    }
  }

  const sorted = [...state.groups].sort((a, b) => b.score - a.score);
  const topScore = sorted[0].score;
  const list = $("podiumList");
  list.innerHTML = "";
  const medals = ["🥇", "🥈", "🥉"];
  sorted.forEach((g, idx) => {
    const item = document.createElement("div");
    item.className = "podium-item" + (g.score === topScore ? " winner" : "");
    const rankLabel = medals[idx] || `#${idx + 1}`;
    item.innerHTML = `<span>${rankLabel} ${g.avatar} ${escapeHtml(g.name)}</span><span>${g.score} pts</span>`;
    list.appendChild(item);
  });

  $("savedMatchNote").textContent = "💾 Match scores & steals saved to Multi-Day Season Rivalry!";
  $("gameOverModal").classList.remove("hidden");
}

function renderRivalryTab() {
  const s = state.season;
  $("seasonMeta").textContent = `${s.matchesPlayed} match(es) recorded across class days`;

  let bestPairNames = null;
  let bestCount = 0;
  const pairs = s.stealPairs || {};
  for (const [key, count] of Object.entries(pairs)) {
    if (count > bestCount) {
      bestCount = count;
      bestPairNames = key.split("|");
    }
  }
  $("rivalryCallout").textContent = bestPairNames && bestCount > 0
    ? `🔥 Bitter Rivals: ${escapeHtml(bestPairNames[0])} vs ${escapeHtml(bestPairNames[1])} (${bestCount} steals/swaps!)`
    : "🔥 Play matches and steal points to spark class rivalries!";

  const ranked = s.groups.map((g, idx) => ({ ...g, idx })).sort((a, b) => b.totalPoints - a.totalPoints);
  const tbody = $("rivalryTableBody");
  tbody.innerHTML = "";
  const medals = ["🥇", "🥈", "🥉"];

  ranked.forEach((g, rankIdx) => {
    const tr = document.createElement("tr");
    if (rankIdx === 0 && g.totalPoints > 0) tr.className = "top-rank";
    const rankBadge = medals[rankIdx] ? `${medals[rankIdx]} ` : "";
    tr.innerHTML = `
      <td>${rankBadge}#${rankIdx + 1}</td>
      <td>${g.avatar} ${escapeHtml(g.name)}</td>
      <td><strong>${g.totalPoints}</strong></td>
      <td>${g.wins}</td>
      <td>${g.solved}</td>
      <td>${g.steals}</td>
    `;
    tbody.appendChild(tr);
  });

  const hist = $("matchHistoryList");
  hist.innerHTML = "";
  if (s.history.length === 0) {
    hist.innerHTML = `<p style="color:var(--muted);">No saved matches yet.</p>`;
  } else {
    s.history.forEach((h) => {
      const div = document.createElement("div");
      div.className = "history-item";
      const summary = h.scores
        .slice()
        .sort((a, b) => b.score - a.score)
        .map((sc) => `${sc.avatar} ${escapeHtml(sc.name)}: <strong>${sc.score}</strong>`)
        .join(" • ");
      div.innerHTML = `<span style="color:var(--muted);">${escapeHtml(h.date)}</span><span>${summary}</span>`;
      hist.appendChild(div);
    });
  }
}

// --- Google-Forms-Style Inline Deck & Question Builder ---
function renderDecksManager() {
  const list = $("deckList");
  list.innerHTML = "";
  const all = getAllDecks();
  const filteredList = all.filter((d) =>
    state.builderGradeFilter === "ALL" || d.category === state.builderGradeFilter
  );

  // Sync builder grade pills UI
  const bPills = $("builderGradePills");
  if (bPills) {
    bPills.querySelectorAll(".cat-pill").forEach((p) => {
      p.classList.toggle("active", p.dataset.bgrade === state.builderGradeFilter);
    });
  }

  if (!filteredList.some((d) => d.id === state.selectedDeckInManager)) {
    state.selectedDeckInManager = filteredList[0]?.id || all[0]?.id || "7M01";
  }

  filteredList.forEach((deck) => {
    const item = document.createElement("div");
    item.className = "deck-item" + (deck.id === state.selectedDeckInManager ? " active" : "");
    const icon = deck.builtIn ? (deck.modified ? "✏️" : deck.questions.length === 0 ? "🚧" : "📘") : "★";
    item.innerHTML = `
      <span style="font-weight:800; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${icon} ${escapeHtml(deck.name)}</span>
      <span class="badge">${deck.questions.length}</span>
    `;
    item.addEventListener("click", () => {
      state.selectedDeckInManager = deck.id;
      renderDecksManager();
    });
    list.appendChild(item);
  });

  const activeDeck = all.find((d) => d.id === state.selectedDeckInManager);
  if (!activeDeck) return;

  const pane = $("gfEditorPane");
  pane.innerHTML = "";

  // Google-Forms-Style Header Card
  const headerCard = document.createElement("div");
  headerCard.className = "gf-header-card";
  headerCard.innerHTML = `
    <input class="gf-title-input" type="text" value="${escapeHtml(activeDeck.name)}" placeholder="Untitled Deck" />
    <div style="color:var(--muted); font-size:0.86rem; font-weight:700;">
      ${activeDeck.builtIn ? (activeDeck.modified ? "✏️ Edited Chapter Deck" : `📘 ${activeDeck.category} Syllabus Deck`) : "★ Custom Teacher Deck"} • ${activeDeck.questions.length} question(s)
    </div>
    <div class="gf-toolbar">
      <div style="display:flex; gap:8px; flex-wrap:wrap;">
        <button id="gfAddQBtn" class="btn btn-primary btn-sm" type="button">＋ Add Question</button>
        <button id="gfBulkPlainBtn" class="btn btn-ghost btn-sm" type="button">📋 Paste Plaintext</button>
        <button id="gfCopyPlainBtn" class="btn btn-ghost btn-sm" type="button">📄 Copy Plaintext</button>
      </div>
      <div id="gfDeckRightActions" style="display:flex; gap:8px; flex-wrap:wrap;"></div>
    </div>
  `;

  headerCard.querySelector(".gf-title-input").addEventListener("input", (e) => {
    const mut = ensureMutableDeck(activeDeck.id);
    if (!mut) return;
    mut.name = e.target.value;
    // Update active sidebar label immediately without re-rendering input focus
    const activeItem = list.querySelector(".deck-item.active span");
    if (activeItem) {
      const icon = activeDeck.builtIn ? "✏️" : "★";
      activeItem.textContent = `${icon} ${mut.name || "Untitled Deck"}`;
    }
    Store.saveDebounced();
  });

  headerCard.querySelector("#gfAddQBtn").addEventListener("click", async () => {
    const mut = ensureMutableDeck(activeDeck.id);
    if (!mut) return;
    mut.questions.push({
      id: `q_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      question: "",
      options: ["", "", "", ""],
      answer: 0,
      explanation: ""
    });
    await Store.save();
    renderDecksManager();
    const cards = pane.querySelectorAll(".gf-question-card");
    const last = cards[cards.length - 1];
    if (last) {
      last.scrollIntoView({ behavior: "smooth", block: "center" });
      last.querySelector(".gf-q-input")?.focus();
    }
  });

  headerCard.querySelector("#gfBulkPlainBtn").addEventListener("click", () => {
    openPlaintextModal(activeDeck.id);
  });

  headerCard.querySelector("#gfCopyPlainBtn").addEventListener("click", async () => {
    const txt = deckToPlaintext(activeDeck.questions);
    try {
      await navigator.clipboard.writeText(txt);
      const btn = headerCard.querySelector("#gfCopyPlainBtn");
      btn.textContent = "✓ Copied!";
      setTimeout(() => { btn.textContent = "📄 Copy Plaintext"; }, 1600);
    } catch {
      alert(txt);
    }
  });

  const rightActions = headerCard.querySelector("#gfDeckRightActions");
  if (!activeDeck.builtIn) {
    const delDeckBtn = document.createElement("button");
    delDeckBtn.className = "btn btn-danger btn-sm";
    delDeckBtn.type = "button";
    delDeckBtn.textContent = "🗑️ Delete Deck";
    delDeckBtn.addEventListener("click", async () => {
      if (!confirm(`Delete deck "${activeDeck.name}"?`)) return;
      state.customDecks = state.customDecks.filter((d) => d.id !== activeDeck.id);
      state.selectedDecksForMatch.delete(activeDeck.id);
      await Store.save();
      renderDecksManager();
    });
    rightActions.appendChild(delDeckBtn);
  } else if (activeDeck.modified) {
    const resetBtn = document.createElement("button");
    resetBtn.className = "btn btn-ghost btn-sm";
    resetBtn.type = "button";
    resetBtn.textContent = "↺ Reset Chapter";
    resetBtn.addEventListener("click", async () => {
      if (!confirm(`Reset "${activeDeck.name}" back to the original Grade 7 syllabus questions?`)) return;
      delete state.deckOverrides[activeDeck.id];
      await Store.save();
      renderDecksManager();
    });
    rightActions.appendChild(resetBtn);
  }

  pane.appendChild(headerCard);

  if (activeDeck.questions.length === 0) {
    const empty = document.createElement("div");
    empty.className = "panel-card";
    empty.innerHTML = `<p style="color:var(--muted);">No questions in this deck yet. Click <strong>＋ Add Question</strong> or <strong>📋 Paste Plaintext</strong> above!</p>`;
    pane.appendChild(empty);
    return;
  }

  // Stacked Google-Forms-Style Question Cards
  const letters = ["A", "B", "C", "D"];
  activeDeck.questions.forEach((q, qIdx) => {
    const card = document.createElement("div");
    card.className = "gf-question-card";

    const qDiff = q.difficulty || "medium";
    const qDiag = q.diagramType || "auto";
    const optImgs = Array.isArray(q.optionImages) ? q.optionImages : ["", "", "", ""];
    const diagOptions = (typeof DIAGRAM_TYPES !== "undefined" ? DIAGRAM_TYPES : [{ id: "auto", label: "Auto" }])
      .map((dt) => `<option value="${dt.id}" ${qDiag === dt.id ? "selected" : ""}>${dt.label}</option>`)
      .join("");

    card.innerHTML = `
      <div class="gf-q-top">
        <span class="gf-q-num">Q${qIdx + 1}</span>
        <input class="gf-q-input" type="text" value="${escapeHtml(q.question)}" placeholder="Type math or LaTeX like $\\frac{1}{2} + \\sin 30^\\circ$..." />
        <select class="gf-diff-select" style="padding:9px 10px; border-radius:10px; border:1px solid var(--border); background:var(--surface-2); color:var(--text); font-weight:700; font-size:0.85rem;">
          <option value="easy" ${qDiff === "easy" ? "selected" : ""}>🟢 Easy</option>
          <option value="medium" ${qDiff === "medium" ? "selected" : ""}>🟡 Medium</option>
          <option value="hard" ${qDiff === "hard" ? "selected" : ""}>🔴 Hard</option>
        </select>
      </div>
      <div class="gf-media-row">
        <select class="gf-diag-select" style="padding:7px 10px; border-radius:10px; border:1px solid var(--border); background:var(--surface-2); color:var(--text); font-weight:700; font-size:0.82rem;">
          ${diagOptions}
        </select>
        <label class="btn btn-ghost btn-sm" style="cursor:pointer;">
          📷 Question Image
          <input class="gf-qimg-file hidden" type="file" accept="image/*" />
        </label>
        <button class="btn btn-ghost btn-sm gf-qimg-url-btn" type="button">🔗 Image URL</button>
        ${q.imageUrl ? `<img class="gf-img-thumb" src="${escapeHtml(q.imageUrl)}" alt="Preview" /><button class="btn btn-danger btn-sm gf-qimg-rm" type="button">✕ Img</button>` : ""}
      </div>
      <div class="gf-options-list"></div>
      <input class="gf-explain-input" type="text" value="${escapeHtml(q.explanation || "")}" placeholder="💡 Formula/Hint or Explanation (supports $LaTeX$)" />
      <div class="gf-card-footer">
        <span style="font-size:0.78rem; color:var(--muted); font-weight:700;">Supports $LaTeX$ math, 📷 images on questions/options, and auto SVG diagrams</span>
        <div style="display:flex; gap:8px;">
          <button class="btn btn-ghost btn-sm gf-dup-btn" type="button">⧉ Duplicate</button>
          <button class="btn btn-danger btn-sm gf-del-btn" type="button">🗑️ Delete</button>
        </div>
      </div>
    `;

    card.querySelector(".gf-diff-select").addEventListener("change", (e) => {
      const mut = ensureMutableDeck(activeDeck.id);
      if (mut && mut.questions[qIdx]) {
        mut.questions[qIdx].difficulty = e.target.value;
        Store.save();
      }
    });

    card.querySelector(".gf-diag-select").addEventListener("change", (e) => {
      const mut = ensureMutableDeck(activeDeck.id);
      if (mut && mut.questions[qIdx]) {
        mut.questions[qIdx].diagramType = e.target.value;
        Store.save();
      }
    });

    card.querySelector(".gf-qimg-file").addEventListener("change", async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const dataUrl = await compressImageFile(file);
      const mut = ensureMutableDeck(activeDeck.id);
      if (mut && mut.questions[qIdx]) {
        mut.questions[qIdx].imageUrl = dataUrl;
        await Store.save();
        renderDecksManager();
      }
    });

    card.querySelector(".gf-qimg-url-btn").addEventListener("click", async () => {
      const url = prompt("Paste image URL for this question:", q.imageUrl || "");
      if (url === null) return;
      const mut = ensureMutableDeck(activeDeck.id);
      if (mut && mut.questions[qIdx]) {
        mut.questions[qIdx].imageUrl = url.trim();
        await Store.save();
        renderDecksManager();
      }
    });

    const rmQImg = card.querySelector(".gf-qimg-rm");
    if (rmQImg) {
      rmQImg.addEventListener("click", async () => {
        const mut = ensureMutableDeck(activeDeck.id);
        if (mut && mut.questions[qIdx]) {
          delete mut.questions[qIdx].imageUrl;
          await Store.save();
          renderDecksManager();
        }
      });
    }

    // Inline question text editing
    card.querySelector(".gf-q-input").addEventListener("input", (e) => {
      const mut = ensureMutableDeck(activeDeck.id);
      if (mut && mut.questions[qIdx]) {
        mut.questions[qIdx].question = e.target.value;
        Store.saveDebounced();
      }
    });

    // Inline explanation editing
    card.querySelector(".gf-explain-input").addEventListener("input", (e) => {
      const mut = ensureMutableDeck(activeDeck.id);
      if (mut && mut.questions[qIdx]) {
        mut.questions[qIdx].explanation = e.target.value;
        Store.saveDebounced();
      }
    });

    // 4 Inline Option Rows with Radio Answer Key + Option Image
    const optsWrap = card.querySelector(".gf-options-list");
    for (let oIdx = 0; oIdx < 4; oIdx++) {
      const row = document.createElement("div");
      row.className = "gf-opt-row" + (q.answer === oIdx ? " is-answer" : "");
      const hasOptImg = Boolean(optImgs[oIdx]);
      row.innerHTML = `
        <button class="gf-radio" type="button" title="Mark Option ${letters[oIdx]} as correct">${q.answer === oIdx ? "✓" : ""}</button>
        <input class="gf-opt-input" type="text" value="${escapeHtml(q.options[oIdx] || "")}" placeholder="Option ${letters[oIdx]}" />
        ${hasOptImg ? `<img class="gf-img-thumb" style="height:28px; width:36px;" src="${escapeHtml(optImgs[oIdx])}" alt="Opt ${letters[oIdx]}" />` : ""}
        <label class="gf-opt-img-btn" title="Attach image to Option ${letters[oIdx]}">
          ${hasOptImg ? "🔄" : "📷"}
          <input class="gf-optimg-file hidden" type="file" accept="image/*" />
        </label>
        ${hasOptImg ? `<button class="gf-opt-img-btn gf-optimg-rm" type="button" title="Remove option image">✕</button>` : ""}
      `;

      row.querySelector(".gf-radio").addEventListener("click", () => {
        const mut = ensureMutableDeck(activeDeck.id);
        if (!mut || !mut.questions[qIdx]) return;
        mut.questions[qIdx].answer = oIdx;
        optsWrap.querySelectorAll(".gf-opt-row").forEach((r, idx) => {
          r.classList.toggle("is-answer", idx === oIdx);
          r.querySelector(".gf-radio").textContent = idx === oIdx ? "✓" : "";
        });
        AudioFX.click();
        Store.save();
      });

      row.querySelector(".gf-opt-input").addEventListener("input", (e) => {
        const mut = ensureMutableDeck(activeDeck.id);
        if (!mut || !mut.questions[qIdx]) return;
        mut.questions[qIdx].options[oIdx] = e.target.value;
        Store.saveDebounced();
      });

      row.querySelector(".gf-optimg-file").addEventListener("change", async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const dataUrl = await compressImageFile(file);
        const mut = ensureMutableDeck(activeDeck.id);
        if (mut && mut.questions[qIdx]) {
          if (!Array.isArray(mut.questions[qIdx].optionImages)) {
            mut.questions[qIdx].optionImages = ["", "", "", ""];
          }
          mut.questions[qIdx].optionImages[oIdx] = dataUrl;
          await Store.save();
          renderDecksManager();
        }
      });

      const rmOptImg = row.querySelector(".gf-optimg-rm");
      if (rmOptImg) {
        rmOptImg.addEventListener("click", async () => {
          const mut = ensureMutableDeck(activeDeck.id);
          if (mut && mut.questions[qIdx]?.optionImages) {
            mut.questions[qIdx].optionImages[oIdx] = "";
            await Store.save();
            renderDecksManager();
          }
        });
      }

      optsWrap.appendChild(row);
    }

    // Duplicate & Delete
    card.querySelector(".gf-dup-btn").addEventListener("click", async () => {
      const mut = ensureMutableDeck(activeDeck.id);
      if (!mut || !mut.questions[qIdx]) return;
      const src = mut.questions[qIdx];
      mut.questions.splice(qIdx + 1, 0, {
        id: `q_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
        difficulty: src.difficulty || "medium",
        diagramType: src.diagramType || "auto",
        imageUrl: src.imageUrl || "",
        optionImages: Array.isArray(src.optionImages) ? [...src.optionImages] : ["", "", "", ""],
        question: src.question,
        options: [...src.options],
        answer: src.answer,
        explanation: src.explanation || ""
      });
      await Store.save();
      renderDecksManager();
    });

    card.querySelector(".gf-del-btn").addEventListener("click", async () => {
      const mut = ensureMutableDeck(activeDeck.id);
      if (!mut) return;
      mut.questions.splice(qIdx, 1);
      await Store.save();
      renderDecksManager();
    });

    pane.appendChild(card);
  });
}

// --- Plaintext Parser & Exporter (For Non-JSON Teachers) ---
function deckToPlaintext(questions) {
  const letters = ["A", "B", "C", "D"];
  return questions.map((q, idx) => {
    const lines = [`Q${idx + 1}: ${q.question}`];
    q.options.forEach((opt, i) => {
      lines.push(`${letters[i]}) ${opt}${i === q.answer ? " *" : ""}`);
    });
    if (q.explanation) lines.push(`Explain: ${q.explanation}`);
    return lines.join("\n");
  }).join("\n\n");
}

function parsePlaintextQuestions(rawText) {
  const lines = rawText.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let current = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      if (current.length > 0) {
        blocks.push(current);
        current = [];
      }
      continue;
    }
    // Also split if a new Q: / 1. starts while current already has >= 2 options
    const looksLikeNewQ = /^(Q\d*\s*[:.)-]|\d+\s*[.):-])\s+/i.test(trimmed);
    if (looksLikeNewQ && current.length >= 3) {
      blocks.push(current);
      current = [trimmed];
    } else {
      current.push(trimmed);
    }
  }
  if (current.length > 0) blocks.push(current);

  const parsed = [];
  for (const block of blocks) {
    let qText = "";
    const options = [];
    let answerIdx = -1;
    let explanation = "";

    for (const line of block) {
      const ansMatch = line.match(/^(?:answer|ans|correct)\s*[:=-]\s*([a-d1-4])/i);
      if (ansMatch) {
        const token = ansMatch[1].toUpperCase();
        answerIdx = "ABCD".includes(token) ? "ABCD".indexOf(token) : parseInt(token, 10) - 1;
        continue;
      }

      const expMatch = line.match(/^(?:explain|explanation|solution|sol)\s*[:=-]\s*(.+)/i);
      if (expMatch) {
        explanation = expMatch[1].trim();
        continue;
      }

      const optMatch = line.match(/^(?:[A-Da-d]\s*[).:-]|[-•*])\s*(.+)$/);
      if (optMatch && (qText !== "" || options.length > 0)) {
        let optVal = optMatch[1].trim();
        if (/(\*|\(correct\)|\[correct\]|\[x\])$/i.test(optVal)) {
          answerIdx = options.length;
          optVal = optVal.replace(/(\*|\(correct\)|\[correct\]|\[x\])$/i, "").trim();
        }
        if (options.length < 4) options.push(optVal);
        continue;
      }

      const cleanQ = line.replace(/^(?:Q\d*\s*[:.)-]?|\d+\s*[.):-])\s*/i, "").trim();
      qText = qText ? `${qText} ${cleanQ}` : cleanQ;
    }

    if (qText && options.length >= 2) {
      while (options.length < 4) options.push("");
      if (answerIdx < 0 || answerIdx > 3) answerIdx = 0;
      parsed.push({
        id: `pt_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
        question: qText,
        options: options.slice(0, 4),
        answer: answerIdx,
        explanation
      });
    }
  }
  return parsed;
}

let plaintextTargetDeckId = null;

function openPlaintextModal(deckId) {
  plaintextTargetDeckId = deckId;
  $("plaintextInput").value = "";
  updatePlaintextPreview();
  $("plaintextModal").classList.remove("hidden");
  $("plaintextInput").focus();
}

function updatePlaintextPreview() {
  const items = parsePlaintextQuestions($("plaintextInput").value);
  $("plaintextPreviewCount").textContent = `Live Preview (${items.length} question${items.length === 1 ? "" : "s"} detected)`;
  $("importPlaintextConfirmBtn").disabled = items.length === 0;

  const box = $("plaintextPreview");
  box.innerHTML = "";
  if (items.length === 0) {
    box.innerHTML = `<span style="color:var(--muted);">Type or paste questions above to see live preview...</span>`;
    return;
  }

  const letters = ["A", "B", "C", "D"];
  items.forEach((item, idx) => {
    const row = document.createElement("div");
    row.innerHTML = `<strong>${idx + 1}. ${escapeHtml(item.question)}</strong> → <span style="color:var(--emerald);">Correct: ${letters[item.answer]}) ${escapeHtml(item.options[item.answer])}</span>`;
    box.appendChild(row);
  });
}

// --- Modal Close Helpers (✕ button + Click Outside) ---
function setupModalClosing() {
  const attachBackdrop = (modalId, closeFn) => {
    const el = $(modalId);
    el.addEventListener("click", (e) => {
      if (e.target === el) closeFn();
    });
  };

  $("closeQuestionModalBtn").addEventListener("click", closeQuestionModalSafely);
  attachBackdrop("questionModal", closeQuestionModalSafely);

  const closeRewardSafely = () => {
    if (state.cutsceneActive || state.cardPicked) return;
    $("rewardModal").classList.add("hidden");
    advanceTurn(state.pendingTornadoAnim);
  };
  $("closeRewardModalBtn").addEventListener("click", closeRewardSafely);
  attachBackdrop("rewardModal", closeRewardSafely);

  const closeTargetSafely = () => {
    if (state.cutsceneActive) return;
    $("targetModal").classList.add("hidden");
    if (state.drawsRemaining > 0) openRewardModal(state.rewardWinnerGroup, state.drawsRemaining);
    else advanceTurn(false);
  };
  $("closeTargetModalBtn").addEventListener("click", closeTargetSafely);
  attachBackdrop("targetModal", closeTargetSafely);

  const closePlaintext = () => $("plaintextModal").classList.add("hidden");
  $("closePlaintextBtn").addEventListener("click", closePlaintext);
  $("cancelPlaintextBtn").addEventListener("click", closePlaintext);
  attachBackdrop("plaintextModal", closePlaintext);

  const closeGameOver = () => $("gameOverModal").classList.add("hidden");
  $("closeGameOverBtn").addEventListener("click", closeGameOver);
  attachBackdrop("gameOverModal", closeGameOver);
}

// --- Bootstrapping ---
document.addEventListener("DOMContentLoaded", async () => {
  Scratchpad.init();
  setupModalClosing();

  await Store.load();
  syncSetupInputsFromSeason();
  state.customDecks.forEach((d) => state.selectedDecksForMatch.add(d.id));
  startNewMatch(true);

  $("toggleSidebarBtn").addEventListener("click", () => {
    $("sidebar").classList.toggle("collapsed");
  });

  document.querySelectorAll(".nav-tab").forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  $("quickSetupBtn").addEventListener("click", () => switchTab("setup"));
  $("startMatchBtn").addEventListener("click", () => startNewMatch(true));
  $("endGameBtn").addEventListener("click", finishAndSaveMatch);
  $("randomTileBtn").addEventListener("click", pickRandomTile);

  $("playAgainBtn").addEventListener("click", () => {
    $("gameOverModal").classList.add("hidden");
    startNewMatch(true);
  });

  $("viewRivalryBtn").addEventListener("click", () => {
    $("gameOverModal").classList.add("hidden");
    switchTab("rivalry");
  });

  $("riskItBtn").addEventListener("click", () => {
    const g = state.groups[state.currentGroup];
    if (!state.riskArmed && g.riskTokens <= 0) return;
    AudioFX.click();
    state.riskArmed = !state.riskArmed;
    renderAll(false);
  });

  $("qHintBtn").addEventListener("click", () => {
    const q = state.tiles[state.activeTileIndex]?.question;
    if (!q) return;
    const btn = $("qHintBtn");
    btn.disabled = true;

    const solverIdx = state.answeringGroup;
    const solver = state.groups[solverIdx];
    if (solver.score > 0) {
      clearScoreDeltas();
      const oldVal = solver.score;
      solver.score = Math.max(0, solver.score - 1);
      solver.deltaText = "-1 💡";
      solver.deltaClass = "neg";
      renderScoreboard(false);
      ScoreFX.playBombImpact(solverIdx, oldVal, solver.score);
    }
    AudioFX.click();

    const hintRaw = typeof getFormulaHint === "function" ? getFormulaHint(q) : "Break the problem into small steps!";
    const hintHtml = typeof renderRichMath === "function" ? renderRichMath(hintRaw, false) : escapeHtml(hintRaw);
    const box = $("qHintBox");
    box.innerHTML = `💡 <strong>Clue:</strong> ${hintHtml}`;
    box.classList.remove("hidden");
  });

  $("toggleScratchBtn").addEventListener("click", () => {
    const wrap = $("scratchpadWrap");
    const willShow = wrap.classList.contains("hidden");
    wrap.classList.toggle("hidden", !willShow);
    if (willShow) Scratchpad.resizeAndClear();
  });

  $("clearScratchBtn").addEventListener("click", () => Scratchpad.resizeAndClear());

  $("muteBtn").addEventListener("click", () => {
    state.muted = !state.muted;
    $("muteBtn").textContent = state.muted ? "🔇 Muted" : "🔊 Sound";
  });

  $("generateTeamsBtn").addEventListener("click", () => {
    AudioFX.click();
    const count = parseInt($("randomTeamCount").value, 10) || 4;
    generateRandomTeams(count);
  });

  $("deckSearchInput").addEventListener("input", (e) => {
    state.deckSearchQuery = e.target.value;
    renderSetupDeckPicker();
  });

  $("deckCatPills").querySelectorAll(".cat-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      state.deckCategoryFilter = pill.dataset.cat;
      $("deckCatPills").querySelectorAll(".cat-pill").forEach((p) => {
        p.classList.toggle("active", p === pill);
      });
      renderSetupDeckPicker();
    });
  });

  $("builderGradePills")?.querySelectorAll(".cat-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      state.builderGradeFilter = pill.dataset.bgrade;
      renderDecksManager();
    });
  });

  $("selectVisibleDecksBtn").addEventListener("click", () => {
    getFilteredDecksForPicker()
      .filter((d) => d.questions.length > 0)
      .forEach((d) => state.selectedDecksForMatch.add(d.id));
    renderSetupDeckPicker();
  });
  $("clearDecksBtn").addEventListener("click", () => {
    state.selectedDecksForMatch.clear();
    renderSetupDeckPicker();
  });

  // New Custom Deck
  $("newDeckBtn").addEventListener("click", async () => {
    const name = prompt("Enter new deck name (e.g., Chapter 5 Revision):");
    if (!name || !name.trim()) return;
    const id = `custom_${Date.now()}`;
    state.customDecks.push({
      id,
      name: name.trim(),
      questions: [
        {
          id: `q_${Date.now()}`,
          question: "",
          options: ["", "", "", ""],
          answer: 0,
          explanation: ""
        }
      ]
    });
    state.selectedDeckInManager = id;
    state.selectedDecksForMatch.add(id);
    await Store.save();
    renderDecksManager();
  });

  // Plaintext Bulk Importer
  $("plaintextInput").addEventListener("input", updatePlaintextPreview);
  $("fillSamplePlaintextBtn").addEventListener("click", () => {
    $("plaintextInput").value =
`Q: What is 15% of 200?
A) 20
B) 30 *
C) 25
D) 35
Explain: 0.15 × 200 = 30

Q: Solve for x: 2x + 4 = 10
A) 2
B) 3
C) 4
D) 5
Answer: B
Explain: 2x = 6, so x = 3`;
    updatePlaintextPreview();
  });

  $("importPlaintextConfirmBtn").addEventListener("click", async () => {
    if (!plaintextTargetDeckId) return;
    const items = parsePlaintextQuestions($("plaintextInput").value);
    if (items.length === 0) return;
    const mut = ensureMutableDeck(plaintextTargetDeckId);
    if (!mut) return;
    mut.questions.push(...items);
    $("plaintextModal").classList.add("hidden");
    await Store.save();
    renderDecksManager();
  });

  // JSON Backup Export / Restore
  $("exportDecksBtn").addEventListener("click", () => {
    const blob = new Blob(
      [JSON.stringify({ customDecks: state.customDecks, deckOverrides: state.deckOverrides }, null, 2)],
      { type: "application/json" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "booyah-decks-backup.json";
    a.click();
    URL.revokeObjectURL(url);
  });

  $("importDecksInput").addEventListener("change", async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      const imported = Array.isArray(parsed) ? parsed : parsed.customDecks;
      if (Array.isArray(imported)) {
        imported.forEach((d) => {
          if (d && d.name && Array.isArray(d.questions)) {
            const newId = `custom_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
            state.customDecks.push({ id: newId, name: String(d.name), questions: d.questions });
            state.selectedDecksForMatch.add(newId);
          }
        });
      }
      if (parsed.deckOverrides && typeof parsed.deckOverrides === "object") {
        Object.assign(state.deckOverrides, parsed.deckOverrides);
      }
      await Store.save();
      renderDecksManager();
    } catch {
      alert("Could not import backup file.");
    }
    e.target.value = "";
  });

  $("resetSeasonBtn").addEventListener("click", async () => {
    if (!confirm("Reset all multi-day season scores, wins, steals, and match history?")) return;
    state.season = createDefaultSeason();
    syncSetupInputsFromSeason();
    await Store.save();
    renderRivalryTab();
  });
});
