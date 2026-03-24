import type { TimelineEvent } from '../types'
import { CATEGORY_META } from '../types'
import TimelineEventCard from './TimelineEvent'

interface TimelineProps {
  events: TimelineEvent[]
  selectedEventId: string | null
  onSelectEvent: (event: TimelineEvent) => void
}

export default function Timeline({ events, selectedEventId, onSelectEvent }: TimelineProps) {
  if (events.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="font-heading text-3xl mb-3" style={{ color: 'rgba(201,168,76,0.3)' }}>✦</div>
        <p className="font-body italic" style={{ color: 'rgba(201,168,76,0.5)' }}>
          No events match your search
        </p>
      </div>
    )
  }

  return (
    <div className="relative py-8">
      {/* ─── Desktop: central gold line ─── */}
      <div
        className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 timeline-line"
      />

      {/* ─── Mobile: left gold line ─── */}
      <div
        className="block lg:hidden absolute left-5 top-0 bottom-0 w-0.5 timeline-line"
      />

      <div className="relative space-y-10">
        {events.map((event, index) => {
          const side = index % 2 === 0 ? 'left' : 'right'
          const meta = CATEGORY_META[event.category]
          const isSelected = selectedEventId === event.id

          return (
            <div key={event.id} className="relative">
              {/* ─── Desktop layout: alternating left/right ─── */}
              <div className="hidden lg:block">
                {/* Connector dot on center line */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full z-10 timeline-dot"
                  style={{
                    background: `linear-gradient(135deg, ${meta.color}cc, ${meta.color})`,
                    boxShadow: isSelected
                      ? `0 0 0 3px ${meta.color}55, 0 0 16px ${meta.color}88`
                      : `0 0 0 2px #1a0f06, 0 0 0 3px ${meta.color}66`,
                  }}
                />

                {/* Horizontal connector line */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 h-px w-10 ${side === 'left' ? 'right-1/2 mr-2' : 'left-1/2 ml-2'}`}
                  style={{ background: `linear-gradient(to ${side === 'left' ? 'left' : 'right'}, transparent, ${meta.color}66)` }}
                />

                <TimelineEventCard
                  event={event}
                  side={side}
                  isSelected={isSelected}
                  onClick={() => onSelectEvent(event)}
                />
              </div>

              {/* ─── Mobile layout: left-aligned ─── */}
              <div className="flex lg:hidden items-start gap-4 pl-5">
                {/* Connector dot on left line */}
                <div
                  className="flex-shrink-0 w-3.5 h-3.5 rounded-full -ml-[7px] mt-5 z-10 timeline-dot"
                  style={{
                    background: `linear-gradient(135deg, ${meta.color}cc, ${meta.color})`,
                    boxShadow: isSelected
                      ? `0 0 0 3px ${meta.color}44, 0 0 12px ${meta.color}66`
                      : `0 0 0 2px #1a0f06, 0 0 0 3px ${meta.color}55`,
                  }}
                />

                <div className="flex-1 min-w-0">
                  <TimelineEventCard
                    event={event}
                    side="right"
                    isSelected={isSelected}
                    onClick={() => onSelectEvent(event)}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* ─── End cap ornament ─── */}
      <div className="relative mt-12 flex items-center justify-center">
        <div
          className="w-4 h-4 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #c9a84c, #8b6914)',
            boxShadow: '0 0 0 3px #1a0f06, 0 0 0 5px rgba(201,168,76,0.4)',
          }}
        />
      </div>
      <p
        className="text-center mt-4 font-body italic text-xs"
        style={{ color: 'rgba(201,168,76,0.45)' }}
      >
        {events.length} event{events.length !== 1 ? 's' : ''} displayed
      </p>
    </div>
  )
}
