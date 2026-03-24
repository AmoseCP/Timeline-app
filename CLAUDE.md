# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# AI-Enhanced Biblical Historical Books Timeline

## Project Overview
An interactive web application presenting a chronological timeline of major events from the Biblical Historical Books (Joshua through Nehemiah), enhanced with AI-powered explanations via Claude Opus 4.6.

## Architecture

### Frontend (React + TypeScript + Vite)
- **Port**: 5173 (dev)
- **Entry**: `src/main.tsx` → `src/App.tsx`
- Tailwind CSS with a custom "Ancient Scroll" design system
- Google Fonts: Cinzel (headings), Lora (body), Inter (UI)

### Backend (Express.js)
- **Port**: 3001
- **Entry**: `server/index.ts`
- Run with `tsx` (not `ts-node`)
- Connects to Anthropic API for Claude Opus 4.6

### API Proxy
Vite proxies `/api/*` requests to `http://localhost:3001` during development.

## Running the Project

```bash
# Install dependencies
npm install

# Copy env file and add your API key
cp .env.example .env
# Edit .env and set ANTHROPIC_API_KEY

# Start both servers concurrently
npm run dev

# Or run individually:
npm run dev:client   # Vite dev server only
npm run dev:server   # Express server only
```

## API Endpoints

### `POST /api/enhance-summary`
Streams an AI-enhanced description of a timeline event.

**Request body:**
```json
{
  "event": { ...TimelineEvent },
  "enhancementType": "detailed" | "theological" | "historical"
}
```

**Response**: Server-Sent Events (SSE) stream of text chunks.

### `POST /api/ask-question`
Streams Claude's answer to a user question about an event.

**Request body:**
```json
{
  "event": { ...TimelineEvent },
  "question": "string"
}
```

**Response**: Server-Sent Events (SSE) stream of text chunks.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `ANTHROPIC_API_KEY` | Yes | Your Anthropic API key |
| `PORT` | No | Express server port (default: 3001) |

## Data

33 timeline events spanning from ~1406 BCE (Crossing the Jordan) to ~445 BCE (Nehemiah Rebuilds the Walls), covering:
- **Conquest** (Joshua): Israel enters and conquers Canaan
- **Judges**: Cycles of apostasy, oppression, and deliverance
- **Transition**: Ruth, Samuel's early life
- **United Monarchy**: Saul, David, Solomon
- **Divided Kingdom**: Northern/Southern kingdoms, major prophets
- **Exile**: Fall of Jerusalem, Babylonian captivity
- **Restoration**: Return from exile, temple rebuilt, Esther, Ezra, Nehemiah

## Design System

### Colors
- Background: `#0f0a05` (near-black warm)
- Page content: `#1a0f06`
- Parchment cards: `#f5e6c8` → `#ede0b8` gradient
- Gold timeline: `#c9a84c` → `#8b6914`

### Category Colors
| Category | Color |
|----------|-------|
| conquest | `#2d7a3a` (forest green) |
| judges | `#7a4f2d` (brown) |
| transition | `#7a2d5a` (purple) |
| united-monarchy | `#2d3d7a` (royal blue) |
| divided-kingdom | `#7a2d2d` (crimson) |
| exile | `#4a3a7a` (deep purple) |
| restoration | `#2d6b6b` (teal) |

## Key Implementation Notes

1. **SSE Streaming**: The server uses Express with `res.setHeader('Content-Type', 'text/event-stream')`. The frontend uses `fetch` with a `ReadableStream` to parse `data:` prefixed JSON chunks.

2. **TypeScript**: All shared types live in `src/types/index.ts`. Server uses `tsx` for execution.

3. **Mobile**: EventDetail renders as a bottom drawer on mobile, right sidebar on desktop (lg breakpoint).

4. **Sorting**: Events are sorted by `dateValue` ascending (most negative = earliest BCE date first).
