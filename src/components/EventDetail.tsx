import { useState, useRef, useEffect, useCallback } from 'react'
import type { TimelineEvent, EnhancementType } from '../types'
import { CATEGORY_META } from '../types'

interface EventDetailProps {
  event: TimelineEvent | null
  onClose: () => void
}

type AiState = 'idle' | 'loading' | 'streaming' | 'done' | 'error'

interface AiSession {
  type: EnhancementType | 'qa'
  content: string
  state: AiState
  question?: string
}

async function streamSSE(
  url: string,
  body: object,
  onChunk: (text: string) => void,
  onDone: () => void,
  onError: (msg: string) => void
): Promise<void> {
  let response: Response
  try {
    response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  } catch {
    onError('Network error — is the server running?')
    return
  }

  if (!response.ok) {
    onError(`Server error: ${response.status}`)
    return
  }

  const reader = response.body?.getReader()
  if (!reader) {
    onError('Failed to read response stream')
    return
  }

  const decoder = new TextDecoder()
  let buffer = ''

  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split('\n')
      buffer = lines.pop() ?? ''

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue
        const raw = line.slice(6).trim()
        if (raw === '[DONE]') {
          onDone()
          return
        }
        try {
          const parsed = JSON.parse(raw) as { text?: string; error?: string }
          if (parsed.error) {
            onError(parsed.error)
            return
          }
          if (parsed.text) {
            onChunk(parsed.text)
          }
        } catch {
          // ignore malformed lines
        }
      }
    }
  } finally {
    reader.releaseLock()
  }

  onDone()
}

const ENHANCEMENT_BUTTONS: {
  type: EnhancementType
  label: string
  icon: string
  description: string
}[] = [
  {
    type: 'detailed',
    label: 'Enhance Summary',
    icon: '✨',
    description: 'Rich narrative details, 2–3 paragraphs',
  },
  {
    type: 'theological',
    label: 'Theological Themes',
    icon: '📖',
    description: 'Theological significance & typology',
  },
  {
    type: 'historical',
    label: 'Historical Context',
    icon: '🏛️',
    description: 'Ancient Near Eastern backdrop',
  },
]

export default function EventDetail({ event, onClose }: EventDetailProps) {
  const [sessions, setSessions] = useState<AiSession[]>([])
  const [question, setQuestion] = useState('')
  const [activeTab, setActiveTab] = useState<'summary' | 'ai' | 'qa'>('summary')
  const prevEventId = useRef<string | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  // Reset when event changes
  useEffect(() => {
    if (event?.id !== prevEventId.current) {
      prevEventId.current = event?.id ?? null
      setSessions([])
      setQuestion('')
      setActiveTab('summary')
    }
  }, [event?.id])

  // Auto-scroll to latest content
  useEffect(() => {
    const hasStreaming = sessions.some((s) => s.state === 'streaming')
    if (hasStreaming) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [sessions])

  const handleEnhance = useCallback(
    async (type: EnhancementType) => {
      if (!event) return

      const existing = sessions.find((s) => s.type === type)
      if (existing && (existing.state === 'streaming' || existing.state === 'loading')) return

      // Remove any previous session of same type
      setSessions((prev) => prev.filter((s) => s.type !== type))
      setActiveTab('ai')

      const newSession: AiSession = { type, content: '', state: 'loading' }
      setSessions((prev) => [...prev, newSession])

      await streamSSE(
        '/api/enhance-summary',
        { event, enhancementType: type },
        (text) => {
          setSessions((prev) =>
            prev.map((s) =>
              s.type === type ? { ...s, content: s.content + text, state: 'streaming' } : s
            )
          )
        },
        () => {
          setSessions((prev) =>
            prev.map((s) => (s.type === type ? { ...s, state: 'done' } : s))
          )
        },
        (msg) => {
          setSessions((prev) =>
            prev.map((s) =>
              s.type === type ? { ...s, content: msg, state: 'error' } : s
            )
          )
        }
      )
    },
    [event, sessions]
  )

  const handleAskQuestion = useCallback(async () => {
    if (!event || !question.trim()) return

    const q = question.trim()
    setQuestion('')
    setActiveTab('qa')

    const sessionId = `qa-${Date.now()}`
    const newSession: AiSession = {
      type: 'qa',
      content: '',
      state: 'loading',
      question: q,
    }

    setSessions((prev) => [...prev, { ...newSession, type: 'qa' as const }])

    await streamSSE(
      '/api/ask-question',
      { event, question: q },
      (text) => {
        setSessions((prev) =>
          prev.map((s) =>
            s.question === q && s.type === 'qa'
              ? { ...s, content: s.content + text, state: 'streaming' }
              : s
          )
        )
        void sessionId // keep reference
      },
      () => {
        setSessions((prev) =>
          prev.map((s) =>
            s.question === q && s.type === 'qa' ? { ...s, state: 'done' } : s
          )
        )
      },
      (msg) => {
        setSessions((prev) =>
          prev.map((s) =>
            s.question === q && s.type === 'qa'
              ? { ...s, content: msg, state: 'error' }
              : s
          )
        )
      }
    )
  }, [event, question])

  const aiSessions = sessions.filter((s) => s.type !== 'qa')
  const qaSessions = sessions.filter((s) => s.type === 'qa')

  if (!event) return null

  const meta = CATEGORY_META[event.category]

  // ─── Panel content ───────────────────────────────────────────────
  const panelContent = (
    <div className="flex flex-col h-full">
      {/* ── Header ── */}
      <div
        className="flex-shrink-0 px-5 pt-5 pb-4"
        style={{
          borderBottom: `2px solid ${meta.color}44`,
          background: `linear-gradient(to bottom, ${meta.color}22, transparent)`,
        }}
      >
        {/* Top row: category badge + close */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <span
            className="category-badge"
            style={{ color: meta.color, borderColor: `${meta.color}66`, backgroundColor: `${meta.color}18` }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: meta.color }} />
            {meta.label}
          </span>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
            style={{ color: 'rgba(201,168,76,0.7)', border: '1px solid rgba(201,168,76,0.3)' }}
            aria-label="Close panel"
            onMouseEnter={(e) => {
              ;(e.target as HTMLButtonElement).style.color = '#f0c866'
              ;(e.target as HTMLButtonElement).style.borderColor = '#c9a84c'
            }}
            onMouseLeave={(e) => {
              ;(e.target as HTMLButtonElement).style.color = 'rgba(201,168,76,0.7)'
              ;(e.target as HTMLButtonElement).style.borderColor = 'rgba(201,168,76,0.3)'
            }}
          >
            ✕
          </button>
        </div>

        {/* Date */}
        <p
          className="font-heading text-xs tracking-widest uppercase mb-1.5"
          style={{ color: meta.color, fontFamily: 'Cinzel, serif' }}
        >
          {event.approximateDate}
        </p>

        {/* Title */}
        <h2
          className="font-heading font-bold leading-snug mb-1"
          style={{ color: '#f5e6c8', fontFamily: 'Cinzel, serif', fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)' }}
        >
          {event.title}
        </h2>

        {/* Scripture ref */}
        <p className="font-body text-sm italic" style={{ color: 'rgba(201,168,76,0.75)' }}>
          {event.book} · {event.scripture}
        </p>
      </div>

      {/* ── Tab bar ── */}
      <div
        className="flex-shrink-0 flex border-b"
        style={{ borderColor: 'rgba(201,168,76,0.15)' }}
      >
        {[
          { id: 'summary' as const, label: 'Summary' },
          { id: 'ai' as const, label: `AI Insights${aiSessions.length ? ` (${aiSessions.length})` : ''}` },
          { id: 'qa' as const, label: `Q&A${qaSessions.length ? ` (${qaSessions.length})` : ''}` },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="flex-1 py-2.5 text-xs font-heading tracking-wide uppercase transition-all"
            style={{
              fontFamily: 'Cinzel, serif',
              fontSize: '0.62rem',
              letterSpacing: '0.08em',
              color: activeTab === tab.id ? '#f0c866' : 'rgba(201,168,76,0.5)',
              borderBottom: activeTab === tab.id ? `2px solid ${meta.color}` : '2px solid transparent',
              backgroundColor: activeTab === tab.id ? `${meta.color}0d` : 'transparent',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Scrollable body ── */}
      <div className="flex-1 overflow-y-auto px-5 py-4">

        {/* ─ Summary Tab ─ */}
        {activeTab === 'summary' && (
          <div className="animate-fade-in">
            <p
              className="font-body leading-relaxed mb-6"
              style={{ color: '#f5e6c8', fontSize: '0.925rem', lineHeight: '1.85' }}
            >
              {event.summary}
            </p>

            {/* Enhancement buttons */}
            <div className="ornament mb-4">
              <span>AI Enhancement</span>
            </div>

            <div className="space-y-2.5">
              {ENHANCEMENT_BUTTONS.map(({ type, label, icon, description }) => {
                const session = sessions.find((s) => s.type === type)
                const isActive = session?.state === 'loading' || session?.state === 'streaming'
                const isDone = session?.state === 'done'

                return (
                  <button
                    key={type}
                    onClick={() => handleEnhance(type)}
                    disabled={isActive}
                    className="ai-btn w-full text-left px-4 py-3 rounded-lg transition-all duration-200 group"
                    style={{
                      backgroundColor: isDone
                        ? `${meta.color}20`
                        : 'rgba(201,168,76,0.06)',
                      border: isDone
                        ? `1px solid ${meta.color}55`
                        : '1px solid rgba(201,168,76,0.2)',
                      opacity: isActive ? 0.7 : 1,
                      cursor: isActive ? 'not-allowed' : 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        ;(e.currentTarget as HTMLElement).style.borderColor = `${meta.color}88`
                        ;(e.currentTarget as HTMLElement).style.backgroundColor = `${meta.color}15`
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        ;(e.currentTarget as HTMLElement).style.borderColor = isDone
                          ? `${meta.color}55`
                          : 'rgba(201,168,76,0.2)'
                        ;(e.currentTarget as HTMLElement).style.backgroundColor = isDone
                          ? `${meta.color}20`
                          : 'rgba(201,168,76,0.06)'
                      }
                    }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{icon}</span>
                        <div>
                          <div
                            className="font-heading text-xs font-semibold"
                            style={{ color: '#f5e6c8', fontFamily: 'Cinzel, serif' }}
                          >
                            {label}
                          </div>
                          <div
                            className="font-body text-xs"
                            style={{ color: 'rgba(245,230,200,0.5)', fontStyle: 'italic' }}
                          >
                            {description}
                          </div>
                        </div>
                      </div>
                      {isActive && (
                        <svg className="animate-spin w-4 h-4 flex-shrink-0" style={{ color: meta.color }} fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                      )}
                      {isDone && !isActive && (
                        <svg className="w-4 h-4 flex-shrink-0" style={{ color: meta.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                      {!isActive && !isDone && (
                        <svg className="w-4 h-4 flex-shrink-0 opacity-40 group-hover:opacity-70 transition-opacity" style={{ color: '#c9a84c' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* ─ AI Insights Tab ─ */}
        {activeTab === 'ai' && (
          <div className="animate-fade-in space-y-6">
            {aiSessions.length === 0 ? (
              <div className="text-center py-10">
                <p
                  className="font-body italic text-sm"
                  style={{ color: 'rgba(201,168,76,0.45)' }}
                >
                  Use the AI Enhancement buttons on the Summary tab to generate insights.
                </p>
              </div>
            ) : (
              aiSessions.map((session, i) => {
                const btnMeta = ENHANCEMENT_BUTTONS.find((b) => b.type === session.type)
                return (
                  <div key={`${session.type}-${i}`}>
                    {/* Section header */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm">{btnMeta?.icon}</span>
                      <h3
                        className="font-heading text-xs font-semibold tracking-widest uppercase"
                        style={{ color: meta.color, fontFamily: 'Cinzel, serif' }}
                      >
                        {btnMeta?.label}
                      </h3>
                      {session.state === 'streaming' && (
                        <svg className="animate-spin w-3 h-3 ml-auto" style={{ color: meta.color }} fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                      )}
                    </div>

                    {/* Loading placeholder */}
                    {session.state === 'loading' && (
                      <div className="space-y-2">
                        {[80, 95, 70].map((w) => (
                          <div
                            key={w}
                            className="h-3.5 rounded animate-pulse"
                            style={{ width: `${w}%`, backgroundColor: 'rgba(201,168,76,0.15)' }}
                          />
                        ))}
                      </div>
                    )}

                    {/* Error state */}
                    {session.state === 'error' && (
                      <div
                        className="p-3 rounded-lg text-sm font-body"
                        style={{
                          backgroundColor: 'rgba(122,45,45,0.2)',
                          border: '1px solid rgba(122,45,45,0.4)',
                          color: '#f5a0a0',
                        }}
                      >
                        ⚠ {session.content}
                      </div>
                    )}

                    {/* Content */}
                    {(session.state === 'streaming' || session.state === 'done') && (
                      <div
                        className={`ai-output streaming-text ${session.state === 'streaming' ? 'streaming-cursor' : ''}`}
                        style={{ color: '#f0e8d8' }}
                      >
                        {session.content}
                      </div>
                    )}

                    {i < aiSessions.length - 1 && (
                      <div
                        className="mt-6 h-px"
                        style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)' }}
                      />
                    )}
                  </div>
                )
              })
            )}
            <div ref={bottomRef} />
          </div>
        )}

        {/* ─ Q&A Tab ─ */}
        {activeTab === 'qa' && (
          <div className="animate-fade-in">
            {/* Previous Q&A sessions */}
            <div className="space-y-6 mb-6">
              {qaSessions.map((session, i) => (
                <div key={i}>
                  {/* Question */}
                  <div
                    className="mb-3 p-3 rounded-lg"
                    style={{
                      backgroundColor: `${meta.color}15`,
                      border: `1px solid ${meta.color}33`,
                    }}
                  >
                    <p
                      className="text-xs font-heading uppercase tracking-widest mb-1"
                      style={{ color: meta.color, fontFamily: 'Cinzel, serif' }}
                    >
                      Your Question
                    </p>
                    <p className="font-body text-sm" style={{ color: '#f5e6c8' }}>
                      {session.question}
                    </p>
                  </div>

                  {/* Answer */}
                  <div>
                    <p
                      className="text-xs font-heading uppercase tracking-widest mb-2"
                      style={{ color: meta.color, fontFamily: 'Cinzel, serif' }}
                    >
                      {session.state === 'loading' ? 'Thinking…' : 'Answer'}
                    </p>

                    {session.state === 'loading' && (
                      <div className="space-y-2">
                        {[90, 75, 85].map((w) => (
                          <div
                            key={w}
                            className="h-3.5 rounded animate-pulse"
                            style={{ width: `${w}%`, backgroundColor: 'rgba(201,168,76,0.15)' }}
                          />
                        ))}
                      </div>
                    )}

                    {session.state === 'error' && (
                      <div
                        className="p-3 rounded-lg text-sm font-body"
                        style={{
                          backgroundColor: 'rgba(122,45,45,0.2)',
                          border: '1px solid rgba(122,45,45,0.4)',
                          color: '#f5a0a0',
                        }}
                      >
                        ⚠ {session.content}
                      </div>
                    )}

                    {(session.state === 'streaming' || session.state === 'done') && (
                      <div
                        className={`ai-output streaming-text ${session.state === 'streaming' ? 'streaming-cursor' : ''}`}
                        style={{ color: '#f0e8d8' }}
                      >
                        {session.content}
                      </div>
                    )}
                  </div>

                  {i < qaSessions.length - 1 && (
                    <div
                      className="mt-6 h-px"
                      style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)' }}
                    />
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input area */}
            <div
              className="sticky bottom-0 pt-3"
              style={{ backgroundColor: '#1a0f06' }}
            >
              <div className="ornament mb-3">
                <span>Ask a Question</span>
              </div>
              <div className="flex gap-2">
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      void handleAskQuestion()
                    }
                  }}
                  placeholder="Ask anything about this event…"
                  rows={2}
                  className="flex-1 px-3 py-2.5 rounded-lg text-sm resize-none outline-none transition-all"
                  style={{
                    backgroundColor: 'rgba(245,230,200,0.06)',
                    border: '1px solid rgba(201,168,76,0.25)',
                    color: '#f5e6c8',
                    fontFamily: 'Lora, serif',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#c9a84c'
                    e.target.style.backgroundColor = 'rgba(245,230,200,0.1)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(201,168,76,0.25)'
                    e.target.style.backgroundColor = 'rgba(245,230,200,0.06)'
                  }}
                />
                <button
                  onClick={() => void handleAskQuestion()}
                  disabled={!question.trim() || qaSessions.some((s) => s.state === 'loading' || s.state === 'streaming')}
                  className="px-4 py-2 rounded-lg font-heading text-xs uppercase tracking-widest transition-all disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
                  style={{
                    fontFamily: 'Cinzel, serif',
                    fontSize: '0.62rem',
                    letterSpacing: '0.1em',
                    backgroundColor: meta.color,
                    color: '#0f0a05',
                    fontWeight: 700,
                  }}
                >
                  Ask
                </button>
              </div>
              <p
                className="text-center mt-1.5 text-xs"
                style={{ color: 'rgba(201,168,76,0.4)', fontFamily: 'Lora, serif', fontStyle: 'italic' }}
              >
                Press Enter to send · Shift+Enter for new line
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )

  // ─── Desktop: right sidebar ───────────────────────────────────────
  // ─── Mobile:  bottom drawer ───────────────────────────────────────
  return (
    <>
      {/* Overlay (both) */}
      <div
        className="fixed inset-0 z-40 drawer-overlay animate-fade-in"
        onClick={onClose}
      />

      {/* Desktop sidebar */}
      <div
        className="hidden lg:flex fixed right-0 top-0 bottom-0 z-50 flex-col w-[480px] shadow-2xl animate-slide-in-right"
        style={{ backgroundColor: '#1a0f06', borderLeft: '1px solid rgba(201,168,76,0.25)' }}
      >
        {panelContent}
      </div>

      {/* Mobile bottom drawer */}
      <div
        className="flex lg:hidden fixed inset-x-0 bottom-0 z-50 flex-col shadow-2xl animate-slide-in-up"
        style={{
          backgroundColor: '#1a0f06',
          borderTop: '1px solid rgba(201,168,76,0.35)',
          borderRadius: '1.5rem 1.5rem 0 0',
          maxHeight: '85vh',
        }}
      >
        {/* Drawer handle */}
        <div className="flex-shrink-0 flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full" style={{ backgroundColor: 'rgba(201,168,76,0.35)' }} />
        </div>
        {panelContent}
      </div>
    </>
  )
}
