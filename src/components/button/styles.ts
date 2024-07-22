import { type RecipeVariantProps, cva } from "../../../styled-system/css";

export const buttonContainer = cva({
	base: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		paddingBlock: "3",
		paddingInline: "4",

    cursor: { base: 'pointer', _disabled: 'default' }
	},
	variants: {
		bg: {
			primary: {
				background: "linear-gradient(145deg, #ff416c, #ff4b2b)",
			},
			outline: {}
		},
		radius: {
			md: {
				borderRadius: 'md',
			}
		},
		border: {
			primary: {
				border: '1px solid #FF6864'
			},
			outline: {
				border: '1px solid #35243D'
			},
			"": {}
		}
	}
});

export type ButtonVariants = RecipeVariantProps<typeof buttonContainer>
