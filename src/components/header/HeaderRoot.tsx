import type { PropsWithChildren } from "react";
import * as styles from './styles';

export function HeaderRoot({ children }: PropsWithChildren) {
  return (
    <div
      className={styles.headerContainer}
    >
      {children}
    </div>
  )
}
