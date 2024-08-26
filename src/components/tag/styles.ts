import { type RecipeVariantProps, cva } from "@styled-system/css";

export const tagContainer = cva({
  base: {
    display: 'flex',
  },
  defaultVariants: {
    bg: 'primary',
    border: 'outline',
    padding: 'default',
    radius: 'xs'
  },
  variants: {
    bg: {
      primary: {
				background: "linear-gradient(145deg, #ff416c, #ff4b2b)",
      },
			outline: {}
    },
    border: {
			primary: {
				border: '{spacing.px} solid #FF6864'
			},
			outline: {
				border: '{spacing.px} solid {colors.border}'
			},
			"": {}
		},
    outline: {
      green: {
				border: '{spacing.px} solid {colors.green}',
        boxShadow: '0 0 {spacing.1} {colors.green}'
      }
    },
    padding: {
      default: {
        paddingInline: 1,
      },
      pill: {
        paddingBlock: 1,
        paddingInline: 2,
      }
    },
    radius: {
      md: {
        borderRadius: 'md',
      },
      sm: {
        borderRadius: 'sm'
      },
      xs: {
        borderRadius: 'xs'
      }
    }
  }
})

export type TagVariants = RecipeVariantProps<typeof tagContainer>
