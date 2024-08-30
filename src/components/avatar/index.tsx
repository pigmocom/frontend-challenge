import Image from "next/image"
import { Text } from "../text"
import { avatarStyle } from "./styles"

type AvatarProps = {
  src?: string,
  title?: string
}

export function Avatar({ src, title }: AvatarProps) {
  return (
    <div className={avatarStyle}>
      {src && <Image src={src} fill alt='avatar-image' />}
      {title && <Text size="h3">{title.slice(0, 1).toUpperCase()}</Text>}
    </div>
  )
}