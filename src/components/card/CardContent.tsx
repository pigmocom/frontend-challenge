import type { PropsWithChildren } from "react";
import { Flex } from "../ui/flex";
import type { FlexVariants } from "../ui/flex/styles";
import { type CardContentVariants, cardContentStyle } from "./styles";

export function CardContent({ children, p = 'default', pl, ...rest }: PropsWithChildren<CardContentVariants & FlexVariants>) {
  return (
    <div className={cardContentStyle({ p, pl })}>
      <Flex {...rest} width="full">
        {children}
      </Flex>
    </div>
  )
}
