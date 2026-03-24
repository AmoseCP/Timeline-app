/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50:  '#fdf8ee',
          100: '#f5e6c8',
          200: '#ede0b8',
          300: '#e0c990',
        },
        gold: {
          300: '#f0c866',
          400: '#c9a84c',
          500: '#8b6914',
          600: '#6b4f0f',
        },
        conquest:          '#2d7a3a',
        judges:            '#7a4f2d',
        transition:        '#7a2d5a',
        'united-monarchy': '#2d3d7a',
        'divided-kingdom': '#7a2d2d',
        exile:             '#4a3a7a',
        restoration:       '#2d6b6b',
      },
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        body:    ['Lora', 'serif'],
        sans:    ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'parchment-gradient': 'linear-gradient(135deg, #f5e6c8 0%, #ede0b8 50%, #e0c990 100%)',
        'gold-gradient':      'linear-gradient(to bottom, #c9a84c, #8b6914)',
        'dark-gradient':      'linear-gradient(to bottom, #0f0a05, #1a0f06)',
      },
      boxShadow: {
        'parchment': '0 4px 24px rgba(139, 105, 20, 0.15), 0 1px 4px rgba(0,0,0,0.3)',
        'parchment-hover': '0 8px 32px rgba(139, 105, 20, 0.25), 0 2px 8px rgba(0,0,0,0.4)',
        'gold-glow': '0 0 20px rgba(201, 168, 76, 0.3)',
      },
      animation: {
        'fade-in':     'fadeIn 0.3s ease-in-out',
        'slide-in-right': 'slideInRight 0.35s cubic-bezier(0.16,1,0.3,1)',
        'slide-in-up':    'slideInUp 0.35s cubic-bezier(0.16,1,0.3,1)',
        'pulse-gold':  'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideInRight: {
          from: { transform: 'translateX(100%)', opacity: '0' },
          to:   { transform: 'translateX(0)',    opacity: '1' },
        },
        slideInUp: {
          from: { transform: 'translateY(100%)', opacity: '0' },
          to:   { transform: 'translateY(0)',    opacity: '1' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}
