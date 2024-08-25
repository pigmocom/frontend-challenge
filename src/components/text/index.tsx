import type { PropsWithCSS } from "@/types/utils";
import type { PropsWithChildren } from "react";
import { css } from "../../../styled-system/css";
import { type TextVariants, textStyle } from "./styles";

type TextPropsType = TextVariants & PropsWithCSS

export function Text({
  children,
  css: style,
  ...rest
}: PropsWithChildren<TextPropsType>) {
  return (
    <p className={css(textStyle.raw({ ...rest }), style)}>{children}</p>
  )
}
