import { css } from "@styled-system/css";
import { flex } from "@styled-system/patterns";

export const avatarStyle = css({
  // gambi hehe
  maxWidth: 10,
  maxHeight: 10,
  minWidth: 10,
  minHeight: 10,

  borderRadius: 'full',
  background: 'primary',
}, flex.raw({ alignItems: 'center', justifyContent: 'center' }))