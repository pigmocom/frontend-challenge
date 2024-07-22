import type { PropsWithChildren } from "react";
import { type CardIconVariants, cardIconStyle } from "./styles";

export function CardIcon({ children, radius, test }: PropsWithChildren<CardIconVariants>) {
  return (
    <div className={cardIconStyle({ radius, test })}>
      {children}
    </div>
  )
}
