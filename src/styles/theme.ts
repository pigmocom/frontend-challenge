import type { Config } from '@pandacss/dev';

export const theme: Config['theme'] = {
  extend: {
    tokens: {
      fontSizes: {
        h1: { value: '42px' },
        h2: { value: '36px' },
        h3: { value: '20px' },
        h4: { value: '16px' },
        h5: { value: '14px' },
        paragraph: { value: '14px' },
        textSmall: { value: '10px' },
        textMedium: { value: '12px' },
        card: { value: '18px' }
      },
      colors: {
        primary: { value: 'hsla(326, 100%, 46%, 1)' },
        secondary: { value: '#FF6864' },

        border: { value: 'hsla(281, 26%, 19%, 1)' },

        muted: { value: '#826B8E' },
        green: { value: '#24d861' },
        success: { value: '{color.green}' },
        danger: { value: '#DE3449' },

        white: { value: '#fff' },
  
        background: { value: '#170D19' },
      },
      fontWeights: {
        normal: { value: 400 },
        medium: { value: 600 },
        bold: { value: 700 },
        black: { value: 900 }
      },
      fonts: {
        body: { value: 'Aglet Sans' }
      },
      spacing: {
        0: { value: "0px" } , // 0px
        px: { value: "1px" }, // 1px
        0.5: { value: "0.125rem" }, // 2px
        0.75: { value: "0.188rem" }, // 3px
        1: { value: "0.25rem" }, // 4px
        1.5: { value: "0.375rem" }, // 6px
        2: { value: "0.5rem" }, // 8px
        2.5: { value: "0.625rem" }, // 10px
        3: { value: ".75rem" }, // 12px
        3.5: { value: "0.875rem" }, // 14px
        4: { value: "1rem" }, // 16px
        5: { value: "1.25rem" }, // 20px
        6: { value: "1.5rem" }, // 24px
        7: { value: "1.75rem" }, // 28px
        8: { value: "2rem" }, // 32px
        9: { value: "2.25rem" }, // 36px
        10: { value: "2.5rem" }, // 40px
        11: { value: "2.75rem" }, // 44px
        12: { value: "3rem" }, // 48px
        14: { value: "3.5rem" }, // 56px
        16: { value: "4rem" }, // 64px
        20: { value: "5rem" }, // 80px
        24: { value: "6rem" }, // 96px
        28: { value: "7rem" }, // 112px
        32: { value: "8rem" }, // 128px
        36: { value: "9rem" }, // 144px
        40: { value: "10rem" }, // 160px
        44: { value: "11rem" }, // 176px
        48: { value: "12rem" }, // 192px
        52: { value: "13rem" }, // 208px
        56: { value: "14rem" }, // 224px
        60: { value: "15rem" }, // 240px
        64: { value: "16rem" }, // 256px
        72: { value: "18rem" }, // 288px
        80: { value: "20rem" }, // 320px
        96: { value: "24rem" }, // 384px
      },
      radii: {
        4: { value: '0.25rem' },
        20: { value: '0.65rem' },
        8: { value: '0.5rem' }
      }
    },
    semanticTokens: {
      radii: {
        xs: { value: '{radii.4}' },
        sm: { value: '{radii.8}' },
        md: { value: '{radii.20}' }
      }
    },

    keyframes: {
      'collapse': {
        '0%': {
          maxHeight: 'max-content'
        },
        '100%': {
          maxHeight: 0
        }
      },
      'collapse-out': {
        '0%': {
          maxHeight: 0
        },
        '100%': {
          maxHeight: 'max-content'
        }
      }
    }
  }
}
