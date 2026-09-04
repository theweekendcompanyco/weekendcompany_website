/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#050505',
        'secondary': '#FFFFFF',
        'accent': '#D4AF37',       // Primary Gold
        'gold-bright': '#E5C158',   // Hover / active gold
        'gold-subtle': '#8F7625',   // Dark subtle gold rules & badges
        'text-primary': '#F5F2EA',  // Warm off-white
        'text-secondary': '#B8B4AA',// Warm taupe-gray
        'text-muted': '#77736B',    // Soft neutral gray
        'dark-bg': '#0B0B0B',       // Secondary dark surface
        'dark-card': '#111111',     // Elevated card surface
        'dark-card-hover': '#171717',// Slightly lighter elevated surface
        'dark-border': '#262626',   // Border color
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'display': ['Poppins', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['18px', { lineHeight: '28px' }],
        'xl': ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '44px' }],
        '5xl': ['48px', { lineHeight: '52px' }],
      },
    },
  },
  plugins: [],
}
