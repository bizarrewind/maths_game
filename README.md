# 🔥 BOOYAH! — Math Chaos (Grades 6–10 Classroom Game)

An interactive smartboard & classroom math review game built for **Nepal CDC Grades 6–10 Mathematics** (starting with a full, polished **420-question Grade 7 syllabus** plus structured placeholders and starter decks for Grades 6, 8, 9, and 10).

## Features
- **Dynamic Multi-Team Setup:** Auto-spawning team builder or 1-click random team generator (`2–12` teams).
- **SAT-Style Adaptive Difficulty:** Combines progressive board scaling (`Easy → Medium → Hard`) with per-squad skill & leaderboard rubber-banding (hidden difficulty badges so gameplay feels fair).
- **Anti-Guessing Rebound Steals:** Wrong options are replaced with a freshly generated plausible decoy and all 4 options are reshuffled before passing to another squad.
- **Visual Math & Diagrams:** KaTeX LaTeX rendering (with offline HTML fallback), calm textbook emphasis, labeled SVG geometry/trig/ellipse/coordinate/Venn diagrams, and `💡 Hint (−1 pt)` clues.
- **Chaos Rewards & Physics FX:** 3-card mystery draws (`+1`, `+2`, `+3 BOOYAH`, `-1 Bomb`, `Steal`, `Swap`, `Tornado`, `2× Jackpot`), a 3-reel Double-or-Nothing slot machine, racing score bars, and Canvas particle physics (`ScoreFX`).
- **Google-Forms-Style Deck Builder:** Edit any built-in or custom deck inline, attach images to questions/options, or bulk-paste plaintext questions (no JSON required).
- **Multi-Day Season Rivalry:** Networked persistence via `/api/state` (Upstash Redis on Vercel, `data/store.json` locally, `localStorage` offline fallback).

## Run Locally
```bash
node game/dev-server.js
```
Open `http://localhost:8000`.

## Download Textbook PDFs from Looma (Grades 6–10)
```bash
for c in 6 7 8 9 10; do
  python3 scrape_looma_books.py "https://looma.website/chapters?class=class${c}&grade=Grade%20${c}&subject=math&prefix=${c}M" -o books
done
```
