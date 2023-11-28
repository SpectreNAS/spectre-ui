import { mergeProps, splitProps } from 'solid-js'
import { ComponentParentProps, ValueChanged } from '../../types'
import { customEventHandlersName } from '../../events'
import { Point } from '@spectre-ui/utils'

export interface DraggableProps extends ComponentParentProps<HTMLDivElement> {
  x?: number
  y?: number
  minX?: number
  minY?: number
  maxX?: number
  maxY?: number
  only?: 'x' | 'y'
  change?: ValueChanged<Point>
  drag?: (value: Point) => Partial<Point>

}

export function generateProps(propsRaw: DraggableProps) {
  return splitProps(mergeProps({ x: 0, y: 0 }, propsRaw), customEventHandlersName)
}