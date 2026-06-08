/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#030712',
          light: '#f9fafb',
          cardDark: '#111827',
          cardLight: '#ffffff',
          accentBlue: '#3b82f6',
          accentGreen: '#10b981',
          accentCyan: '#06b6d4',
          textMutedDark: '#9ca3af',
          textMutedLight: '#6b7280',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 15px rgba(6, 182, 212, 0.15)',
        'glow-green': '0 0 15px rgba(16, 185, 129, 0.15)',
        'glow-blue': '0 0 15px rgba(59, 130, 246, 0.15)',
      }
    },
  },
  plugins: [],
}
