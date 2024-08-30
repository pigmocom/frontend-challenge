import type { PropsWithChildren } from "react";
import { Flex } from "../ui/flex";
import type { FlexVariants } from "../ui/flex/styles";

export function CarouselContent({ children, ...rest }: PropsWithChildren<FlexVariants>) {
  return (
    <Flex {...rest}>{children}</Flex>
  )
}