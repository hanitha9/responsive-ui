module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Pixel-perfect spacing system
      spacing: {
        '0px': '0px',
        '1px': '1px',
        '2px': '2px',
        '4px': '4px',
        '6px': '6px',
        '8px': '8px',
        '10px': '10px',
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '22px': '22px',
        '24px': '24px',
        '26px': '26px',
        '28px': '28px',
        '30px': '30px',
        '32px': '32px',
        '36px': '36px',
        '40px': '40px',
        '44px': '44px',
        '48px': '48px',
        '52px': '52px',
        '56px': '56px',
        '60px': '60px',
        '64px': '64px',
        '72px': '72px',
        '80px': '80px',
        '96px': '96px',
        // Add any other specific spacing values from Figma
      },
      
      // Exact font sizes from design
      fontSize: {
        '10px': '10px',
        '11px': '11px',
        '12px': '12px',
        '13px': '13px',
        '14px': '14px',
        '15px': '15px',
        '16px': '16px',
        '17px': '17px',
        '18px': '18px',
        '20px': '20px',
        '22px': '22px',
        '24px': '24px',
        '26px': '26px',
        '28px': '28px',
        '30px': '30px',
        '32px': '32px',
        '36px': '36px',
        '40px': '40px',
        '44px': '44px',
        '48px': '48px',
        '52px': '52px',
        '56px': '56px',
        '64px': '64px',
        '72px': '72px',
      },
      
      // Color palette from Figma
      colors: {
        // Primary colors
        'figma-primary': '#2A2A2A',
        'figma-primary-light': '#3D3D3D',
        'figma-primary-dark': '#1A1A1A',
        
        // Secondary colors
        'figma-secondary': '#F5F5F5',
        'figma-secondary-light': '#FFFFFF',
        'figma-secondary-dark': '#E0E0E0',
        
        // Accent colors (from your screenshots)
        'figma-accent': '#000000',
        'figma-accent-light': '#333333',
        
        // Text colors
        'figma-text-primary': '#2A2A2A',
        'figma-text-secondary': '#5A5A5A',
        'figma-text-white': '#FFFFFF',
        
        // Add any other specific colors from Figma
      },
      
      // Extended line heights for pixel perfection
      lineHeight: {
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '22px': '22px',
        '24px': '24px',
        '26px': '26px',
        '28px': '28px',
        '32px': '32px',
        '36px': '36px',
        '40px': '40px',
        '44px': '44px',
        '48px': '48px',
        '52px': '52px',
        '56px': '56px',
        '60px': '60px',
        '64px': '64px',
      },
      
      // Letter spacing from design
      letterSpacing: {
        tighter: '-0.5px',
        tight: '-0.25px',
        normal: '0px',
        wide: '0.25px',
        wider: '0.5px',
        widest: '1px',
      },
    },
  },
  plugins: [],
}
