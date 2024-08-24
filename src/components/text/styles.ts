import { type RecipeVariantProps, cva } from "@styled-system/css";

export const textStyle = cva({
	base: {
		color: "white",
	},
	variants: {
		size: {
			h1: { fontSize: 'h1' },
			h2: { fontSize: 'h2' },
			h3: { fontSize: 'h3' },
			h4: { fontSize: 'h4' },
			h5: { fontSize: 'h5' },
			paragraph: { fontSize: 'paragraph' },
			textSmall: { fontSize: 'textSmall' },
			textMedium: { fontSize: 'textMedium' },
			card: { fontSize: '18px' }
		},
		color: {
			default: {
				color: "white",
			},
			primary: {
				color: "primary",
			},
			muted: {
				color: "#826B8E",
			},
			green: {
				color: 'green'
			}
		},
		weight: {
			medium: {
				fontWeight: 600,
			},
			semiBold: {
				fontWeight: 700,
			},
		},
		textTransform: {
			uppercase: {
				textTransform: "uppercase",
			}
		},
		letterSpace: {
			logo: {
				letterSpacing: "{spacing.7}"
			}
		}
	},
});

export type TextVariants = RecipeVariantProps<typeof textStyle>
