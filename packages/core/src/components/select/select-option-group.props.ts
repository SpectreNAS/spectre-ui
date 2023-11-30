import { mergeProps, splitProps } from 'solid-js'

import { customEventHandlersName } from '../../events'
import { ComponentParentProps } from '../../types'

export interface SelectOptionGroupProps extends ComponentParentProps<HTMLInputElement> {
  disabled?: boolean
}

export function generateProps(propsRaw: SelectOptionGroupProps) {
  return splitProps(mergeProps({ disabled: false }, propsRaw), customEventHandlersName)
}