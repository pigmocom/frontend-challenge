import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      tokens: {
        colors: {
          pink: {
            value: '#E90083',
          },
          darkPurple: {
            value: '#35243D',
          },
          darkPurpleIcons: {
            value: '#4B3456',
          },
          purpleTexts: {
            value: '#644B72',
          },
          lightPurple: {
            value: '#826B8E',
          },
          white: {
            value: '#FFFFFF',
          },
          green: {
            value: '#24D861',
          },
          magenta: {
            value: '#7f064d',
          },
          red: {
            value: '#DE3449',
          },
          lightRed: {
            value: '#ffa2a0',
          },
          lightGray: {
            value: '#E6E3E8',
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
