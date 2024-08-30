import type { PropsWithCSS } from "@/types/utils";
import type { PropsWithChildren } from "react";

import * as styles from './styles';

type BannerRootType = PropsWithCSS

export function BannerRoot({ children, css: style }: PropsWithChildren<BannerRootType>) {
  return (
    <div className={styles.bannerRoot}>
      {children}
    </div>
  )
}
