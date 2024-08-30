import type { PropsWithCSS } from "@/types/utils";
import Image, { type ImageProps } from "next/image";

export function CardImage({ css, src, width = 170, height = 100, alt, ...rest }: PropsWithCSS<ImageProps>) {
  return (
    <Image src={src} width={width} height={height} alt={alt} {...rest} />
  )
}
