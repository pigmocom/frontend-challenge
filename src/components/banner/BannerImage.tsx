import type { PropsWithCSS } from "@/types/utils"
import { css } from "@styled-system/css"
import Image, { type ImageProps } from "next/image"
import * as styles from './styles'

type BannerImageProps = {
  src: string
} & ImageProps

export function BannerImage({ src, css: style, ...rest }: PropsWithCSS<BannerImageProps>) {
  return (
    <Image src={src} fill className={css(styles.imageStyle, style)} {...rest} />
  )
}