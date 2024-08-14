import type { PropsWithChildren } from "react";
import { Flex } from "../utils/flex";
import { type CardRootVariants, cardRootStyle } from "./styles";

export function CardRoot({ children, border = 'outline', bg = 'grayGradient' }: PropsWithChildren<CardRootVariants>) {
  return (
    <Flex css={cardRootStyle.raw({ border, bg })}>
      {children}
    </Flex>
  )
}