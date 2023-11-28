import { mergeProps, splitProps } from 'solid-js'
import { ScrollBarProps } from './scrollbar.props'
import { customEventHandlersName } from '../../events'

export interface VerticalScrollbarProps extends ScrollBarProps {
  x?: number
  height: number
  sliderY: number
  sliderHeight: number
}

export function generateProps(propsRaw: VerticalScrollbarProps) {
  return splitProps(mergeProps({ x: 0 }, propsRaw), customEventHandlersName)
}