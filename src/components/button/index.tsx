import type { PropsWithCSS } from "@/types/utils";
import type { PropsWithChildren, ReactHTMLElement } from "react";
import * as styles from './styles';

type ButtonPropsType = {
  type?: "button" | "submit" | "reset";
}
  & PropsWithCSS
  & Partial<ReactHTMLElement<HTMLButtonElement>>

export function Button({ children, css: style, ...rest }: PropsWithChildren<ButtonPropsType>) {
  return (
    <button className={styles.buttonContainer({ bg: "primary", radius: "md" })} {...rest}>
      {children}
    </button>
  )
}
