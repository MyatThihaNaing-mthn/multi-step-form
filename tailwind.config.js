/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        button_color: 'rgb(36, 39, 64)',
        button_text: 'rgb(255, 255, 255)',
        success_bg: 'rgb(54, 56, 76)',
        success_second_bg: 'rgb(255, 255, 255)',
        warning_color: 'rgb(220 38 38)',
        bg_color: 'rgb(238, 243, 252)',
        next_btn_color: 'rgb(11,37,81 )',
      },
      height: {
        "10vh" : "10vh",
        "7vh" : "7vh",
      },
      margin: {
        "2vh" : "2vh",
      },
    },
    screens: {
      'xs': '360px',
      ...defaultTheme.screens,
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}