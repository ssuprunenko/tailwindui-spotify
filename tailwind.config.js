const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        gray: {
          '010': '#fcfcfc',
          '020': '#f9f9f9',
          '030': '#f6f6f6',
          '040': '#f3f3f3',
          '050': '#f0f0f0',
          100: '#e6e6e6',
          200: '#c9c9c9',
          300: '#adadad',
          400: '#919191',
          500: '#757575',
          600: '#5c5c5c',
          700: '#454545',
          800: '#2e2e2e',
          900: '#1b1b1b'
        }
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')
  ]
}
