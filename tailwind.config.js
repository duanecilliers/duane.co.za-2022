/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=winter]'],
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=luxury]'],
        },
      },
    ],
  },
}
