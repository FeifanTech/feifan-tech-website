/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        claude: {
          cream: '#FAF9F7',
          warm: '#F5F0E8',
          beige: '#EDE8E1',
          border: '#D4C9BA',
          accent: '#D97757',
          'accent-dark': '#B85C35',
          'accent-light': '#F2E5DC',
          dark: '#1F1F1F',
          medium: '#5E5E5E',
          muted: '#8C8C8C',
          footer: '#2D2A25',
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
        'aurora': 'aurora 12s ease-in-out infinite alternate',
        'aurora-slow': 'aurora 18s ease-in-out infinite alternate-reverse',
        'cursor-blink': 'cursorBlink 1s step-end infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        pulseDot: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.8)', opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
}
