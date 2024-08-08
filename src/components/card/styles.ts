import { type RecipeVariantProps, cva } from "@styled-system/css";

export const cardRootStyle = cva({
  base: {
    borderRadius: 'md',
    cursor: { base: 'pointer', _disabled: 'default' }
  },
  variants: {
		radius: {
			md: {
				borderRadius: 'md',
			}
		},
    border: {
			outline: {
				border: '1px solid #35243D'
			},
			"": {}
		},
    bg: {
      grayGradient: {
				background: {
          base: "linear-gradient(129deg, rgba(0, 0, 0, 0) 63.84%, rgba(204, 149, 215, 0.15) 96.69%)",
          _hover: "linear-gradient(129deg,#0000 63.84%,#ff00b833 96.69%)"
        },
      },
      highlight: {
        background: {
          base: "linear-gradient(to bottom, #6c5ce7, #343a6f)",
          _hover: "linear-gradient(145deg, #ff0080, #ff4d4d)"
        }
      }
    }
  } 
})

export const cardIconStyle = cva({
  base: {
    position: 'relative',
    borderRadius: 'md',
    width: '7',
    height: '7'
  },
  variants: {
		radius: {
			md: {
				borderRadius: 'md',
			}
		},
  }
})

export const cardContentStyle = cva({
  base: {},
  variants: {
		p: {
      default: {
        padding: 3
      }
    }
  }
})

export type CardRootVariants = RecipeVariantProps<typeof cardRootStyle>
export type CardContentVariants = RecipeVariantProps<typeof cardContentStyle>
export type CardIconVariants = RecipeVariantProps<typeof cardIconStyle>
