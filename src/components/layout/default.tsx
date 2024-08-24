import { PropsWithChildren } from "react";
import { defaultLayoutStyle } from "./styles";

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <div className={defaultLayoutStyle}>{children}</div>
  )
}