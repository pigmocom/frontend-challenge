import { PropsWithCSS } from "@/types/utils";
import { css } from "@styled-system/css";
import { PropsWithChildren } from "react";
import { boxStyle, BoxVariants } from "./styles";

type BoxProps = PropsWithCSS<{

}> & BoxVariants

export function Box({ children, css: style, ...rest }: PropsWithChildren<BoxProps>) {
  return (
    <div className={css(boxStyle.raw({ ...rest }), style)}>
      {children}
    </div>
  )
}