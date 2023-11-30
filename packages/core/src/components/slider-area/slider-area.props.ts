import { JSX, mergeProps, splitProps } from 'solid-js'
import { ComponentParentProps, ValueChanged } from '../../types'
import { customEventHandlersName } from '../../events'
import { Point } from '@spectre-ui/utils'
import { DraggableAxis } from '../draggable'

export interface SliderAreaProps extends ComponentParentProps<HTMLDivElement> {
  width: number
  height: number
  sliderX?: number
  sliderY?: number
  renderSlider?: JSX.Element
  axis?: DraggableAxis
  change?: ValueChanged<Point>
}

export function generateProps(propsRaw: SliderAreaProps) {
  return splitProps(mergeProps({ sliderX: 0, sliderY: 0 }, propsRaw), customEventHandlersName)
}