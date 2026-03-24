import type { EventCategory } from '../types'
import { ALL_CATEGORIES, CATEGORY_META } from '../types'

interface FilterBarProps {
  activeCategory: EventCategory | 'all'
  onCategoryChange: (cat: EventCategory | 'all') => void
  searchTerm: string
  onSearchChange: (term: string) => void
  totalCount: number
  filteredCount: number
}

export default function FilterBar({
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  totalCount,
  filteredCount,
}: FilterBarProps) {
  return (
    <div
      className="sticky top-0 z-30 py-4 mb-6"
      style={{ backgroundColor: 'rgba(15,10,5,0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(201,168,76,0.15)' }}
    >
      {/* Search */}
      <div className="max-w-md mx-auto mb-4">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
            style={{ color: '#c9a84c' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search events, books, dates…"
            className="w-full pl-9 pr-4 py-2.5 rounded-lg text-sm outline-none transition-all"
            style={{
              backgroundColor: 'rgba(245,230,200,0.08)',
              border: '1px solid rgba(201,168,76,0.3)',
              color: '#f5e6c8',
              fontFamily: 'Lora, serif',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#c9a84c'
              e.target.style.backgroundColor = 'rgba(245,230,200,0.12)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(201,168,76,0.3)'
              e.target.style.backgroundColor = 'rgba(245,230,200,0.08)'
            }}
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition-opacity"
              style={{ color: '#c9a84c' }}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {/* "All" button */}
        <button
          onClick={() => onCategoryChange('all')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-heading tracking-wide uppercase transition-all duration-200"
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '0.65rem',
            letterSpacing: '0.08em',
            border: activeCategory === 'all' ? '1px solid #c9a84c' : '1px solid rgba(201,168,76,0.3)',
            backgroundColor: activeCategory === 'all' ? 'rgba(201,168,76,0.2)' : 'rgba(201,168,76,0.05)',
            color: activeCategory === 'all' ? '#f0c866' : 'rgba(201,168,76,0.7)',
          }}
        >
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: '#c9a84c' }}
          />
          All ({totalCount})
        </button>

        {ALL_CATEGORIES.map((cat) => {
          const meta = CATEGORY_META[cat]
          const isActive = activeCategory === cat
          return (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200"
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: '0.65rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                border: isActive
                  ? `1px solid ${meta.color}`
                  : `1px solid ${meta.color}55`,
                backgroundColor: isActive
                  ? `${meta.color}33`
                  : `${meta.color}0d`,
                color: isActive ? '#f5e6c8' : `${meta.color}cc`,
              }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: meta.color }}
              />
              {meta.label}
            </button>
          )
        })}
      </div>

      {/* Result count */}
      {(searchTerm || activeCategory !== 'all') && (
        <p
          className="text-center mt-3 text-xs"
          style={{ color: 'rgba(201,168,76,0.55)', fontFamily: 'Lora, serif', fontStyle: 'italic' }}
        >
          Showing {filteredCount} of {totalCount} events
        </p>
      )}
    </div>
  )
}
