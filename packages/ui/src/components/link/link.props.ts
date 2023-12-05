import { mergeProps, splitProps } from 'solid-js'

import { customEventHandlersName } from '../../events'
import { ComponentColor, ComponentParentProps } from '../../types'

export interface LinkProps extends ComponentParentProps<HTMLAnchorElement> {
  color?: ComponentColor

  //是否显示下划线
  underline?: boolean | 'always'

  href?: string
}

export function generateProps(propsRaw: LinkProps) {
  return splitProps(
    mergeProps(
      {
        underline: true,
      },
      propsRaw
    ),
    customEventHandlersName
  )
}