/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'rich-black': '#020617',
        'card-dark': '#0f172a',
        brand: {
          500: '#3b82f6',
          600: '#2563eb',
        },
        neon: {
          400: '#4ade80',
          500: '#22c55e',
          glow: '#00ff9d',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
        'gold-shine': 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.3) 50%, transparent 75%)',
        'neon-gradient': 'linear-gradient(to right, #4ade80, #22c55e)',
        'card-gradient': 'linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 100%)',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}