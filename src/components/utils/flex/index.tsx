import { css, Styles } from '@styled-system/css'
import type { PropsWithChildren } from 'react'
import * as s from './styles'

export type FlexProps<T = unknown> = {
  css?: Styles
} & s.FlexVariants & T

export function Flex({
  children,
  css: style,
  align = 'center',
  direction = 'row',
  justify,
  gap,
  width = 'full',
}: PropsWithChildren<FlexProps>
) {
  return (
    <div className={css(s.flexContainer.raw({ align, direction, justify, gap, width }), style)}>
      {children}
    </div>
  )
}
