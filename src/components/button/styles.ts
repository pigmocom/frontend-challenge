import { type RecipeVariantProps, cva } from "../../../styled-system/css";

export const buttonContainer = cva({
	base: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		paddingBlock: "3",
		paddingInline: "4",
	},
	variants: {
		bg: {
			primary: {
				background: "linear-gradient(145deg, #ff416c, #ff4b2b)",
			}
		},
		radius: {
			md: {
				borderRadius: 'md',
			}
		}
	}
});

export type ButtonVariants = RecipeVariantProps<typeof buttonContainer>
