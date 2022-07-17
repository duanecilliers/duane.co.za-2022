/* eslint-disable import/no-extraneous-dependencies, global-require */

const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
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
          'base-content': colors.sky[800],
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=luxury]'],
          'base-content': '#F0734B',
        },
      },
    ],
  },
};
