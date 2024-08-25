import { PropsWithChildren } from "react";
import { Icons } from "../@shared/icons";
import { Text } from "../text";
import { Flex } from "../ui/flex";
import { sideBarGroupHeaderStyle, sideBarGroupStyle, SidebarGroupVariants } from "./styles";

type SidebarGroupProps = {
  title: string
} & SidebarGroupVariants

export function SideBarGroup({ children, title, selected }: PropsWithChildren<SidebarGroupProps>) {
  return (
    <div className={sideBarGroupStyle({ selected })}>
      <Flex
        justify="between"
        gap={3}
        css={sideBarGroupHeaderStyle.raw({ selected })}
      >
        <Text
          size="h5"
          textTransform="uppercase"
          weight="semiBold"
          color={selected === 'active' ? "primary" : "muted"}
        >
          {title}
        </Text>
        {selected === 'active' ? <Icons.ChevronTop /> : <Icons.ChevronDown />}
      </Flex>
      {children}
    </div>
  )
}