import { mergeProps, splitProps } from 'solid-js'

import { customEventHandlersName } from '../../events'
import { ComponentParentProps } from '../../types'

export type SelectOptionValue = string | number | boolean | object

export interface SelectOptionProps extends ComponentParentProps<HTMLInputElement> {
  value?: SelectOptionValue
  disabled?: boolean
}

export function generateProps(propsRaw: SelectOptionProps) {
  return splitProps(mergeProps({ disabled: false }, propsRaw), customEventHandlersName)
}