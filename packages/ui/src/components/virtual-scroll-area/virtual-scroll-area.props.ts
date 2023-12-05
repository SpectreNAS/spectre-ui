import { Point } from '@spectres/utils'
import { mergeProps, splitProps, Accessor } from 'solid-js'

import { customEventHandlersName } from '../../events'
import { ComponentSize, ComponentColor, ComponentParentProps, ValueChanged } from '../../types'

export interface VirtualScrollAreaProps extends ComponentParentProps<HTMLDivElement> {
  color?: ComponentColor
  size?: ComponentSize
  scrollX?: number
  scrollY?: number
  scroll?: ValueChanged<Point>
}

export interface VirtualScrollAreaProviderValue {
  setContentHeight: (value: number) => void
  viewHeight: Accessor<number>
  addListener: ValueChanged<ValueChanged<Point>>
}

export function generateProps(propsRaw: VirtualScrollAreaProps) {
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