/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        zoor: {
          navy: '#0B0F19',
          purple: '#272760',
          grape: '#442768',
          pink: '#ED1E79',
          aqua: '#0CFFE1',
          pearl: '#FDFDFE',
        },
      },

      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
      },

      boxShadow: {
        'neon-pink': '0 0 35px rgba(237, 30, 121, 0.45)',
        'neon-aqua': '0 0 40px rgba(12, 255, 225, 0.38)',
        'soft-glass':
          '0 4px 18px rgba(255,255,255,0.06), 0 6px 30px rgba(0,0,0,0.25)',
      },

      backgroundImage: {
        'zoor-gradient':
          'linear-gradient(135deg, #ED1E79 0%, #442768 35%, #272760 60%, #0CFFE1 100%)',

        'glass-light':
          'linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.12) 100%)',

        'glass-dark':
          'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
      },

      backdropBlur: {
        xs: '2px',
        sm: '6px',
        md: '12px',
        lg: '20px',
      },

      borderRadius: {
        glass: '22px',
        glassLg: '32px',
      },

      screens: {
        xs: '420px',
        '3xl': '1800px',
      },
    },
  },
  plugins: [],
};
