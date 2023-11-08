import { mergeProps, splitProps } from 'solid-js'
import { ComponentSize, ComponentColor, ComponentParentProps } from '../../types'
import { customEventHandlersName } from '../../events'

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