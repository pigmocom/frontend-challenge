import { css } from "@styled-system/css";
import { PropsWithChildren } from "react";
import { Flex, FlexProps } from "../ui/flex";
import { sidebarStyle } from "./styles";

export function SideBarRoot({ children, css: style, ...rest }: PropsWithChildren<FlexProps>) {
  return (
    <Flex direction="column" css={css.raw(sidebarStyle, style)} {...rest}>{children}</Flex>
  )
}