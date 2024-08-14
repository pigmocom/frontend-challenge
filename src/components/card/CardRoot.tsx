import type { PropsWithChildren } from "react";
import { Flex, FlexProps } from "../utils/flex";
import { type CardRootVariants, cardRootStyle } from "./styles";

export function CardRoot({
  children,
  border = 'outline',
  bg = 'grayGradient',
  radius,

  align,
  direction,
  gap,
  justify,
  width
}: PropsWithChildren<CardRootVariants & Omit<FlexProps, 'css'>>) {
  return (
    <Flex
      css={cardRootStyle.raw({ border, bg, radius })}
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