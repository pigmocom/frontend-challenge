import { css, Styles } from '@styled-system/css'
import type { PropsWithChildren } from 'react'
import * as s from './styles'

export type GridProps<T = unknown> = {
  css?: Styles
} & s.GridVariants & T

export function Grid({
  children,
  css: style,
  ...rest
}: PropsWithChildren<GridProps>
) {
  return (
    <div className={css(s.gridContainer.raw({ ...rest }), style)}>
      {children}
    </div>
  )
}
