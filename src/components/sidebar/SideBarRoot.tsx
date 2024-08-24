import { PropsWithChildren } from "react";
import { Flex, FlexProps } from "../ui/flex";

export function SideBarRoot({ children, ...rest }: PropsWithChildren<FlexProps>) {
  return (
    <Flex direction="column" {...rest}>{children}</Flex>
  )
}