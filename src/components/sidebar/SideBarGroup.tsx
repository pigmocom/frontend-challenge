import { PropsWithChildren } from "react";
import { SideBar } from ".";
import { Text } from "../text";
import { sideBarGroupStyle, SidebarGroupVariants } from "./styles";

type SidebarGroupProps = {
  title: string
} & SidebarGroupVariants

export function SideBarGroup({ children, title, selected }: PropsWithChildren<SidebarGroupProps>) {
  return (
    <div className={sideBarGroupStyle({ selected })}>
      <SideBar.Item border="block" icon="ChevronTop" iconPosition="right">
        <Text size="h5" textTransform="uppercase" color={!(selected === "active") ? "muted" : "primary"}>{title}</Text>
      </SideBar.Item>
      {children}
    </div>
  )
}