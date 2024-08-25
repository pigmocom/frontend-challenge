import { type RecipeVariantProps, cva } from "@styled-system/css";

export const dividerStyle = cva({
  base: {
    width: '100%',
  },
  variants: {
    color: {
      muted: {
				color: "{colors.border}",
      }
    }
  }
})

export type DividerVariants = RecipeVariantProps<typeof dividerStyle>
