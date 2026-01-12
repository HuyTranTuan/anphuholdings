/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './**/*.html',
    './partials/**/*.html',
    './src/**/*.{js,css}',
  ],
  safelist: [
    'text-primary',
    'text-gold',
    'bg-navy',
    'bg-gold',
    'border-navy',
    'border-gold',
    'hover:text-primary',
    'hover:text-gold',
    'hover:bg-navy',
    'hover:bg-gold',
    'from-navy',
    'to-gold',
    'h-64',
    'h-48',
    {
      pattern:
        /(bg|text|border|from|to)-(navy|gold|primary|secondary|nature|new)(-\d+)?/,
    },
    {
      pattern: /h-(48|64|80|96)/,
    },
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        md: '24px',
        lg: '32px',
      },
      screens: {
        '2xl': '1290px',
      },
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: '#1BA0E1',
          50: '#EAF6FC',
          100: '#D6EDFA',
          400: '#3BB1E8',
          600: '#1689C0',
        },
        secondary: {
          DEFAULT: '#231F20',
          300: '#4A4645',
          400: '#2E2A29',
        },
      },
      fontFamily: {
        // inter: ['Inter', 'sans-serif'],
        // poppins: ['Poppins', 'sans-serif'],
        // montserrat: ['Montserrat', 'sans-serif'],
        utm: ['"UTM Times"', 'serif'],
      },
      boxShadow: {
        shadow: 'var(--shadow-1)',
        shadow2: 'var(--shadow-2)',
        shadow3: 'var(--shadow-3)',
        shadow4: 'var(--shadow-4)',
        shadow5: 'var(--shadow-5)',
        shadow6: 'var(--shadow-6)',
        shadow7: 'var(--shadow-7)',
        shadow8: 'var(--shadow-8)',
        shadow9: 'var(--shadow-9)',
        shadow10: 'var(--shadow-10)',
        shadow11: 'var(--shadow-11)',
      },
      height: {
        'nav-2': 'var(--nav-height-2)',
      },
      screens: {
        'short-h': { raw: '(max-height: 400px)' },
        // You can also combine height and width queries
        'custom-h-w': { raw: '((max-width: 995px) and (max-height: 700px))' },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
  ],
};
