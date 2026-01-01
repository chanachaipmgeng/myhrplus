/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    // Override default breakpoints to match design tokens
    screens: {
      'xs': '0px',      // Extra small devices (phones)
      'sm': '640px',    // Small devices (tablets)
      'md': '768px',    // Medium devices (small laptops)
      'lg': '1024px',   // Large devices (desktops)
      'xl': '1280px',   // Extra large devices (large desktops)
      '2xl': '1536px',  // 2X Extra large devices (larger desktops)
    },
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        // Prompt font (supports both Thai & English)
        sans: [
          'Prompt',
          'Noto Sans Thai',
          'Inter',
          'Sarabun',
          ...fontFamily.sans
        ],
        mono: [...fontFamily.mono],
        // Separate font families for specific use cases
        english: ['Prompt', 'Inter', ...fontFamily.sans],
        thai: ['Prompt', 'Noto Sans Thai', 'Sarabun', ...fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
          DEFAULT: '#0ea5e9',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
          DEFAULT: '#22c55e',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
          DEFAULT: '#ef4444',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
          DEFAULT: '#f59e0b',
        },
        info: {
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
          950: '#172554',
          DEFAULT: '#3b82f6',
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
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      boxShadow: {
        // Primary color shadows
        'primary': '0 4px 6px -1px rgba(var(--primary-rgb), 0.2), 0 2px 4px -1px rgba(var(--primary-rgb), 0.1)',
        'primary-lg': '0 10px 15px -3px rgba(var(--primary-rgb), 0.2), 0 4px 6px -2px rgba(var(--primary-rgb), 0.1)',
        // Standard shadows (already in Tailwind, but ensure consistency)
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        // Dark mode shadows
        'dark-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        'dark-md': '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
        'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.4)',
        'dark-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.5)',
        'dark-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
        // Glass morphism shadows
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-sm': '0 4px 16px 0 rgba(31, 38, 135, 0.2)',
        'glass-lg': '0 12px 48px 0 rgba(31, 38, 135, 0.5)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
        'glass-dark-sm': '0 4px 16px 0 rgba(0, 0, 0, 0.3)',
        'glass-dark-lg': '0 12px 48px 0 rgba(0, 0, 0, 0.7)',
        // Gemini theme shadows
        'gemini': '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(59, 130, 246, 0.2), 0 0 40px rgba(59, 130, 246, 0.1)',
        'gemini-sm': '0 4px 16px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.2), 0 0 30px rgba(59, 130, 246, 0.1)',
        'gemini-lg': '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.2)',
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
        // Gemini 1.5 Gradients
        'gradient-gemini': 'linear-gradient(135deg, #93c5fd 0%, #60a5fa 30%, #3b82f6 60%, #2563eb 100%)',
        'gradient-gemini-text': 'linear-gradient(135deg, #bfdbfe 0%, #93c5fd 25%, #60a5fa 50%, #3b82f6 75%, #2563eb 100%)',
        'gradient-gemini-glow': 'radial-gradient(circle, rgba(147, 197, 253, 0.3) 0%, transparent 70%)',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',   // 4px
        'md': '0.5rem',    // 8px
        'lg': '0.75rem',   // 12px
        'xl': '1rem',      // 16px
        '2xl': '1.5rem',   // 24px
        '3xl': '2rem',     // 32px
        'full': '9999px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.2s ease-out',
        'theme-transition': 'themeTransition 0.3s ease-in-out',
        // Gemini 1.5 Animations
        'gemini-float': 'geminiFloat 6s ease-in-out infinite',
        'gemini-pulse': 'geminiPulse 2s ease-in-out infinite',
        'gemini-shimmer': 'geminiShimmer 3s infinite',
        'gemini-wave': 'geminiWave 4s ease-in-out infinite',
        'gemini-gradient': 'geminiGradient 3s ease infinite',
        'gemini-glow': 'geminiGlow 2s ease-in-out infinite alternate',
        'shake': 'shake 0.5s ease-in-out',
        'pulse-success': 'pulseSuccess 0.6s ease-in-out',
        'progress-shine': 'progressShine 2s infinite',
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
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        themeTransition: {
          '0%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        },
        // Gemini 1.5 Keyframes
        geminiFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        geminiPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        geminiShimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        geminiWave: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(10px) translateY(-10px)' },
          '50%': { transform: 'translateX(-5px) translateY(5px)' },
          '75%': { transform: 'translateX(-10px) translateY(-5px)' },
        },
        geminiGradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        geminiGlow: {
          'from': {
            textShadow: '0 0 10px rgba(147, 197, 253, 0.5), 0 0 20px rgba(96, 165, 250, 0.3), 0 0 30px rgba(59, 130, 246, 0.2)',
          },
          'to': {
            textShadow: '0 0 20px rgba(147, 197, 253, 0.8), 0 0 30px rgba(96, 165, 250, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
          },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-4px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(4px)' },
        },
        pulseSuccess: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.4)' },
          '50%': { boxShadow: '0 0 0 4px rgba(34, 197, 94, 0)' },
        },
        progressShine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [
    require('./tailwind-plugins/glass-morphism'),
    require('./tailwind-plugins/animations'),
  ],
}
