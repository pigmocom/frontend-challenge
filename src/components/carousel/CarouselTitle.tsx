import type { PropsWithCSS } from "@/types/utils";
import { css } from "@styled-system/css";
import type { PropsWithChildren } from "react";
import { CarouselTitleContainer } from './styles';

export function CarouselTitle({ children, css: style }: PropsWithChildren<PropsWithCSS>) {
  return (
    <div className={css(CarouselTitleContainer, style)}>
      {children}
    </div>
  )
}