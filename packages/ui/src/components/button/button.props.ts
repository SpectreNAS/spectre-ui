import { mergeProps, splitProps } from 'solid-js'

import { customEventHandlersName } from '../../events'
import { ComponentSize, ComponentColor, ComponentParentProps } from '../../types'

export type ButtonType = 'light' | 'text'

export interface ButtonProps extends ComponentParentProps<HTMLButtonElement> {
  type?: ButtonType
  color?: ComponentColor
  size?: ComponentSize
  round?: boolean
}

export function generateProps(propsRaw: ButtonProps) {
  return splitProps(mergeProps({ round: false }, propsRaw), customEventHandlersName)
}