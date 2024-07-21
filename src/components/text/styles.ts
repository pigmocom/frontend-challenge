import { cva } from "@styled-system/css";

export const text = cva({
	base: {
		color: "white",
		textTransform: "uppercase",
	},
	variants: {
		size: {
			md: {
				fontSize: "20px",
			},
			xl: {
				fontSize: "42px",
			},
		},
		color: {
			default: {
				color: "white",
			},
			muted: {
				color: "#826B8E",
			},
		},
		weight: {
			medium: {
				fontWeight: 600,
			},
			semiBold: {
				fontWeight: 700,
			},
		},
	},
});
