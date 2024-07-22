import { type RecipeVariantProps, cva } from "@styled-system/css";

export const dividerStyle = cva({
  base: {
    width: '100%',
  },
  variants: {
    color: {
      muted: {
				color: "#35243D",
      }
    }
  }
})

export type DividerVariants = RecipeVariantProps<typeof dividerStyle>
