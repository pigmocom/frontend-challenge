import { PropsWithCSS } from "@/types/utils";
import { PropsWithChildren } from "react";

import { css } from "@styled-system/css";
import { Flex, FlexProps } from "../ui/flex";

import * as s from "./styles";

export function SolidCardRoot({
  children,
  justify = 'center',
  align = 'center',
  direction = 'row',
  background,
  ...rest
}: PropsWithChildren<PropsWithCSS<FlexProps<s.SolidCardVariants>>>) {
  return (
    <Flex
      align={align}
      justify={justify}
      direction={direction}
      css={css.raw(s.solidCardStyle.raw({ background }), rest.css)}
      {...rest}
    >
      {children}
    </Flex>
  )
}