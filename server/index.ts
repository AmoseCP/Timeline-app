import express from 'express'
import cors from 'cors'
import Anthropic from '@anthropic-ai/sdk'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
const port = process.env.PORT ? parseInt(process.env.PORT) : 3001

app.use(cors())
app.use(express.json())

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

interface TimelineEvent {
  id: string
  title: string
  book: string
  scripture: string
  approximateDate: string
  dateValue: number
  summary: string
  category: string
}

function buildEnhancePrompt(
  event: TimelineEvent,
  enhancementType: 'detailed' | 'theological' | 'historical'
): string {
  const base = `Event: "${event.title}"
Book: ${event.book}
Scripture: ${event.scripture}
Date: ${event.approximateDate}
Category: ${event.category}

Pre-written summary: ${event.summary}`

  if (enhancementType === 'detailed') {
    return `${base}

Please write 2–3 rich, engaging paragraphs about this Biblical event. Cover:
1. The vivid narrative details — what happened, who was involved, the human drama
2. The theological significance — what this event reveals about God's character and purposes
3. Its connections to the broader story of redemption and how it points forward

Write in a scholarly yet accessible tone, as if for a well-educated reader who loves Scripture. Do not use bullet points — write flowing paragraphs only.`
  }

  if (enhancementType === 'theological') {
    return `${base}

Please write 2–3 focused paragraphs exploring the theological themes of this event. Cover:
1. What this event reveals about God — His character, attributes, and ways of working
2. Key theological concepts illustrated (covenant, faith, judgment, mercy, sovereignty, etc.)
3. How this event fits within the metanarrative of Scripture — its typological or prophetic significance, and how it connects to the New Testament

Write in a scholarly, reverent tone. Do not use bullet points — write flowing paragraphs only.`
  }

  // historical
  return `${base}

Please write 2–3 paragraphs situating this event in its ancient Near Eastern historical and archaeological context. Cover:
1. The historical setting — what was happening in the surrounding world (Egypt, Assyria, Babylon, Persia, Canaan, etc.) at this time
2. Archaeological or extrabiblical evidence related to this event or period
3. How understanding the historical context deepens our appreciation of the Biblical account

Write in a scholarly yet accessible tone. Do not use bullet points — write flowing paragraphs only.`
}

// POST /api/enhance-summary
app.post('/api/enhance-summary', async (req, res) => {
  const { event, enhancementType } = req.body as {
    event: TimelineEvent
    enhancementType: 'detailed' | 'theological' | 'historical'
  }

  if (!event || !enhancementType) {
    res.status(400).json({ error: 'Missing event or enhancementType' })
    return
  }

  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')
  res.setHeader('X-Accel-Buffering', 'no')
  res.flushHeaders()

  try {
    const prompt = buildEnhancePrompt(event, enhancementType)

    const stream = anthropic.messages.stream({
      model: 'claude-opus-4-6',
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }],
    })

    for await (const chunk of stream) {
      if (
        chunk.type === 'content_block_delta' &&
        chunk.delta.type === 'text_delta'
      ) {
        const data = JSON.stringify({ text: chunk.delta.text })
        res.write(`data: ${data}\n\n`)
      }
    }

    res.write('data: [DONE]\n\n')
    res.end()
  } catch (err) {
    console.error('Error calling Anthropic API:', err)
    const message = err instanceof Error ? err.message : 'Unknown error'
    res.write(`data: ${JSON.stringify({ error: message })}\n\n`)
    res.end()
  }
})

// POST /api/ask-question
app.post('/api/ask-question', async (req, res) => {
  const { event, question } = req.body as {
    event: TimelineEvent
    question: string
  }

  if (!event || !question) {
    res.status(400).json({ error: 'Missing event or question' })
    return
  }

  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')
  res.setHeader('X-Accel-Buffering', 'no')
  res.flushHeaders()

  try {
    const prompt = `You are a knowledgeable Biblical scholar and historian. A user is viewing an interactive timeline of the Biblical Historical Books and has a question about the following event:

Event: "${event.title}"
Book: ${event.book}
Scripture: ${event.scripture}
Date: ${event.approximateDate}

User's question: ${question}

Please answer thoughtfully, drawing on Biblical scholarship, theology, and historical context. Keep your answer focused and informative — typically 2–4 paragraphs. Write in flowing prose, not bullet points.`

    const stream = anthropic.messages.stream({
      model: 'claude-opus-4-6',
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }],
    })

    for await (const chunk of stream) {
      if (
        chunk.type === 'content_block_delta' &&
        chunk.delta.type === 'text_delta'
      ) {
        const data = JSON.stringify({ text: chunk.delta.text })
        res.write(`data: ${data}\n\n`)
      }
    }

    res.write('data: [DONE]\n\n')
    res.end()
  } catch (err) {
    console.error('Error calling Anthropic API:', err)
    const message = err instanceof Error ? err.message : 'Unknown error'
    res.write(`data: ${JSON.stringify({ error: message })}\n\n`)
    res.end()
  }
})

// Serve the Vite production build in production
const distPath = path.resolve(__dirname, '../dist')
app.use(express.static(distPath))
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

app.listen(port, () => {
  console.log(`✦ Biblical Timeline API server running on port ${port}`)
})
