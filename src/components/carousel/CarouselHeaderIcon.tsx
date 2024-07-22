import type { PropsWithCSS } from "@/types/utils";
import { css } from "@styled-system/css";
import { type PropsWithChildren, cloneElement } from "react";
import { CarouselHeaderIconContainer } from "./styles";

type CarouselHeaderIconProps = PropsWithCSS<{
  as: () => JSX.Element
}>

export function CarouselTitleIcon({ children, css: style, as: Icon }: PropsWithChildren<CarouselHeaderIconProps>) {
  return cloneElement(Icon(), { className: css(style, CarouselHeaderIconContainer) })
}