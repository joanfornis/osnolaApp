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
        'slate' : '#ddd',
        'white' : '#fff',
        'orange' : '#FCB888',
        'lime' : '#CCF391'
      },
    },
  },
  plugins: [],
}

