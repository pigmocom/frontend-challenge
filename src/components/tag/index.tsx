import type { PropsWithCSS } from '@/types/utils'
import type { PropsWithChildren } from 'react'
import { Flex } from '../ui/flex'
import type { FlexVariants } from '../ui/flex/styles'
import * as style from './styles'

type TagPropsType = style.TagVariants & PropsWithCSS

export function Tag({
  children,
  bg,
  border,
  outline,
  padding,
  radius,
  align,
  direction,
  gap,
  justify
}: PropsWithChildren<TagPropsType & FlexVariants>) {
  return (
    <div className={style.tagContainer({ bg, border, outline, padding, radius })}>
      <Flex
        align={align}
        direction={direction}
        gap={gap}
        justify={justify}
      >
        {children}
      </Flex>
    </div>
  )
}
