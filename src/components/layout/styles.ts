import { css } from "@styled-system/css";

export const defaultLayoutStyle = css({
  display: 'grid',

  gridTemplateColumns: '{spacing.60} calc(100% - {spacing.60})',
  gridTemplateRows: '100%',
})