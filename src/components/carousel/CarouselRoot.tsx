import type { PropsWithCSS } from "@/types/utils";
import { css } from "@styled-system/css";
import type { PropsWithChildren } from "react";
import { Flex, FlexProps } from "../ui/flex";
import { CarouselRootContainer } from './styles';

export function CarouselRoot({
  children,
  css: style,
  align = 'start',
  direction,
  gap,
  justify,
  width
}: PropsWithChildren<PropsWithCSS & Omit<FlexProps, 'css'>>) {
  return (
    <Flex
      align={align}
      direction={direction}
      gap={gap}
      justify={justify}
      width={width}
      css={css.raw(CarouselRootContainer, style)}
    >
      {children}
    </Flex>
  )
}