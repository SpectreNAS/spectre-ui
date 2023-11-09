import { mergeProps, splitProps, JSX } from 'solid-js'
import { ComponentColor, ComponentParentProps } from '../../types'
import { customEventHandlersName } from '../../events'

export type BadgePosition = 'LT' | 'LB' | 'RT' | 'RB'

export interface BadgeProps extends ComponentParentProps<HTMLDivElement> {
  value?: string | number | JSX.Element
  color?: ComponentColor
  max?: number
  hidden?: boolean
  dot?: boolean
  position?: BadgePosition
}

export function generateProps(propsRaw: BadgeProps) {
  return splitProps(mergeProps({ max: 99, hidden: false, dot: false, position: 'RT' }, propsRaw), customEventHandlersName)
}