import { type RecipeVariantProps, cva } from "@styled-system/css";

export const flexContainer = cva({
  base: {
    display: 'flex',
  },
  variants: {
    direction: {
      row: {
        flexDirection: 'row'
      },
      column: {
        flexDirection: 'column'
      }
    },
    justify: {
      between: {
        justifyContent: 'space-between'
      },
      around: {
        justifyContent: 'space-around'
      },
      evenly: {
        justifyContent: 'space-evenly'
      },
      center: {
        justifyContent: 'center'
      },
      end: {
        justifyContent: 'flex-end'
      },
      start: {
        justifyContent: 'flex-start'
      }
    },
    align: {
      center: {
        alignItems: 'center'
      },
      end: {
        alignItems: 'flex-end'
      },
      start: {
        alignItems: 'flex-start'
      }
    },
    gap: {
      0: { gap: "0px" },
      px: { gap: "1" },
      0.5:	{ gap: "0.125rem" },
      1: { gap: "0.25rem" },
      1.5: { gap: "0.375rem" },
      2: { gap: "0.5rem" },
      2.5: { gap: "0.625rem" },
      3.0: { gap: ".75rem" },
      3.5: { gap: "0.875rem" },
      4: { gap: "1rem" },
      5: { gap: "1.25rem" },
      6: { gap: "1.5rem" },
      7: { gap: "1.75rem" },
      8: { gap: "2rem" },
      9: { gap: "2.25rem" },
      10: { gap: "2.5rem" },
      11: { gap: "2.75rem" },
      12: { gap: "3rem" },
      14: { gap: "3.5rem" },
      16: { gap: "4rem" },
      20: { gap: "5rem" },
      24: { gap: "6rem" },
      28: { gap: "7rem" },
      32: { gap: "8rem" },
      36: { gap: "9rem" },
      40: { gap: "10rem" },
      44: { gap: "11rem" },
      48: { gap: "12rem" },
      52: { gap: "13rem" },
      56: { gap: "14rem" },
      60: { gap: "15rem" },
      64: { gap: "16rem" },
      72: { gap: "18rem" },
      80: { gap: "20rem" },
      96: { gap: "24rem" },
    },
    width: {
      auto: {
        width: 'auto',
      },
      full: {
        width: '100%',
      }
    },
  }
})

export type FlexVariants = RecipeVariantProps<typeof flexContainer>
