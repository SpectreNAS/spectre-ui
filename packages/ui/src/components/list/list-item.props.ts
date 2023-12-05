import { mergeProps, splitProps } from 'solid-js'

import { customEventHandlersName } from '../../events'
import { ComponentParentProps } from '../../types'

export interface ListItemProps extends ComponentParentProps<HTMLDivElement> {
  value?: string
}

export function generateProps(propsRaw: ListItemProps) {
  return splitProps(mergeProps({ }, propsRaw), customEventHandlersName)
}