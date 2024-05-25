/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, sans-serif',
    },
    colors: {
      transparent: 'transparent',
      white: 'rgb(255, 255, 255)',
      white100: 'rgba(255, 255, 255, 0.9)',
      white200: 'rgba(255, 255, 255, 0.6)',
      white300: 'rgb(247, 247, 248)',
      white400: 'rgba(255, 255, 255, 0.46)',
      white500: 'rgba(255, 255, 255, 0.1)',
      pink: 'rgb(255, 24, 95)',
      gray: 'rgb(233, 234, 236)',
      grayhover: '#9EA2AD',
      checkboxhover: '#DEE0E3',
      grayactive: '#E9EAEC',
      inputhover: '#C8CAD0',
      gray100: 'rgba(10, 15, 41, 0.25)',
      gray200: '#0D112666',
      gray300: '#0F132499',
      gray400: 'rgba(10, 15, 41, 0.25)',
      black: '#000',
      black100: 'rgb(20, 21, 26)',
      black200: 'rgb(31, 34, 40)',
      black300: 'rgba(31, 34, 40, 0.1)',
      black400: 'rgba(0, 0, 0, 0.20)',
      yellow: 'rgb(255, 237, 175, 1)',
      green: 'rgb(38, 189, 108, 1)',
      greendark: '#21A65E',
      greenlight: '#C3F8DC',
    },
    fontSize: {
      10: ['10px', '14px'],
      12: ['12px', '16px'],
      14: ['14px', '20px'],
      16: ['16px', '24px'],
      18: ['18px', '26px'],
      20: ['20px', '28px'],
      24: ['24px', '32px'],
      30: ['30px', '36px'],
      36: ['36px', '44px'],
      48: ['48px', '56px']
    },
    screens: {
      tablet: '768px',
      laptop: '1024px',
      desktop: '1440px',
    },
    extend: {
      borderRadius: {
        default: '10px',
        secondary: '28px',
        third: '5000px',
        checkbox: '4px',
        quick: '40px',
        profile: '16px',
        filter: '20px'
      },
      boxShadow: {
        range: '0px 6px 13px 0px rgba(0, 0, 0, 0.12),0px 4px 4px 0px rgba(0, 0, 0, 0.12)',
        menu: '0px 4px 50px 0px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}

