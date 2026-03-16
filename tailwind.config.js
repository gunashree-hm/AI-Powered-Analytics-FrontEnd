/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0f0f',
          secondary: '#0d1414',
          card: '#111a1a',
          hover: '#162020',
          border: '#1e2e2e',
        },
        cyan: {
          accent: '#00e5cc',
          dim: '#00b8a3',
          glow: 'rgba(0,229,204,0.15)',
          subtle: 'rgba(0,229,204,0.06)',
        },
        text: {
          primary: '#e8f4f4',
          secondary: '#7a9e9e',
          muted: '#4a6868',
        },
        status: {
          stable: '#00e5cc',
          growing: '#a8ff78',
          risk: '#ff6b6b',
          warning: '#ffd93d',
        }
      },
      fontFamily: {
        display: ['"DM Mono"', 'monospace'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'cyan-glow': '0 0 20px rgba(0,229,204,0.2)',
        'cyan-sm': '0 0 10px rgba(0,229,204,0.1)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'counter': 'counter 1s ease-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
