const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': {
          light: '#CCA3AB',
          DEFAULT: '#6D3B47',
          dark: '#0e7490',
        },
        'secondary': '#B06D86',
        'slate' : '#eee',
        'white' : '#fff',
        'orange' : '#FCB888',
        'lime' : '#CCF391',
        'gray' : '#ccc',
        'dark' : '#333',
        'dark-light' : '#666',
      },
      fontFamily: {
        'josefin': ['Josefin Sans'],
        'merri': ['Merriweather']
      }
    },
  },
  plugins: [],
}

