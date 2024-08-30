import { css } from "@styled-system/css";
import { PropsWithChildren } from "react";
import { Icons } from "../@shared/icons";
import { Flex, FlexProps } from "../ui/flex";
import { sidebarItemStyle, SidebarItemVariants } from "./styles";

type SidebarItemProps = {
  icon: keyof typeof Icons,
  iconPosition: 'left' | 'right',
} & FlexProps & SidebarItemVariants

export function SideBarItem({ children, icon, iconPosition, css: style, border, hover, ...rest }: PropsWithChildren<SidebarItemProps>) {
  const Icon = Icons[icon]

  return (
    <Flex
      justify={iconPosition === 'left' ? "start" : "between"}
      css={css.raw(style, sidebarItemStyle.raw({ border, hover }))}
      {...rest}
    >
      {iconPosition === 'left' && <Icon />}
      {children}
      {iconPosition === 'right' && <Icon />}
    </Flex>
  )
}