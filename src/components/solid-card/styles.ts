import { cva, RecipeVariantProps } from "@styled-system/css";

export const solidCardStyle = cva({
  base: {
    padding: '5',
    borderRadius: '5',

    cursor: 'pointer'
  },
  defaultVariants: {
    background: 'blue'
  },
  variants: {
    background: {
      pink: {
        background: 'linear-gradient(90deg, #E90083 100%, #FF6864 100%)',
        boxShadow: '0 11px 26.8px rgba(233, 0, 131, 0.24)',
      },
      blue: {
        background: 'linear-gradient(90deg, hsla(184, 58%, 49%, 1) 100%, hsla(202, 72%, 51%, 1) 100%)',
        boxShadow: '0 11px 26.8px hsla(197, 67%, 51%, 0.07)',
      },
      dark: {
        background: 'linear-gradient(90deg, hsla(326, 7%, 5%, 1) 100%, hsla(2, 9%, 10%, 1) 100%)',
        boxShadow: '0 11px 26.8px hsla(287, 28%, 14%, 0.29)',
      }
    }
  }
})

export type SolidCardVariants = RecipeVariantProps<typeof solidCardStyle>