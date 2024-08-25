import { css } from "@styled-system/css";

export const defaultLayoutStyle = css({
  display: 'grid',

  gridTemplateColumns: '2fr 14fr',
  gridTemplateRows: '100%',
})

// export type DefaultLayoutVariants = RecipeVariantProps<typeof defaultLayoutStyle>