import { cva, RecipeVariantProps } from "@styled-system/css";

export const boxStyle = cva({
  base: {
    display: 'block',
  },
  variants: {
    padding: {
      0: { p: "0px" },
      px: { p: "1" },
      0.5:	{ p: "0.125rem" },
      1: { p: "0.25rem" },
      1.5: { p: "0.375rem" },
      2: { p: "0.5rem" },
      2.5: { p: "0.625rem" },
      3.0: { p: ".75rem" },
      3.5: { p: "0.875rem" },
      4: { p: "1rem" },
      5: { p: "1.25rem" },
      6: { p: "1.5rem" },
      7: { p: "1.75rem" },
      8: { p: "2rem" },
      9: { p: "2.25rem" },
      10: { p: "2.5rem" },
      11: { p: "2.75rem" },
      12: { p: "3rem" },
      14: { p: "3.5rem" },
      16: { p: "4rem" },
      20: { p: "5rem" },
      24: { p: "6rem" },
      28: { p: "7rem" },
      32: { p: "8rem" },
      36: { p: "9rem" },
      40: { p: "10rem" },
      44: { p: "11rem" },
      48: { p: "12rem" },
      52: { p: "13rem" },
      56: { p: "14rem" },
      60: { p: "15rem" },
      64: { p: "16rem" },
      72: { p: "18rem" },
      80: { p: "20rem" },
      96: { p: "24rem" },
    },
    paddingInline: {
      0: { paddingInline: "0px" },
      px: { paddingInline: "1" },
      0.5:	{ paddingInline: "0.125rem" },
      1: { paddingInline: "0.25rem" },
      1.5: { paddingInline: "0.375rem" },
      2: { paddingInline: "0.5rem" },
      2.5: { paddingInline: "0.625rem" },
      3.0: { paddingInline: ".75rem" },
      3.5: { paddingInline: "0.875rem" },
      4: { paddingInline: "1rem" },
      5: { paddingInline: "1.25rem" },
      6: { paddingInline: "1.5rem" },
      7: { paddingInline: "1.75rem" },
      8: { paddingInline: "2rem" },
      9: { paddingInline: "2.25rem" },
      10: { paddingInline: "2.5rem" },
      11: { paddingInline: "2.75rem" },
      12: { paddingInline: "3rem" },
      14: { paddingInline: "3.5rem" },
      16: { paddingInline: "4rem" },
      20: { paddingInline: "5rem" },
      24: { paddingInline: "6rem" },
      28: { paddingInline: "7rem" },
      32: { paddingInline: "8rem" },
      36: { paddingInline: "9rem" },
      40: { paddingInline: "10rem" },
      44: { paddingInline: "11rem" },
      48: { paddingInline: "12rem" },
      52: { paddingInline: "13rem" },
      56: { paddingInline: "14rem" },
      60: { paddingInline: "15rem" },
      64: { paddingInline: "16rem" },
      72: { paddingInline: "18rem" },
      80: { paddingInline: "20rem" },
      96: { paddingInline: "24rem" },
    },
    paddingBlock: {
      0: { paddingBlock: "0px" },
      px: { paddingBlock: "1" },
      0.5:	{ paddingBlock: "0.125rem" },
      1: { paddingBlock: "0.25rem" },
      1.5: { paddingBlock: "0.375rem" },
      2: { paddingBlock: "0.5rem" },
      2.5: { paddingBlock: "0.625rem" },
      3.0: { paddingBlock: ".75rem" },
      3.5: { paddingBlock: "0.875rem" },
      4: { paddingBlock: "1rem" },
      5: { paddingBlock: "1.25rem" },
      6: { paddingBlock: "1.5rem" },
      7: { paddingBlock: "1.75rem" },
      8: { paddingBlock: "2rem" },
      9: { paddingBlock: "2.25rem" },
      10: { paddingBlock: "2.5rem" },
      11: { paddingBlock: "2.75rem" },
      12: { paddingBlock: "3rem" },
      14: { paddingBlock: "3.5rem" },
      16: { paddingBlock: "4rem" },
      20: { paddingBlock: "5rem" },
      24: { paddingBlock: "6rem" },
      28: { paddingBlock: "7rem" },
      32: { paddingBlock: "8rem" },
      36: { paddingBlock: "9rem" },
      40: { paddingBlock: "10rem" },
      44: { paddingBlock: "11rem" },
      48: { paddingBlock: "12rem" },
      52: { paddingBlock: "13rem" },
      56: { paddingBlock: "14rem" },
      60: { paddingBlock: "15rem" },
      64: { paddingBlock: "16rem" },
      72: { paddingBlock: "18rem" },
      80: { paddingBlock: "20rem" },
      96: { paddingBlock: "24rem" },
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

export type BoxVariants = RecipeVariantProps<typeof boxStyle>