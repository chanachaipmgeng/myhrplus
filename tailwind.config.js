/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Sarabun', 'system-ui', 'sans-serif'],
        'thai': ['Sarabun', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          DEFAULT: 'rgb(var(--primary-rgb))',
        },
        glass: {
          white: 'rgba(255, 255, 255, 0.25)',
          'white-strong': 'rgba(255, 255, 255, 0.4)',
          'white-weak': 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(15, 23, 42, 0.25)',
          'dark-strong': 'rgba(15, 23, 42, 0.4)',
          'dark-weak': 'rgba(15, 23, 42, 0.1)',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-sm': '0 4px 16px 0 rgba(31, 38, 135, 0.2)',
        'glass-lg': '0 12px 48px 0 rgba(31, 38, 135, 0.5)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
        'glass-dark-sm': '0 4px 16px 0 rgba(0, 0, 0, 0.3)',
        'glass-dark-lg': '0 12px 48px 0 rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        'gradient-blue-light': 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%)',
        'gradient-blue-dark': 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)',
        'gradient-indigo-light': 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 50%, #c7d2fe 100%)',
        'gradient-indigo-dark': 'linear-gradient(135deg, #312e81 0%, #3730a3 50%, #4338ca 100%)',
        'gradient-purple-light': 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 50%, #e9d5ff 100%)',
        'gradient-purple-dark': 'linear-gradient(135deg, #581c87 0%, #6b21a8 50%, #7c3aed 100%)',
        'gradient-green-light': 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)',
        'gradient-green-dark': 'linear-gradient(135deg, #14532d 0%, #166534 50%, #16a34a 100%)',
        'gradient-orange-light': 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 50%, #fed7aa 100%)',
        'gradient-orange-dark': 'linear-gradient(135deg, #7c2d12 0%, #9a3412 50%, #ea580c 100%)',
        'gradient-red-light': 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 50%, #fecaca 100%)',
        'gradient-red-dark': 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #dc2626 100%)',
        'gradient-teal-light': 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 50%, #99f6e4 100%)',
        'gradient-teal-dark': 'linear-gradient(135deg, #134e4a 0%, #155e75 50%, #14b8a6 100%)',
        'gradient-pink-light': 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)',
        'gradient-pink-dark': 'linear-gradient(135deg, #831843 0%, #9f1239 50%, #ec4899 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'theme-transition': 'themeTransition 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        themeTransition: {
          '0%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
