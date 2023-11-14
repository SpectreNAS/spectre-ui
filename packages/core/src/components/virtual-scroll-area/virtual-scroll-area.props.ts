import { JSX, mergeProps, splitProps } from 'solid-js'
import { ComponentSize, ComponentColor, ComponentProps, ValueChanged } from '../../types'
import { customEventHandlersName } from '../../events'
import { Point } from '@spectre-ui/utils'

export interface VirtualScrollItem {
  key: string
  height: number
}
export interface VirtualScrollAreaProps extends ComponentProps<HTMLDivElement> {
  color?: ComponentColor
  size?: ComponentSize
  scrollX?: number
  scrollY?: number
  items?: VirtualScrollItem[]
  renderItem?: (item: VirtualScrollItem, index: number) => JSX.Element
  scroll?: ValueChanged<Point>
}

export function generateProps(propsRaw: VirtualScrollAreaProps) {
  return splitProps(
    mergeProps(
      { 
        scrollX: 0,
        scrollY: 0,
        items: [],
      }, 
      propsRaw,
    ), 
    customEventHandlersName
  )
}