import type { PropsWithCSS } from "@/types/utils";
import { css } from "@styled-system/css";
import type { PropsWithChildren } from "react";
import { CarouselHeaderContainer } from './styles';

export function CarouselHeader({ children, css: style }: PropsWithChildren<PropsWithCSS>) {
  return (
    <div className={css(CarouselHeaderContainer, style)}>
      {children}
    </div>
  )
}