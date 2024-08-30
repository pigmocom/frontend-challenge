import { Icons } from "../@shared/icons"
import { Text } from "../text"
import { toggleMenuItemStyle } from "./styles"

type ToggleMenuItemProps = {
  icon: keyof typeof Icons,
  title: string
}

export function ToggleMenuItem({ icon, title }: ToggleMenuItemProps) {
  const Icon = Icons[icon]

  return (
    <div className={toggleMenuItemStyle}>
      <Icon />
      <Text textTransform="uppercase" weight={600}>{title}</Text>
    </div>
  )
}