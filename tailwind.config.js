const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderWidth: {
      'default': '3px'
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': {
          light: '#CCA3AB',
          DEFAULT: '#6D3B47',
          dark: '#0e7490',
        },
        'slate' : '#ccc',
        'white' : '#fff',
        'orange' : '#f97316',
        'lime' : '#84cc16'
      },
    },
  },
  plugins: [],
}

