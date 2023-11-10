import { mergeProps, splitProps, JSX } from 'solid-js'
import { ComponentColor, ComponentParentProps } from '../../types'
import { customEventHandlersName } from '../../events'

export interface BadgeProps extends ComponentParentProps<HTMLDivElement> {
  value?: string | number | JSX.Element
  color?: ComponentColor
  light?: boolean
  max?: number
  hidden?: boolean
  dot?: boolean
}

export function generateProps(propsRaw: BadgeProps) {
  return splitProps(mergeProps({ max: 99, hidden: false, dot: false }, propsRaw), customEventHandlersName)
}