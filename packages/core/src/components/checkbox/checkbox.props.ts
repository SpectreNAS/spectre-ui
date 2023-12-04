import { mergeProps, splitProps } from 'solid-js'

import { customEventHandlersName } from '../../events'
import { ComponentSize, ValueChanged, ComponentParentProps } from '../../types'

export interface CheckboxProps extends ComponentParentProps<HTMLDivElement> {
  value?: boolean
  indeterminate?: boolean
  size?: ComponentSize
  change?: ValueChanged<boolean>
}

export function generateProps(propsRaw: CheckboxProps) {
  return splitProps(mergeProps({ value: false, indeterminate: false }, propsRaw), customEventHandlersName)
}