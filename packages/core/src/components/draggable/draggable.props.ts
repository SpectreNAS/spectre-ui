import { Point } from '@spectre-ui/utils'
import { mergeProps, splitProps } from 'solid-js'

import { customEventHandlersName } from '../../events'
import { ComponentParentProps, ValueChanged } from '../../types'

export type DraggableAxis = 'x' | 'y'
export interface DraggableProps extends ComponentParentProps<HTMLDivElement> {
  x?: number
  y?: number
  minX?: number
  minY?: number
  maxX?: number
  maxY?: number
  axis?: DraggableAxis
  change?: ValueChanged<Point>
  drag?: (value: Point) => Partial<Point>

}

export function generateProps(propsRaw: DraggableProps) {
  return splitProps(mergeProps({ x: 0, y: 0 }, propsRaw), customEventHandlersName)
}