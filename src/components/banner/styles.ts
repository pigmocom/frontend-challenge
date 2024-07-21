import { css } from "@styled-system/css";

export const imageStyle = css.raw({
	position: "absolute",
	height: "auto!important",

	zIndex: -1,
});

export const bannerRoot = css({
	position: "relative",

	width: "100%",
	height: "auto",

	paddingInline: "16.875rem",
	paddingTop: "4.5rem",

	gap: "2rem",
});
