/**
 * Tailwind CSS Plugin: Glass Morphism
 * 
 * Provides utility classes for glass morphism effects
 * Supports light, dark, and gemini themes
 */

const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities, theme, addVariant }) {
  // Glass Morphism Utilities
  const glassUtilities = {
    // Light Mode - Default
    '.glass': {
      background: 'rgba(255, 255, 255, 0.25)',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    },
    '.glass-strong': {
      background: 'rgba(255, 255, 255, 0.4)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      boxShadow: '0 12px 48px 0 rgba(31, 38, 135, 0.5)',
    },
    '.glass-weak': {
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.2)',
    },
    
    // Dark Mode
    '.glass-dark': {
      background: 'rgba(15, 23, 42, 0.25)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
    },
    '.glass-dark-strong': {
      background: 'rgba(15, 23, 42, 0.4)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      boxShadow: '0 12px 48px 0 rgba(0, 0, 0, 0.7)',
    },
    '.glass-dark-weak': {
      background: 'rgba(15, 23, 42, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.3)',
    },
    
    // Gemini Theme
    '.glass-gemini': {
      background: 'rgba(15, 23, 42, 0.3)',
      border: '1px solid rgba(59, 130, 246, 0.3)',
      backdropFilter: 'blur(32px)',
      WebkitBackdropFilter: 'blur(32px)',
      boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.2)',
    },
    '.glass-gemini-strong': {
      background: 'rgba(15, 23, 42, 0.4)',
      border: '1px solid rgba(59, 130, 246, 0.4)',
      backdropFilter: 'blur(40px)',
      WebkitBackdropFilter: 'blur(40px)',
      boxShadow: '0 12px 48px 0 rgba(59, 130, 246, 0.3)',
    },
    '.glass-gemini-weak': {
      background: 'rgba(15, 23, 42, 0.2)',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      boxShadow: '0 4px 16px 0 rgba(59, 130, 246, 0.15)',
    },
  };

  addUtilities(glassUtilities);

  // Dark mode variants
  addVariant('glass-dark', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.dark .${className}`;
    });
  });

  // Gemini theme variant
  addVariant('theme-gemini', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `body.theme-gemini .${className}`;
    });
  });
});

