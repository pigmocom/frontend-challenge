import type { PropsWithCSS } from "@/types/utils";
import { css } from "@styled-system/css";
import type { PropsWithChildren } from "react";
import { CarouselRootContainer } from './styles';

export function CarouselRoot({ children, css: style }: PropsWithChildren<PropsWithCSS>) {
  return (
    <div className={css(CarouselRootContainer, style)}>
      {children}
    </div>
  )
}