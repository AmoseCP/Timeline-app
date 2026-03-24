# The Historical Books — AI-Enhanced Biblical Timeline

An interactive, visually rich timeline of the 33 major events in the Biblical Historical Books (Joshua through Nehemiah), enhanced with AI-powered insights powered by Claude Opus 4.6.

---

## What It Is

This app charts Israel's story from the **Crossing of the Jordan (~1406 BCE)** to the **Rebuilding of Jerusalem's Walls (~445 BCE)** — nearly a thousand years of history across twelve books of the Bible: Joshua, Judges, Ruth, 1–2 Samuel, 1–2 Kings, 1–2 Chronicles, Ezra, Nehemiah, and Esther.

Each event comes with a pre-written theological summary. Clicking any event opens a detail panel where you can ask Claude to:

- **Enhance the summary** — richer narrative detail, human drama, and redemptive significance
- **Explore theological themes** — what the event reveals about God's character, key doctrines, and New Testament connections
- **Understand historical context** — the ancient Near Eastern world, archaeological evidence, and surrounding empires
- **Ask any question** — a live Q&A panel where Claude answers as a Biblical scholar

---

## Events Covered

| Era | Books | Period |
|-----|-------|--------|
| Conquest | Joshua | ~1406–1375 BCE |
| Judges | Judges | ~1375–1050 BCE |
| Transition | Ruth | ~1100 BCE |
| United Monarchy | 1–2 Samuel, 1 Kings | ~1105–930 BCE |
| Divided Kingdom | 1–2 Kings | ~930–586 BCE |
| Exile | 2 Kings | ~586 BCE |
| Restoration | Ezra, Esther, Nehemiah | ~538–445 BCE |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18 or later
- An [Anthropic API key](https://console.anthropic.com)

### Installation

```bash
git clone https://github.com/AmoseCP/Timeline-app.git
cd Timeline-app
npm install
```

### Configuration

```bash
cp .env.example .env
```

Open `.env` and add your API key:

```
ANTHROPIC_API_KEY=sk-ant-...
```

### Run in Development

```bash
npm run dev
```

This starts two servers concurrently:
- **Frontend** (Vite): http://localhost:5173
- **API server** (Express): http://localhost:3001

Open http://localhost:5173 in your browser.

---

## Deployment

### Vercel (recommended)

1. Push the repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo
3. Vercel auto-detects the Vite framework — click **Deploy**
4. After deploy, go to **Settings → Environment Variables** and add `ANTHROPIC_API_KEY`
5. Trigger a redeploy to pick up the variable

> **Note:** The free Vercel plan limits serverless functions to 10 seconds. If AI responses time out, upgrade to Pro (which enables the 60-second limit already configured in `vercel.json`) or reduce `max_tokens` in `api/enhance-summary.ts` and `api/ask-question.ts`.

### Docker

```bash
docker build -t timeline-app .
docker run -p 3001:3001 -e ANTHROPIC_API_KEY=sk-ant-... timeline-app
```

Open http://localhost:3001. The container serves both the frontend and API from a single port.

---

## Project Structure

```
├── api/                    # Vercel serverless functions (production)
│   ├── _helpers.ts         # Shared prompt builders
│   ├── enhance-summary.ts  # POST /api/enhance-summary
│   └── ask-question.ts     # POST /api/ask-question
├── server/
│   └── index.ts            # Express dev server (local development)
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── FilterBar.tsx
│   │   ├── Timeline.tsx
│   │   ├── TimelineEvent.tsx
│   │   └── EventDetail.tsx  # AI enhancement panel
│   ├── data/
│   │   └── events.ts        # All 33 timeline events
│   └── types/
│       └── index.ts         # Shared TypeScript types
├── Dockerfile
└── vercel.json
```

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **Fonts**: Cinzel (headings), Lora (body) via Google Fonts
- **Backend**: Express.js (dev) / Vercel serverless functions (production)
- **AI**: Claude Opus 4.6 via the Anthropic SDK, streamed via Server-Sent Events
- **Containerization**: Docker (multi-stage build)

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start frontend + API server concurrently |
| `npm run dev:client` | Start Vite dev server only |
| `npm run dev:server` | Start Express API server only |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
