module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'karla': ['Karla', '"sans-serif"']
    },
    extend: {
      backgroundImage: {
        'background': "url('https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80')"
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
