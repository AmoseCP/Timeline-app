export default function Header() {
  return (
    <header
      className="relative pt-12 pb-10 px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
      style={{ borderBottom: '1px solid rgba(201,168,76,0.2)' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Top ornamental line */}
      <div className="relative flex items-center justify-center gap-4 mb-6">
        <div className="h-px flex-1 max-w-xs" style={{ background: 'linear-gradient(to right, transparent, #c9a84c)' }} />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
          <path d="M12 2L13.5 9H20L14.5 13.5L16.5 20.5L12 16L7.5 20.5L9.5 13.5L4 9H10.5L12 2Z" fill="#c9a84c" opacity="0.8" />
        </svg>
        <div className="h-px flex-1 max-w-xs" style={{ background: 'linear-gradient(to left, transparent, #c9a84c)' }} />
      </div>

      {/* Eyebrow */}
      <p
        className="relative font-heading text-xs tracking-[0.35em] uppercase mb-3"
        style={{ color: '#c9a84c' }}
      >
        An Interactive Chronicle
      </p>

      {/* Main title */}
      <h1
        className="relative font-heading font-bold leading-tight mb-2"
        style={{
          color: '#f5e6c8',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          textShadow: '0 2px 20px rgba(201,168,76,0.3)',
        }}
      >
        The Historical Books
      </h1>

      {/* Subtitle */}
      <p
        className="relative font-body text-base sm:text-lg mb-6"
        style={{ color: '#c9a84c', fontStyle: 'italic' }}
      >
        A Journey Through Israel's Story
      </p>

      {/* Ornamental divider */}
      <div className="relative ornament max-w-md mx-auto mb-6">
        <span>Joshua to Nehemiah</span>
      </div>

      {/* Stats bar */}
      <div className="relative flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        {[
          { value: '33', label: 'Major Events' },
          { value: '~960', label: 'Years of History' },
          { value: '9', label: 'Biblical Books' },
        ].map(({ value, label }) => (
          <div key={label} className="text-center">
            <div
              className="font-heading text-2xl font-bold"
              style={{ color: '#f0c866' }}
            >
              {value}
            </div>
            <div
              className="font-body text-xs tracking-wide uppercase"
              style={{ color: 'rgba(201,168,76,0.7)' }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom ornamental line */}
      <div className="relative flex items-center justify-center gap-4 mt-6">
        <div className="h-px flex-1 max-w-xs" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.5))' }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#c9a84c' }} />
        <div className="h-px flex-1 max-w-xs" style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.5))' }} />
      </div>
    </header>
  )
}
