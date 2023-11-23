import { mergeProps, splitProps } from 'solid-js'
import { customEventHandlersName } from '../../events'
import { ComponentParentProps } from '../../types'

export interface ListGroupProps extends ComponentParentProps<HTMLDivElement> {
  title?: string
  value?: string
}

export function generateProps(propsRaw: ListGroupProps) {
  return splitProps(mergeProps({ }, propsRaw), customEventHandlersName)
}