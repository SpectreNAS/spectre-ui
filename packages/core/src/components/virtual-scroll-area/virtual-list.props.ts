import { JSX, mergeProps, splitProps } from 'solid-js'
import { ComponentProps } from '../../types'
import { customEventHandlersName } from '../../events'
import { VirtualScrollItemRaw, VirtualScrollItem } from '@spectre-ui/utils'

export interface VirtualListProps extends ComponentProps<HTMLDivElement> {
  items?: VirtualScrollItemRaw[]
  children?: (item: VirtualScrollItem) => JSX.Element
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