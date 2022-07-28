module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      blue: '#0112fe',
      black: '#08080a',
      'dark-gray': '#16171d',
      'light-gray': '#b0afaf',
      white: '#fff',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      fontSize: {
        xs: '12px',
        '3xl': [
          '32px',
          {
            lineHeight: '40px',
          },
        ],
        '2xl': [
          '28px',
          {
            lineHeight: '32px',
          },
        ],
        '9xl': [
          '9rem',
          {
            lineHeight: '1',
          },
        ],
      },
      borderRadius: {
        DEFAULT: '5px',
      },
    },
  },
  plugins: [],
};
