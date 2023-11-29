import { mergeProps, splitProps } from 'solid-js'
import { ComponentParentProps } from '../../types'
import { customEventHandlersName } from '../../events'

export interface SliderAreaProps extends ComponentParentProps<HTMLDivElement> {
  width: number
  height: number
}

export function generateProps(propsRaw: SliderAreaProps) {
  return splitProps(mergeProps({}, propsRaw), customEventHandlersName)
}