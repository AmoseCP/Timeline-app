import { useState, useCallback } from 'react'
import type { TimelineEvent, EventCategory } from './types'
import { timelineEvents } from './data/events'
import Header from './components/Header'
import FilterBar from './components/FilterBar'
import Timeline from './components/Timeline'
import EventDetail from './components/EventDetail'

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)
  const [filteredCategory, setFilteredCategory] = useState<EventCategory | 'all'>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredEvents = timelineEvents.filter((event) => {
    const matchesCategory =
      filteredCategory === 'all' || event.category === filteredCategory
    const lowerSearch = searchTerm.toLowerCase()
    const matchesSearch =
      !searchTerm ||
      event.title.toLowerCase().includes(lowerSearch) ||
      event.book.toLowerCase().includes(lowerSearch) ||
      event.approximateDate.toLowerCase().includes(lowerSearch)
    return matchesCategory && matchesSearch
  })

  const handleSelectEvent = useCallback((event: TimelineEvent) => {
    setSelectedEvent(event)
  }, [])

  const handleCloseDetail = useCallback(() => {
    setSelectedEvent(null)
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f0a05' }}>
      {/* Subtle background texture */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 20% 20%, rgba(201,168,76,0.04) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(201,168,76,0.03) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10">
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <FilterBar
            activeCategory={filteredCategory}
            onCategoryChange={setFilteredCategory}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            totalCount={timelineEvents.length}
            filteredCount={filteredEvents.length}
          />

          <Timeline
            events={filteredEvents}
            selectedEventId={selectedEvent?.id ?? null}
            onSelectEvent={handleSelectEvent}
          />
        </main>
      </div>

      {/* Event Detail Panel */}
      <EventDetail event={selectedEvent} onClose={handleCloseDetail} />
    </div>
  )
}
