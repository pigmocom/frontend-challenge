import { type RecipeVariantProps, cva } from "@styled-system/css";

export const tagContainer = cva({
  base: {
    display: 'flex',
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
				border: '1px solid #FF6864'
			},
			outline: {
				border: '1px solid #35243D'
			},
			"": {}
		},
    outline: {
      green: {
				border: '{spacing.0.75} solid green'
      }
    },
    padding: {
      default: {
        paddingInline: '1'
      },
      pill: {
        paddingBlock: '1',
        paddingInline: '2',
      }
    },
    radius: {
      md: {
        borderRadius: 'md',
      },
      sm: {
        borderRadius: 'sm'
      }
    }
  }
})

export type TagVariants = RecipeVariantProps<typeof tagContainer>
