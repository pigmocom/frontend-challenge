import type { PropsWithCSS } from "@/types/utils";
import type { PropsWithChildren } from "react";
import { css } from "../../../styled-system/css";
import { text } from "./styles";

type TextPropsType = PropsWithCSS<{
  size?: 'md' | 'xl',
  color?: 'muted' | 'default',
  weight?: 'medium' | 'semiBold'
}>

export function Text({ children, size = 'md', color = 'default', weight = 'medium', css: style }: PropsWithChildren<TextPropsType>) {
  return (
    <p className={css(text.raw({ size, color, weight }), style)}>{children}</p>
  )
}
