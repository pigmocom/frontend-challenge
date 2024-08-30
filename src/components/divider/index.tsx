import type { PropsWithChildren } from "react";
import { type DividerVariants, dividerStyle } from "./styles";

export function Divider({ color = 'muted' }: PropsWithChildren<DividerVariants>) {
  return (
    <hr className={dividerStyle({ color })} />
  )
}
