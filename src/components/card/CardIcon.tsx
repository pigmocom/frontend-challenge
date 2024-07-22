import type { PropsWithChildren } from "react";
import { type CardIconVariants, cardIconStyle } from "./styles";

export function CardIcon({ children, radius }: PropsWithChildren<CardIconVariants>) {
  return (
    <div className={cardIconStyle({ radius })}>
      {children}
    </div>
  )
}
