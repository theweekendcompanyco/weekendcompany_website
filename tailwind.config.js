/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0a0e27',
        'secondary': '#FFFFFF',
        'accent': '#3b82f6',
        'text-primary': '#f8f9fa',
        'text-secondary': '#d4d9e1',
        'text-muted': '#8b92a0',
        'dark-bg': '#0f1423',
        'dark-card': '#1a1f3a',
        'dark-border': '#2d3748',
      },
      backgroundColor: {
        'dark-gradient': 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1423 100%)',
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, rgba(10, 14, 39, 0.95) 0%, rgba(26, 31, 58, 0.95) 50%, rgba(15, 20, 35, 0.95) 100%)',
      },
    },
  },
  plugins: [],
}
