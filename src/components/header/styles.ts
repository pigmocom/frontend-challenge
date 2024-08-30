import { stack } from "../../../styled-system/patterns";

export const headerContainer = stack({
	py: 3,
	px: 6,

	flexDirection: "row",

	justifyContent: "space-between",

	width: "100%",

	background: "#170D19",
	color: "white",

	borderBottom: "{colors.border} 1px solid",
});
