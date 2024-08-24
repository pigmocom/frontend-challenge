import { PropsWithChildren } from "react";
import { Flex, FlexProps } from "../ui/flex";

type FooterRootProps = {

} & FlexProps

export function FooterRoot({ children, ...rest }: PropsWithChildren<FooterRootProps>) {
  return (
    <Flex {...rest}>
      {children}
    </Flex>
  )
}