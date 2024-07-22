import type { PropsWithCSS } from "@/types/utils";
import type { PropsWithChildren, ReactHTMLElement } from "react";
import * as styles from './styles';

type ButtonPropsType = {
  type?: "button" | "submit" | "reset";
}
  & styles.ButtonVariants
  & PropsWithCSS
  & Partial<ReactHTMLElement<HTMLButtonElement>>

export function Button({ children, css: style, bg = 'primary', radius = 'md', border = 'primary', aspect, ...rest }: PropsWithChildren<ButtonPropsType>) {
  return (
    <button className={styles.buttonContainer({ bg, radius, border, aspect })} {...rest}>
      {children}
    </button>
  )
}
