import type { PropsWithChildren } from "react";
import { Flex } from "../utils/flex";
import type { FlexVariants } from "../utils/flex/styles";

export function CarouselContent({ children, ...rest }: PropsWithChildren<FlexVariants>) {
  return (
    <Flex {...rest}>{children}</Flex>
  )
}