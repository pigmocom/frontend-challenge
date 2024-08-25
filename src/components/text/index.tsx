import type { PropsWithCSS } from "@/types/utils";
import type { PropsWithChildren } from "react";
import { css } from "../../../styled-system/css";
import { type TextVariants, textStyle } from "./styles";

type TextPropsType = TextVariants & PropsWithCSS

export function Text({
  children,
  size = 'textMedium',
  color = 'default',
  weight,
  textTransform,
  letterSpace,
  css: style,
}: PropsWithChildren<TextPropsType>) {
  return (
    <p className={css(textStyle.raw({ size, color, weight, textTransform, letterSpace }), style)}>{children}</p>
  )
}
