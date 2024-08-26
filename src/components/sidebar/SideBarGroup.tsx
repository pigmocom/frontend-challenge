import { cx } from "@styled-system/css";
import { flex } from "@styled-system/patterns";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { Icons } from "../@shared/icons";
import { Text } from "../text";
import { sideBarGroupHeaderStyle, sideBarGroupStyle, SidebarGroupVariants } from "./styles";

type SidebarGroupProps = {
  title: string
} & SidebarGroupVariants & ComponentPropsWithoutRef<'div'>

export function SideBarGroup({ children, title, selected, onClick, ...rest }: PropsWithChildren<SidebarGroupProps>) {
  return (
    <div className={sideBarGroupStyle({ selected })} {...rest}>
      <div
        className={cx(
          flex({ justify: 'space-between', gap: 3 }),
          sideBarGroupHeaderStyle({ selected })
        )}
        onClick={onClick}
      >
        <Text
          size="h5"
          textTransform="uppercase"
          weight={700}
          color={selected === 'active' ? "primary" : "muted"}
        >
          {title}
        </Text>
        {selected === 'active' ? <Icons.ChevronTop /> : <Icons.ChevronDown />}
      </div>
      <ul>
        {children}
      </ul>
    </div>
  )
}