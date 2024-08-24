import { PropsWithChildren } from "react";
import { ToggleMenuRootStyle } from "./styles";

export function ToggleMenuRoot({ children }: PropsWithChildren) {
  return (
    <div className={ToggleMenuRootStyle}>
      {children}
    </div>
  )
}