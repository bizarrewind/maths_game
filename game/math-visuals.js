// Visual Math Renderer: KaTeX + Offline Math Fallback + Color-Coded Key Terms + Dynamic Labeled SVG Diagrams
// Covers Grade 6–10 Math (Arithmetic, Sets, Geometry, Solids, Coordinates, Trigonometry, Ellipses)

const DIAGRAM_TYPES = [
  { id: "auto", label: "✨ Auto-Detect Diagram" },
  { id: "none", label: "🚫 No Diagram" },
  { id: "triangle", label: "📐 Triangle (Area / Angles)" },
  { id: "right_triangle", label: "📏 Right Triangle / Trig (θ)" },
  { id: "rectangle", label: "▭ Rectangle / Square" },
  { id: "cuboid", label: "📦 Cuboid / Cube (3D)" },
  { id: "cylinder", label: "🛢️ Cylinder / Cone / Sphere" },
  { id: "ellipse", label: "⬭ Ellipse / Conic" },
  { id: "angles", label: "∠ Lines & Angles" },
  { id: "coordinates", label: "📍 Coordinate Grid (x, y)" },
  { id: "venn", label: "⭕ Venn Diagram (Sets)" },
  { id: "compass", label: "🧭 Compass Bearing" },
  { id: "pie", label: "🥧 Pie Chart" }
];

function escapeMathHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

// Render $...$ / $$...$$ via KaTeX if available, plus color-coded numbers & math keywords for ESL readability
function renderRichMath(rawText, highlightTerms = true) {
  if (!rawText) return "";
  const text = String(rawText);

  // Split by $$...$$ or $...$ LaTeX delimiters
  const parts = text.split(/(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g);

  return parts.map((part) => {
    if (!part) return "";
    const isDisplay = part.startsWith("$$") && part.endsWith("$$");
    const isInline = !isDisplay && part.startsWith("$") && part.endsWith("$");

    if (isDisplay || isInline) {
      const tex = isDisplay ? part.slice(2, -2).trim() : part.slice(1, -1).trim();
      if (window.katex) {
        try {
          return window.katex.renderToString(tex, {
            displayMode: isDisplay,
            throwOnError: false,
            strict: false
          });
        } catch {
          // Fall through to clean fallback
        }
      }
      return `<span class="math-tex-fallback">${formatPlainMath(tex)}</span>`;
    }

    // Plain segment: single-pass calm textbook emphasis (never overlaps HTML tags)
    let html = escapeMathHtml(part);
    if (highlightTerms) {
      const tokenRe = new RegExp(
        [
          // 1. High-meaning constraint / goal words (subtle warm underline)
          "\\b(NOT|ONLY|neither|both|at least|at most|strictly between|equivalent|back-bearing|complement|supplement|proper subsets|Total Surface Area|Surface Area|Selling Price|Cost Price|Profit %|Loss %|Area|Volume|Perimeter|Profit|Loss|Discount|H\\.C\\.F\\.|L\\.C\\.M\\.|Mean|Median|Mode|Range|Bearing|Hypotenuse|Ellipse|Major axis|Minor axis|Eccentricity)\\b",
          // 2. Standalone math variables (n, x, y, k, θ) — italicized cleanly without quotes
          "\\b([nxykθ])\\b",
          // 3. Numbers with optional units/degrees/percentages (gentle ice-white tint, no box)
          "([−-]?\\d+(?:\\.\\d+)?(?:\\s*(?:cm²|cm³|cm|m²|m³|m|km|kg|g|L|°|%))?)"
        ].join("|"),
        "g"
      );

      html = html.replace(tokenRe, (full, keyWord, varSym, numTok) => {
        if (keyWord) return `<span class="kw-key">${keyWord}</span>`;
        if (varSym) return `<span class="kw-var">${varSym}</span>`;
        if (numTok) return `<span class="kw-num">${numTok}</span>`;
        return full;
      });
    }
    return html;
  }).join("");
}

function formatPlainMath(tex) {
  let s = escapeMathHtml(tex);
  s = s.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '<span class="frac"><span class="frac-n">$1</span><span class="frac-d">$2</span></span>');
  s = s.replace(/\\sqrt\{([^}]+)\}/g, "√($1)");
  s = s.replace(/\\theta/g, "θ").replace(/\\pi/g, "π").replace(/\\circ/g, "°").replace(/\\pm/g, "±");
  s = s.replace(/\\times/g, "×").replace(/\\div/g, "÷").replace(/\\le/g, "≤").replace(/\\ge/g, "≥");
  s = s.replace(/\^2/g, "²").replace(/\^3/g, "³").replace(/\^\{([^}]+)\}/g, "<sup>$1</sup>");
  return s;
}

// Extract numeric values from question text for dynamic SVG labeling
function extractNumbers(text) {
  const matches = String(text).match(/[−-]?\d+(?:\.\d+)?/g) || [];
  return matches.map((m) => parseFloat(m.replace("−", "-")));
}

function detectDiagramType(q) {
  const explicit = q.diagramType || "auto";
  if (explicit !== "auto") return explicit;

  const text = `${q.topic || ""} ${q.question || ""}`.toLowerCase();
  if (/\bellipse\b|\bfoci\b|major axis|minor axis/.test(text)) return "ellipse";
  if (/\bbearing\b|north-east|south-west|north-west|south-east|\bcompass\b|\b0\d{2}°|\b[123]\d{2}°/.test(text) && /\b(east|west|north|south|bearing)\b/.test(text)) return "compass";
  if (/\b(quadrant|origin|coordinate|abscissa|x-axis|y-axis)\b|\(\s*[−-]?\d+\s*,\s*[−-]?\d+\s*\)/.test(text)) return "coordinates";
  if (/\b(sin|cos|tan|cosec|sec|cot)\b|hypotenuse|ladder|right[- ]angled|pythagoras|elevation/.test(text)) return "right_triangle";
  if (/cuboid|cube|volume of a cube|surface area of a cube|surface area of a cuboid/.test(text)) return "cuboid";
  if (/cylinder|cone|sphere|hemisphere/.test(text)) return "cylinder";
  if (/supplementary|complementary|parallel lines|transversal|vertically opposite|straight line/.test(text)) return "angles";
  if (/triangle|isosceles|equilateral|rhombus|parallelogram/.test(text)) return "triangle";
  if (/rectangle|square|perimeter|park/.test(text) && !/cube|cuboid/.test(text)) return "rectangle";
  if (/venn|intersection|union|subset|a ∩ b|a ∪ b|x ∪ y/.test(text)) return "venn";
  if (/pie chart|sector|central angle/.test(text)) return "pie";
  return "none";
}

function svgWrap(inner, viewBox = "0 0 320 170") {
  return `<svg class="math-svg" viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Math diagram">${inner}</svg>`;
}

function generateMathDiagramSVG(q) {
  const type = detectDiagramType(q);
  if (!type || type === "none") return "";

  const text = String(q.question || "");
  const nums = extractNumbers(text);

  if (type === "triangle") {
    const isAngle = /°|angle|∠/.test(text);
    if (isAngle) {
      const a = nums[0] ? `${nums[0]}°` : "∠A";
      const b = nums[1] ? `${nums[1]}°` : "∠B";
      return svgWrap(`
        <polygon points="55,142 265,142 150,28" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" stroke-width="3" stroke-linejoin="round"/>
        <path d="M 85,142 A 30,30 0 0 0 76,120" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
        <path d="M 235,142 A 30,30 0 0 1 244,120" fill="none" stroke="#10b981" stroke-width="2.5"/>
        <text x="92" y="132" fill="#fbbf24" font-size="14" font-weight="800">${a}</text>
        <text x="205" y="132" fill="#10b981" font-size="14" font-weight="800">${b}</text>
        <text x="145" y="62" fill="#f43f5e" font-size="15" font-weight="900">?</text>
      `);
    }
    const base = nums[0] ? `${nums[0]} cm` : "base";
    const h = nums[1] ? `${nums[1]} cm` : "height";
    return svgWrap(`
      <polygon points="50,140 270,140 165,30" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" stroke-width="3" stroke-linejoin="round"/>
      <line x1="165" y1="30" x2="165" y2="140" stroke="#fbbf24" stroke-width="2.5" stroke-dasharray="6,4"/>
      <rect x="165" y="128" width="12" height="12" fill="none" stroke="#fbbf24" stroke-width="2"/>
      <text x="174" y="92" fill="#fbbf24" font-size="14" font-weight="800">h = ${h}</text>
      <text x="160" y="160" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="800">base = ${base}</text>
    `);
  }

  if (type === "right_triangle") {
    const hasTrig = /sin|cos|tan|θ/.test(text);
    const l1 = nums[0] ? `${nums[0]}` : (hasTrig ? "Opp (p)" : "a");
    const l2 = nums[1] ? `${nums[1]}` : (hasTrig ? "Adj (b)" : "b");
    return svgWrap(`
      <polygon points="65,140 250,140 65,32" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="3" stroke-linejoin="round"/>
      <rect x="65" y="124" width="16" height="16" fill="none" stroke="#fbbf24" stroke-width="2"/>
      <path d="M 218,140 A 32,32 0 0 0 223,124" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
      <text x="196" y="132" fill="#fbbf24" font-size="14" font-weight="900">${hasTrig ? "θ" : "90°"}</text>
      <text x="52" y="90" text-anchor="end" fill="#38bdf8" font-size="13" font-weight="800">${hasTrig ? "P" : l1}</text>
      <text x="155" y="160" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="800">${hasTrig ? "B" : l2}</text>
      <text x="172" y="76" fill="#f43f5e" font-size="13" font-weight="800">${hasTrig ? "H" : "c = ?"}</text>
    `);
  }

  if (type === "rectangle") {
    const isSq = /square/.test(text.toLowerCase());
    const l = nums[0] ? `${nums[0]}` : "l";
    const b = !isSq && nums[1] ? `${nums[1]}` : (isSq ? l : "b");
    return svgWrap(isSq ? `
      <rect x="105" y="25" width="110" height="110" rx="4" fill="rgba(245,158,11,0.12)" stroke="#fbbf24" stroke-width="3"/>
      <text x="160" y="156" text-anchor="middle" fill="#fbbf24" font-size="14" font-weight="800">side = ${l}</text>
    ` : `
      <rect x="60" y="34" width="200" height="96" rx="4" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" stroke-width="3"/>
      <text x="160" y="152" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="800">l = ${l}</text>
      <text x="272" y="86" fill="#fbbf24" font-size="14" font-weight="800">b = ${b}</text>
    `);
  }

  if (type === "cuboid") {
    const isCube = /cube/.test(text.toLowerCase()) && !/cuboid/.test(text.toLowerCase());
    const l = nums[0] ? `${nums[0]}` : "l";
    const b = isCube ? l : (nums[1] ? `${nums[1]}` : "b");
    const h = isCube ? l : (nums[2] ? `${nums[2]}` : "h");
    return svgWrap(`
      <polygon points="75,62 195,62 195,142 75,142" fill="rgba(56,189,248,0.14)" stroke="#38bdf8" stroke-width="2.8"/>
      <polygon points="75,62 120,30 240,30 195,62" fill="rgba(251,191,36,0.14)" stroke="#fbbf24" stroke-width="2.8"/>
      <polygon points="195,62 240,30 240,110 195,142" fill="rgba(16,185,129,0.14)" stroke="#10b981" stroke-width="2.8"/>
      <text x="135" y="160" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="800">${l}</text>
      <text x="228" y="132" fill="#fbbf24" font-size="13" font-weight="800">${b}</text>
      <text x="62" y="106" text-anchor="end" fill="#10b981" font-size="13" font-weight="800">${h}</text>
    `);
  }

  if (type === "cylinder") {
    const isCone = /cone/.test(text.toLowerCase());
    const isSphere = /sphere|hemisphere/.test(text.toLowerCase());
    if (isSphere) {
      return svgWrap(`
        <circle cx="160" cy="85" r="58" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" stroke-width="3"/>
        <ellipse cx="160" cy="85" rx="58" ry="18" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="5,4"/>
        <line x1="160" y1="85" x2="218" y2="85" stroke="#fbbf24" stroke-width="2.5"/>
        <text x="188" y="77" text-anchor="middle" fill="#fbbf24" font-size="14" font-weight="800">r</text>
      `);
    }
    if (isCone) {
      return svgWrap(`
        <ellipse cx="160" cy="132" rx="55" ry="16" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="2.8"/>
        <line x1="105" y1="132" x2="160" y2="24" stroke="#38bdf8" stroke-width="2.8"/>
        <line x1="215" y1="132" x2="160" y2="24" stroke="#38bdf8" stroke-width="2.8"/>
        <line x1="160" y1="24" x2="160" y2="132" stroke="#fbbf24" stroke-width="2.2" stroke-dasharray="5,4"/>
        <line x1="160" y1="132" x2="215" y2="132" stroke="#10b981" stroke-width="2.2"/>
        <text x="148" y="88" text-anchor="end" fill="#fbbf24" font-size="13" font-weight="800">h</text>
        <text x="188" y="126" text-anchor="middle" fill="#10b981" font-size="13" font-weight="800">r</text>
      `);
    }
    return svgWrap(`
      <ellipse cx="160" cy="38" rx="55" ry="16" fill="rgba(56,189,248,0.18)" stroke="#38bdf8" stroke-width="2.8"/>
      <path d="M 105,38 L 105,130 A 55,16 0 0 0 215,130 L 215,38" fill="rgba(56,189,248,0.1)" stroke="#38bdf8" stroke-width="2.8"/>
      <line x1="160" y1="38" x2="215" y2="38" stroke="#10b981" stroke-width="2.2"/>
      <text x="188" y="33" text-anchor="middle" fill="#10b981" font-size="13" font-weight="800">r</text>
      <text x="228" y="90" fill="#fbbf24" font-size="13" font-weight="800">h</text>
    `);
  }

  if (type === "ellipse") {
    return svgWrap(`
      <ellipse cx="160" cy="85" rx="108" ry="56" fill="rgba(139,92,246,0.14)" stroke="#8b5cf6" stroke-width="3"/>
      <line x1="40" y1="85" x2="280" y2="85" stroke="#475569" stroke-width="1.8" stroke-dasharray="4,4"/>
      <line x1="160" y1="16" x2="160" y2="154" stroke="#475569" stroke-width="1.8" stroke-dasharray="4,4"/>
      <line x1="160" y1="85" x2="268" y2="85" stroke="#fbbf24" stroke-width="2.5"/>
      <line x1="160" y1="85" x2="160" y2="29" stroke="#10b981" stroke-width="2.5"/>
      <circle cx="90" cy="85" r="4.5" fill="#f43f5e"/><circle cx="230" cy="85" r="4.5" fill="#f43f5e"/>
      <text x="215" y="77" fill="#fbbf24" font-size="13" font-weight="800">a</text>
      <text x="167" y="58" fill="#10b981" font-size="13" font-weight="800">b</text>
      <text x="86" y="104" text-anchor="middle" fill="#f43f5e" font-size="11" font-weight="800">F₁</text>
      <text x="234" y="104" text-anchor="middle" fill="#f43f5e" font-size="11" font-weight="800">F₂</text>
    `);
  }

  if (type === "angles") {
    const isComp = /complement|90/.test(text.toLowerCase());
    if (isComp) {
      const a = nums[0] ? `${nums[0]}°` : "x";
      return svgWrap(`
        <line x1="70" y1="140" x2="250" y2="140" stroke="#38bdf8" stroke-width="3"/>
        <line x1="70" y1="140" x2="70" y2="25" stroke="#38bdf8" stroke-width="3"/>
        <line x1="70" y1="140" x2="205" y2="45" stroke="#fbbf24" stroke-width="2.5"/>
        <rect x="70" y="122" width="18" height="18" fill="none" stroke="#94a3b8" stroke-width="2"/>
        <text x="132" y="128" fill="#fbbf24" font-size="14" font-weight="800">${a}</text>
        <text x="95" y="84" fill="#10b981" font-size="14" font-weight="900">?</text>
      `);
    }
    const a = nums[0] ? `${nums[0]}°` : "a";
    return svgWrap(`
      <line x1="40" y1="125" x2="280" y2="125" stroke="#38bdf8" stroke-width="3"/>
      <line x1="160" y1="125" x2="235" y2="35" stroke="#fbbf24" stroke-width="2.8"/>
      <path d="M 195,125 A 35,35 0 0 0 183,98" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
      <path d="M 125,125 A 35,35 0 0 1 183,98" fill="none" stroke="#10b981" stroke-width="2.5"/>
      <text x="206" y="114" fill="#fbbf24" font-size="14" font-weight="800">${a}</text>
      <text x="115" y="104" fill="#10b981" font-size="15" font-weight="900">?</text>
    `);
  }

  if (type === "coordinates") {
    const match = text.match(/\(\s*([−-]?\d+)\s*,\s*([−-]?\d+)\s*\)/);
    const hasPoint = Boolean(match);
    const px = match ? parseInt(match[1].replace("−", "-"), 10) : 0;
    const py = match ? parseInt(match[2].replace("−", "-"), 10) : 0;
    const scale = 9;
    const cx = Math.max(40, Math.min(280, 160 + px * scale));
    const cy = Math.max(20, Math.min(150, 85 - py * scale));
    const plotPoint = hasPoint
      ? `<circle cx="${cx}" cy="${cy}" r="6" fill="#fbbf24" stroke="#ffffff" stroke-width="2"/><text x="${cx + 10}" y="${cy - 6}" fill="#fbbf24" font-size="12" font-weight="900">(${px}, ${py})</text>`
      : "";
    return svgWrap(`
      <line x1="35" y1="85" x2="285" y2="85" stroke="#64748b" stroke-width="2"/>
      <line x1="160" y1="12" x2="160" y2="158" stroke="#64748b" stroke-width="2"/>
      <text x="278" y="79" fill="#94a3b8" font-size="11" font-weight="800">x</text>
      <text x="166" y="22" fill="#94a3b8" font-size="11" font-weight="800">y</text>
      <text x="225" y="34" fill="#475569" font-size="12" font-weight="800">I (+,+)</text>
      <text x="72" y="34" fill="#475569" font-size="12" font-weight="800">II (−,+)</text>
      <text x="72" y="144" fill="#475569" font-size="12" font-weight="800">III (−,−)</text>
      <text x="225" y="144" fill="#475569" font-size="12" font-weight="800">IV (+,−)</text>
      ${plotPoint}
    `);
  }

  if (type === "venn") {
    return svgWrap(`
      <rect x="25" y="15" width="270" height="140" rx="12" fill="rgba(255,255,255,0.03)" stroke="#475569" stroke-width="2"/>
      <circle cx="125" cy="85" r="52" fill="rgba(56,189,248,0.18)" stroke="#38bdf8" stroke-width="2.5"/>
      <circle cx="195" cy="85" r="52" fill="rgba(251,191,36,0.18)" stroke="#fbbf24" stroke-width="2.5"/>
      <text x="90" y="55" fill="#38bdf8" font-size="15" font-weight="900">A</text>
      <text x="222" y="55" fill="#fbbf24" font-size="15" font-weight="900">B</text>
      <text x="160" y="90" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="800">A ∩ B</text>
      <text x="275" y="34" fill="#94a3b8" font-size="13" font-weight="800">U</text>
    `);
  }

  if (type === "compass") {
    const deg = nums[0] && nums[0] <= 360 ? nums[0] : 90;
    const rad = ((deg - 90) * Math.PI) / 180;
    const tx = 160 + Math.cos(rad) * 55;
    const ty = 85 + Math.sin(rad) * 55;
    return svgWrap(`
      <circle cx="160" cy="85" r="60" fill="rgba(56,189,248,0.07)" stroke="#475569" stroke-width="2"/>
      <line x1="160" y1="18" x2="160" y2="152" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3"/>
      <line x1="92" y1="85" x2="228" y2="85" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3"/>
      <line x1="160" y1="85" x2="${tx.toFixed(1)}" y2="${ty.toFixed(1)}" stroke="#fbbf24" stroke-width="3.5"/>
      <circle cx="${tx.toFixed(1)}" cy="${ty.toFixed(1)}" r="4.5" fill="#fbbf24"/>
      <text x="160" y="13" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="900">N (000°)</text>
      <text x="242" y="89" fill="#94a3b8" font-size="12" font-weight="800">E</text>
      <text x="160" y="166" text-anchor="middle" fill="#94a3b8" font-size="12" font-weight="800">S</text>
      <text x="74" y="89" text-anchor="end" fill="#94a3b8" font-size="12" font-weight="800">W</text>
    `);
  }

  if (type === "pie") {
    return svgWrap(`
      <circle cx="160" cy="85" r="58" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" stroke-width="2.5"/>
      <path d="M 160,85 L 160,27 A 58,58 0 0 1 218,85 Z" fill="rgba(251,191,36,0.45)" stroke="#fbbf24" stroke-width="2.5"/>
      <path d="M 160,85 L 218,85 A 58,58 0 0 1 130,135 Z" fill="rgba(16,185,129,0.35)" stroke="#10b981" stroke-width="2.5"/>
      <text x="160" y="160" text-anchor="middle" fill="#94a3b8" font-size="12" font-weight="800">Total Circle = 360°</text>
    `);
  }

  return "";
}

function getFormulaHint(q) {
  if (q.hint) return q.hint;
  const text = `${q.topic || ""} ${q.question || ""}`.toLowerCase();
  if (/\bellipse\b|\bfoci\b|eccentricity/.test(text)) return "Standard Ellipse: $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, $c^2 = a^2 - b^2$";
  if (/\\sin|\bsin\b/.test(text)) return "$\\sin\\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$";
  if (/\\cos|\bcos\b/.test(text)) return "$\\cos\\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$";
  if (/\\tan|\btan\b/.test(text)) return "$\\tan\\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}$";
  if (/quadratic|discriminant|roots/.test(text)) return "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$";
  if (/cuboid/.test(text) && /volume/.test(text)) return "Volume = $l \\times b \\times h$";
  if (/cuboid/.test(text) && /surface/.test(text)) return "TSA = $2(lb + bh + lh)$";
  if (/cube/.test(text) && /volume/.test(text)) return "Volume = $a^3$";
  if (/cube/.test(text) && /surface/.test(text)) return "TSA = $6a^2$";
  if (/perimeter/.test(text) && /square/.test(text)) return "Square Perimeter = $4 \\times \\text{side}$";
  if (/perimeter/.test(text) && /rectangle/.test(text)) return "Rectangle Perimeter = $2(l + b)$";
  if (/triangle/.test(text) && /area/.test(text)) return "Area = $\\frac{1}{2} \\times \\text{base} \\times \\text{height}$";
  if (/triangle/.test(text) && /angle|∠/.test(text)) return "Sum of angles in a triangle = $180^\\circ$";
  if (/supplementary/.test(text)) return "Supplementary angles add up to $180^\\circ$";
  if (/complementary/.test(text)) return "Complementary angles add up to $90^\\circ$";
  if (/profit/.test(text)) return "$\\text{Profit } \\% = \\frac{\\text{SP} - \\text{CP}}{\\text{CP}} \\times 100\\%$";
  if (/loss/.test(text)) return "$\\text{Loss } \\% = \\frac{\\text{CP} - \\text{SP}}{\\text{CP}} \\times 100\\%$";
  if (/euler/.test(text)) return "Euler's Formula: $F + V - E = 2$";
  if (/mean/.test(text)) return "$\\text{Mean} = \\frac{\\text{Sum of values}}{\\text{Number of values}}$";
  if (/median/.test(text)) return "Sort numbers small → big, then find the middle value!";
  if (/subset/.test(text)) return "Number of subsets = $2^n$ (Proper = $2^n - 1$)";
  if (/h\.c\.f\.|l\.c\.m\./.test(text)) return "$\\text{Number}_1 \\times \\text{Number}_2 = \\text{HCF} \\times \\text{LCM}$";
  if (/cylinder/.test(text)) return "Cylinder Volume = $\\pi r^2 h$, CSA = $2\\pi r h$";
  if (/cone/.test(text)) return "Cone Volume = $\\frac{1}{3}\\pi r^2 h$, Slant $l = \\sqrt{r^2 + h^2}$";
  if (/sphere/.test(text)) return "Sphere Volume = $\\frac{4}{3}\\pi r^3$, SA = $4\\pi r^2$";
  if (/origin/.test(text)) return "The origin is where the x-axis and y-axis meet: $(0, 0)$";
  return "Break the problem into small steps — check the highlighted numbers carefully!";
}
