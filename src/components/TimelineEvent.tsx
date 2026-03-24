import type { TimelineEvent } from '../types'
import { CATEGORY_META } from '../types'

interface TimelineEventProps {
  event: TimelineEvent
  side: 'left' | 'right'
  isSelected: boolean
  onClick: () => void
}

export default function TimelineEventCard({ event, side, isSelected, onClick }: TimelineEventProps) {
  const meta = CATEGORY_META[event.category]

  return (
    <div
      className={`relative flex ${side === 'right' ? 'justify-start' : 'justify-end'} lg:block`}
      style={{ width: '100%' }}
    >
      {/* Card */}
      <button
        onClick={onClick}
        className={`
          event-card parchment-card
          w-full lg:w-[calc(50%-2.5rem)]
          text-left rounded-xl p-4 sm:p-5
          cursor-pointer group
          ${side === 'right' ? 'lg:ml-auto' : 'lg:mr-auto'}
          ${isSelected ? 'ring-2' : ''}
        `}
        style={{
          borderLeft: `4px solid ${meta.color}`,
          boxShadow: isSelected
            ? `0 0 0 2px ${meta.color}, 0 8px 32px rgba(0,0,0,0.5), 0 4px 16px rgba(139,105,20,0.2)`
            : '0 4px 24px rgba(0,0,0,0.35), 0 1px 4px rgba(139,105,20,0.15)',
          outline: 'none',
        }}
        aria-pressed={isSelected}
      >
        {/* Date badge */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <span
            className="inline-block font-heading text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
            style={{
              backgroundColor: `${meta.color}22`,
              color: meta.color,
              border: `1px solid ${meta.color}55`,
              fontFamily: 'Cinzel, serif',
              fontSize: '0.62rem',
              letterSpacing: '0.06em',
            }}
          >
            {event.approximateDate}
          </span>

          {/* Category dot */}
          <span
            className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1"
            style={{ backgroundColor: meta.color }}
            title={meta.label}
          />
        </div>

        {/* Title */}
        <h3
          className="font-heading font-semibold leading-tight mb-1.5 group-hover:opacity-80 transition-opacity"
          style={{
            fontFamily: 'Cinzel, serif',
            color: '#1a0f06',
            fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
          }}
        >
          {event.title}
        </h3>

        {/* Book + scripture */}
        <p
          className="font-body text-xs mb-2"
          style={{ color: '#5a3a1a', fontStyle: 'italic' }}
        >
          {event.book} · {event.scripture}
        </p>

        {/* Summary preview */}
        <p
          className="font-body text-sm leading-relaxed line-clamp-2"
          style={{ color: '#3a2010' }}
        >
          {event.summary}
        </p>

        {/* "Read more" hint */}
        <div
          className="mt-3 flex items-center gap-1 text-xs font-heading opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: meta.color, fontFamily: 'Cinzel, serif', fontSize: '0.62rem', letterSpacing: '0.08em' }}
        >
          <span>Read more</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>
    </div>
  )
}
