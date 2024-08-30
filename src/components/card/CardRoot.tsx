import { css, Styles } from "@styled-system/css";
import type { PropsWithChildren } from "react";
import { Flex, FlexProps } from "../ui/flex";
import { type CardRootVariants, cardRootStyle } from "./styles";

type CardRootProps = {
  css?: Styles
} & CardRootVariants & Omit<FlexProps, 'css'>

export function CardRoot({
  children,
  border = 'outline',
  bg = 'grayGradient',
  radius,

  align,
  direction,
  gap,
  justify,
  width,

  css: style
}: PropsWithChildren<CardRootProps>) {
  return (
    <Flex
      css={css.raw(cardRootStyle.raw({ border, bg, radius }), style)}
      align={align}
      direction={direction}
      gap={gap}
      justify={justify}
      width={width}
    >
      {children}
    </Flex>
  )
}