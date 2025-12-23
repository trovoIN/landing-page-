/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand system tokens
        brand: {
          DEFAULT: '#1DB954',
          foreground: '#010204',
          dark: '#18a147',
          light: '#1ed760'
        },
        ink: {
          DEFAULT: '#F8FAFC',
          muted: '#94A3B8',
        },
        surface: {
          DEFAULT: '#020617',
          soft: '#050C1A',
          ring: '#1E293B'
        },
        night: {
          900: '#020617',
          800: '#050C1A',
          700: '#0F172A',
          600: '#1E293B'
        },
        'trovo-green': '#1DB954',
        'trovo-green-light': '#1ed760',
        'trovo-green-dark': '#18a147',
        'trovo-green-50': '#f0fdf4',
        'trovo-green-100': '#dcfce7',
        'trovo-green-200': '#bbf7d0',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out infinite 1.5s',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient-shift': 'gradientShift 6s ease-in-out infinite',
        'text-glow': 'textGlow 2s ease-in-out infinite alternate',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #1DB954, 0 0 10px #1DB954, 0 0 15px #1DB954' },
          '100%': { boxShadow: '0 0 10px #1DB954, 0 0 20px #1DB954, 0 0 30px #1DB954' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        textGlow: {
          '0%': { textShadow: '0 0 10px rgba(29, 185, 84, 0.5)' },
          '100%': { textShadow: '0 0 20px rgba(29, 185, 84, 0.8), 0 0 30px rgba(29, 185, 84, 0.4)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'animated-gradient': 'linear-gradient(-45deg, #020617, #050c1a, #0f172a, #052e16)',
      },
      backgroundSize: {
        '400%': '400% 400%',
      },
    },
  },
  plugins: [],
}
