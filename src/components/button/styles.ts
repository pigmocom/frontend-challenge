import { type RecipeVariantProps, cva } from "../../../styled-system/css";

export const buttonContainer = cva({
	base: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		paddingBlock: "0.844rem",
		paddingInline: 8,

    cursor: { base: 'pointer', _disabled: 'default' },
	},
	variants: {
		bg: {
			primary: {
				background: "radial-gradient(50% 100% at 50% 0,hsla(2, 100%, 70%, 1) 0,hsla(326, 100%, 46%, 1) 100%)",
				boxShadow: "0px -3px 0px 0px hsla(290, 32%, 7%, 0.5) inset",
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
				// border: '1px solid #FF6864'
			},
			outline: {
				border: '1px solid #35243D'
			},
			"": {}
		},
		aspect: {
			square: {
				paddingBlock: 2,
				paddingInline: 2,
			}
		}
	}
});

export type ButtonVariants = RecipeVariantProps<typeof buttonContainer>
