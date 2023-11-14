import { mergeProps, splitProps } from 'solid-js'
import { ComponentSize, ComponentColor, ComponentParentProps, ValueChanged } from '../../types'
import { customEventHandlersName } from '../../events'
import { Point } from '@spectre-ui/utils'
export interface ScrollAreaProps extends ComponentParentProps<HTMLDivElement> {
  color?: ComponentColor
  size?: ComponentSize
  scrollX?: number
  scrollY?: number
  scroll?: ValueChanged<Point>
}

export function generateProps(propsRaw: ScrollAreaProps) {
  return splitProps(
    mergeProps(
      { 
        scrollX: 0,
        scrollY: 0,
      }, 
      propsRaw,
    ), 
    customEventHandlersName
  )
}