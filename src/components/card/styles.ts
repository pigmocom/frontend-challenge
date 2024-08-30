import { type RecipeVariantProps, cva } from "@styled-system/css";

export const cardRootStyle = cva({
  base: {
    borderRadius: 'md',
    cursor: { base: 'pointer', _disabled: 'default' },
    overflow: 'hidden'
  },
  variants: {
		radius: {
			md: {
				borderRadius: 'md',
			}
		},
    border: {
			outline: {
				border: '1px solid {colors.border}'
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
            base: 'linear-gradient(145deg, #170D19 0%, {colors.border} 100%)',

        },
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }
    }
  } 
})

export const cardIconStyle = cva({
  base: {
    position: 'relative',
    borderRadius: 'md',
    width: '7',
    height: '7',
    maxW: '7',
    maxH: '7'
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
  base: {
    width: '100%'
  },
  variants: {
		p: {
      default: {
        padding: 3
      },
    },
    pl: {
      10: {
        padding: 10
      }
    },
    pb: {
      7: {
        paddingBlock: 7
      }
    }
  }
})

export type CardRootVariants = RecipeVariantProps<typeof cardRootStyle>
export type CardContentVariants = RecipeVariantProps<typeof cardContentStyle>
export type CardIconVariants = RecipeVariantProps<typeof cardIconStyle>
