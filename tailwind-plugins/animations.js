/**
 * Tailwind CSS Plugin: Animation Utilities
 * 
 * Provides utility classes for smooth transitions and micro-interactions
 */

const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities, theme, addVariant }) {
  const animationUtilities = {
    // Smooth Transitions
    '.transition-smooth': {
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      willChange: 'transform, opacity',
    },
    '.transition-transform-smooth': {
      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      willChange: 'transform',
    },
    '.transition-colors-smooth': {
      transition: 'color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out',
    },
    '.transition-opacity-smooth': {
      transition: 'opacity 0.2s ease-in-out',
    },
    
    // Hover Lift Effects
    '.hover-lift': {
      transition: 'transform 0.2s ease',
      '&:hover:not(:disabled)': {
        transform: 'translateY(-2px)',
      },
    },
    '.hover-lift-sm': {
      transition: 'transform 0.2s ease',
      '&:hover:not(:disabled)': {
        transform: 'translateY(-1px)',
      },
    },
    '.hover-lift-lg': {
      transition: 'transform 0.2s ease',
      '&:hover:not(:disabled)': {
        transform: 'translateY(-4px)',
      },
    },
    
    // Hover Scale Effects
    '.hover-scale': {
      transition: 'transform 0.2s ease',
      '&:hover:not(:disabled)': {
        transform: 'scale(1.05)',
      },
    },
    '.hover-scale-sm': {
      transition: 'transform 0.2s ease',
      '&:hover:not(:disabled)': {
        transform: 'scale(1.02)',
      },
    },
    '.hover-scale-lg': {
      transition: 'transform 0.2s ease',
      '&:hover:not(:disabled)': {
        transform: 'scale(1.1)',
      },
    },
    
    // Active Scale Effects
    '.active-scale': {
      transition: 'transform 0.1s ease',
      '&:active:not(:disabled)': {
        transform: 'scale(0.98)',
      },
    },
    '.active-scale-sm': {
      transition: 'transform 0.1s ease',
      '&:active:not(:disabled)': {
        transform: 'scale(0.99)',
      },
    },
    
    // Glow Effects
    '.glow-primary': {
      transition: 'box-shadow 0.3s ease',
      '&:hover:not(:disabled)': {
        boxShadow: '0 0 20px rgba(14, 165, 233, 0.3)',
      },
    },
    '.glow-success': {
      transition: 'box-shadow 0.3s ease',
      '&:hover:not(:disabled)': {
        boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)',
      },
    },
    '.glow-error': {
      transition: 'box-shadow 0.3s ease',
      '&:hover:not(:disabled)': {
        boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)',
      },
    },
    
    // Reduced Motion Support
    '.motion-safe': {
      '@media (prefers-reduced-motion: reduce)': {
        transition: 'none',
        animation: 'none',
        willChange: 'auto',
      },
    },
  };

  addUtilities(animationUtilities);

  // Gemini theme variant
  addVariant('theme-gemini', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `body.theme-gemini .${className}`;
    });
  });
});

