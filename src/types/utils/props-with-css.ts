import type { Styles } from "../../../styled-system/css";

export type PropsWithCSS<T = unknown> = { css?: Styles | Styles[]} & T;
