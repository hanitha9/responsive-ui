module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. Core Figma Design Tokens
      spacing: {
        ...Array.from({ length: 96 }, (_, i) => i + 1).reduce((acc, px) => {
          acc[`${px}px`] = `${px}px`;
          return acc;
        }, {}),
        '128px': '128px',
        '144px': '144px'
      },

      // 2. Enhanced Typography System
      fontSize: {
        ...Array.from({ length: 72 }, (_, i) => i + 10).reduce((acc, px) => {
          acc[`${px}px`] = [`${px}px`, { lineHeight: `${Math.round(px * 1.2)}px` }];
          return acc;
        }, {}),
      },

      // 3. Complete Color System (add these from Figma)
      colors: {
        'figma': {
          primary: {
            DEFAULT: '#2A2A2A',
            50: '#F5F5F5',
            100: '#E0E0E0',
            200: '#C2C2C2',
            // Add all shades from light to dark
            900: '#1A1A1A'
          },
          accent: {
            DEFAULT: '#000000',
            light: '#333333',
            dark: '#000000'
          },
          // Add additional color groups
        },
      },

      // 4. Extended Border System
      borderWidth: {
        '1': '1px',
        '3': '3px',
        '5': '5px'
      },

      // 5. Pixel-Perfect Shadows
      boxShadow: {
        'figma-sm': '0 1px 3px 0 rgba(0, 0, 0, 0.08)',
        'figma-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'figma-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      },

      // 6. Motion Properties
      transitionDuration: {
        'figma-fast': '150ms',
        'figma-normal': '300ms',
        'figma-slow': '500ms'
      },

      // 7. Z-Index System
      zIndex: {
        'figma-loading': '9999',
        'figma-modal': '1000',
        'figma-header': '100'
      }
    },
  },
  plugins: [
    // 8. Custom Variants
    function({ addVariant }) {
      addVariant('figma-hover', '@media (hover: hover) and (pointer: fine)');
    }
  ],
  // 9. Important Selector (for overriding third-party styles)
  important: '#figma-app'
}
