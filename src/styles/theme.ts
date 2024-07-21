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
      },
      colors: {
        primary: { value: '#E90083' },
        secondary: { value: '#FF6864' },
  
        muted: { value: '#826B8E' },
        success: { value: '#24D861' },
        danger: { value: '#DE3449' },
  
        white: { value: '#fff' },
  
        background: { value: '#170D19' },
      },
      fontWeights: {
        medium: { value: 700 },
        regular: { value: 600 },
      },
      fonts: {
        body: { value: 'system-ui, sans-serif' }
      },
      spacing: {
        0: { value: "0px" },
        px: { value: "1" },
        0.5:	{ value: "0.125rem" },
        1: { value: "0.25rem" },
        1.5: { value: "0.375rem" },
        2: { value: "0.5rem" },
        2.5: { value: "0.625rem" },
        3.0: { value: ".75rem" },
        3.5: { value: "0.875rem" },
        4: { value: "1rem" },
        5: { value: "1.25rem" },
        6: { value: "1.5rem" },
        7: { value: "1.75rem" },
        8: { value: "2rem" },
        9: { value: "2.25rem" },
        10: { value:	"2.5rem" },
        11: { value:	"2.75rem" },
        12: { value:	"3rem" },
        14: { value:	"3.5rem" },
        16: { value:	"4rem" },
        20: { value:	"5rem" },
        24: { value:	"6rem" },
        28: { value:	"7rem" },
        32: { value:	"8rem" },
        36: { value:	"9rem" },
        40: { value:	"10rem" },
        44: { value:	"11rem" },
        48: { value:	"12rem" },
        52: { value:	"13rem" },
        56: { value:	"14rem" },
        60: { value:	"15rem" },
        64: { value:	"16rem" },
        72: { value:	"18rem" },
        80: { value:	"20rem" },
        96: { value:	"24rem	384px" },
      },
      radii: {
        20: { value: '1.25rem' }
      }
    },
    semanticTokens: {
      radii: {
        md: { value: '{radii.20}' }
      }
    }
  }
}
