import type { VercelRequest, VercelResponse } from '@vercel/node'
import Anthropic from '@anthropic-ai/sdk'
import type { TimelineEvent } from './_helpers.js'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).end()
    return
  }

  const { event, question } = req.body as { event: TimelineEvent; question: string }

  if (!event || !question) {
    res.status(400).json({ error: 'Missing event or question' })
    return
  }

  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')

  try {
    const prompt = `You are a knowledgeable Biblical scholar and historian. A user is viewing an interactive timeline of the Biblical Historical Books and has a question about the following event:

Event: "${event.title}"
Book: ${event.book}
Scripture: ${event.scripture}
Date: ${event.approximateDate}

User's question: ${question}

Please answer thoughtfully, drawing on Biblical scholarship, theology, and historical context. Keep your answer focused and informative — typically 2–4 paragraphs. Write in flowing prose, not bullet points.`

    const stream = client.messages.stream({
      model: 'claude-opus-4-6',
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }],
    })

    for await (const chunk of stream) {
      if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
        res.write(`data: ${JSON.stringify({ text: chunk.delta.text })}\n\n`)
      }
    }

    res.write('data: [DONE]\n\n')
    res.end()
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    res.write(`data: ${JSON.stringify({ error: message })}\n\n`)
    res.end()
  }
}
