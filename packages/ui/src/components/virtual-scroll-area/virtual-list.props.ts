import { VirtualScrollItemRaw, VirtualScrollItem } from '@spectres/utils'
import { JSX, mergeProps, splitProps } from 'solid-js'

import { customEventHandlersName } from '../../events'
import { ComponentProps } from '../../types'

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