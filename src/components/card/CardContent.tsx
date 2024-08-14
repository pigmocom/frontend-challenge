import type { PropsWithChildren } from "react";
import { Flex } from "../utils/flex";
import type { FlexVariants } from "../utils/flex/styles";
import { type CardContentVariants, cardContentStyle } from "./styles";

export function CardContent({ children, p = 'default', ...rest }: PropsWithChildren<CardContentVariants & FlexVariants>) {
  return (
    <div className={cardContentStyle({ p })}>
      <Flex {...rest} width="full">
        {children}
      </Flex>
    </div>
  )
}
