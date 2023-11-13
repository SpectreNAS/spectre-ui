import { mergeProps, splitProps } from 'solid-js'
import { ComponentSize, ComponentColor, ComponentProps } from '../../types'
import { customEventHandlersName } from '../../events'

export interface ProgressProps extends ComponentProps<HTMLDivElement> {
  percentage?: number
  color?: ComponentColor
  size?: ComponentSize
}

export function generateProps(propsRaw: ProgressProps) {
  return splitProps(mergeProps({ percentage: 0 }, propsRaw), customEventHandlersName)
}