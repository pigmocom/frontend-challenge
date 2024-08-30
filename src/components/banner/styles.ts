import { css } from "@styled-system/css";

export const imageStyle = css.raw({
	width: '100%',
	height: "auto",

	zIndex: -1,
});

export const bannerRoot = css({
	position: "relative",

	width: "100%",
	height: "auto",

	paddingInline: "16.875rem",
	paddingBlock: "20",

	gap: "2rem",
});
