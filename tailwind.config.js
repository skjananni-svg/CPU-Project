/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /bg-(red|blue|green|amber|purple|pink|teal|orange|lime|sky|accent|panel|bg|border)-(\d+|dim)\/(\d+)/ },
    { pattern: /text-(red|blue|green|amber|purple|pink|teal|orange|lime|sky|accent|white|gray)-(\d+)/ },
    { pattern: /border-(red|blue|green|amber|purple|pink|teal|orange|lime|sky|accent)-(\d+)\/(\d+)/ },
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0f1117',
        panel: '#1a1d27',
        accent: '#00d4ff',
        'accent-dim': '#00a8cc',
        border: '#2a2d3a',
        muted: '#6b7280',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gantt-in': 'ganttReveal 0.4s ease-out forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
      },
      keyframes: {
        ganttReveal: {
          '0%':   { transform: 'scaleX(0)', opacity: '0', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', opacity: '1', transformOrigin: 'left' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
