import { mergeProps, splitProps } from 'solid-js'
import { ComponentProps } from '../../types'
import { customEventHandlersName } from '../../events'

export interface VirtualItem {
  key: string
  height: number
}

export interface VirtualListProps extends ComponentProps<HTMLDivElement> {
  items?: VirtualItem[]
}

export function generateProps(propsRaw: VirtualListProps) {
  return splitProps(
    mergeProps(
      { 
        items: [],
      }, 
      propsRaw,
    ), 
    customEventHandlersName
  )
}