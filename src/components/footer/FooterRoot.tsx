import { PropsWithChildren } from "react";
import { Flex, FlexProps } from "../utils/flex";

type FooterRootProps = {

} & Omit<FlexProps, 'css'>

export function FooterRoot({ children, ...rest }: PropsWithChildren<FooterRootProps>) {
  return (
    <Flex {...rest}>
      {children}
    </Flex>
  )
}