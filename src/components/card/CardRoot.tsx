import type { PropsWithChildren } from "react";
import { type CardRootVariants, cardRootStyle } from "./styles";

export function CardRoot({ children, border = 'outline', bg = 'grayGradient' }: PropsWithChildren<CardRootVariants>) {
  return (
    <div className={cardRootStyle({ border, bg })}>
      {children}
    </div>
  )
}