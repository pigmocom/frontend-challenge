import type { PropsWithCSS } from "@/types/utils";
import { css } from "@styled-system/css";
import { type PropsWithChildren, cloneElement } from "react";
import { CarouselTitleIconContainer } from "./styles";

type CarouselTitleIconProps = PropsWithCSS<{
  as: () => JSX.Element
}>

export function CarouselTitleIcon({ children, css: style, as: Icon }: PropsWithChildren<CarouselTitleIconProps>) {
  return cloneElement(Icon(), { className: css(style, CarouselTitleIconContainer) })
}