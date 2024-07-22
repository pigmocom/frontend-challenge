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
				background: "radial-gradient(50% 100% at 50% 0,#E90083 0,#FF6864 100%)",
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
		},
		aspect: {
			square: {
				paddingBlock: "3",
				paddingInline: "3",
			}
		}
	}
});

export type ButtonVariants = RecipeVariantProps<typeof buttonContainer>
