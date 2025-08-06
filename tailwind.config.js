/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light theme
        light: {
          primary: '#F8F8F8',
          secondary: '#2C2C2C',
          accent: '#D4AF37',
          text: '#000000',
          background: '#FFFFFF'
        },
        // Dark theme
        dark: {
          primary: '#2C2C2C',
          secondary: '#F8F8F8',
          accent: '#D4AF37',
          text: '#FFFFFF',
          background: '#1A1A1A'
        },
        // Brand colors
        gold: '#D4AF37',
        burgundy: '#800020',
        charcoal: '#2C2C2C',
        cream: '#F5F5DC'
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}