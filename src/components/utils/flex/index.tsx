import type { PropsWithChildren } from 'react'
import * as style from './styles'

export function Flex({ children, align = 'center', direction = 'row', justify, gap, width }: PropsWithChildren<style.FlexVariants>) {
  return (
    <div className={style.flexContainer({ align, direction, justify, gap, width })}>
      {children}
    </div>
  )
}