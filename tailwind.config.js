const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: {
        300: '#9278FF',
        400: '#7E5CFB'
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: {
        primary: '#1F2138',
        secondary: '#131426',
        tertiary: '#2B2D44'
      },
      white: colors.white,
      gray: colors.gray,
      green: colors.green,
      success: {
        primary: '#2ddb98',
        secondary: '#1d2c3f'
      },
      danger: '#3f1d24',
      warning: {
        primary: '#fe9100',
        secondary: '#2d2733',
        tertiary: '#F38C0F'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
