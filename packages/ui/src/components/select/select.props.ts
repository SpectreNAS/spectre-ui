import { mergeProps, splitProps } from 'solid-js'

import type { SelectOptionValue } from './select-option.props'
import { customEventHandlersName } from '../../events'
import { ComponentSize, ComponentParentProps } from '../../types'
export interface SelectProps extends ComponentParentProps<HTMLInputElement> {
  size?: ComponentSize
  value?: SelectOptionValue
  placeholder?: string
  disabled?: boolean
}

export function generateProps(propsRaw: SelectProps) {
  return splitProps(mergeProps({ disabled: false }, propsRaw), customEventHandlersName)
}