import { type RecipeVariantProps, cva } from "@styled-system/css";

export const textStyle = cva({
	base: {
		color: "white",
		fontFamily: "body",

		display: "inline",
	},
	defaultVariants: {
		size: 'textMedium',
		color: 'default',
		weight: 600,
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
			400: { fontWeight: 400 },
			600: { fontWeight: 600 },
			700: { fontWeight: 700 },
			900: { fontWeight: 900 }
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
		},
		lineHeight: {
			paragraph: {
				lineHeight: 1.25
			},
			sidebar: {
				lineHeight: '16.06px'
			},
			xs: {
				lineHeight: 1,
			}
		},
		wrap: {
			nowrap: {
				whiteSpace: 'nowrap'
			}
		}
	},
});

export type TextVariants = RecipeVariantProps<typeof textStyle>
