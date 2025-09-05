/**** @type {import('tailwindcss').Config} ****/
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0F1A',
        brandStart: '#6366F1',
        brandMid: '#8B5CF6',
        brandEnd: '#A21CAF',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Ubuntu',
          'Cantarell',
          'Noto Sans',
          'Helvetica Neue',
          'Arial',
          'Apple Color Emoji',
          'Segoe UI Emoji',
        ],
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.25)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, var(--tw-gradient-from, #6366F1), var(--tw-gradient-via, #8B5CF6), var(--tw-gradient-to, #A21CAF))',
        'radial-faint': 'radial-gradient(1200px circle at 20% 10%, rgba(99,102,241,0.12), transparent 40%), radial-gradient(1000px circle at 80% 30%, rgba(168,85,247,0.10), transparent 35%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        gradient: 'gradient 12s ease infinite',
      },
      backdropBlur: {
        xl: '20px',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}
