import { Point, VirtualScroll, VirtualScrollItem } from '@spectre-ui/utils'
import { For, createEffect, createSignal, on } from 'solid-js'

import { VirtualListProps, generateProps } from './virtual-list.props'
import { useVirtualScrollContext } from './VirtualScrollArea'
import { mergeClasses, mergeStyles } from '../../utils'

export const VirtualList = (propsRaw: VirtualListProps) => {
  const virtualScrollContext = useVirtualScrollContext()
  if (!virtualScrollContext) {
    throw Error('virtualScrollContext is undefined')
  }
  const [eventHandlers, props] = generateProps(propsRaw)
  const virtualScroll = new VirtualScroll({ items: props.items, viewHeight: 0, buffer: 10 })
  const [translateY, setTranslateY] = createSignal(0)
  const [virtualItems, setVirtualItems] = createSignal<VirtualScrollItem[]>([])

  const virtualListClasses = () => mergeClasses([
    'sp-virtual-list',
    props.class ?? ''
  ])

  const virtualListStyles = () => `transform: translateY(${translateY()}px);`

  virtualScrollContext.setContentHeight(virtualScroll.totalHeight)
  virtualScrollContext.addListener(scroll)

  createEffect(on(virtualScrollContext.viewHeight, () => {
    virtualScroll.setViewHeight(virtualScrollContext.viewHeight())
    resetVirtualItems()
  }))

  function scroll(point: Point) {
    virtualScroll.setScrollTop(point.y)
    resetVirtualItems(point.y)
  }

  function resetVirtualItems(y = 0) {
    const source = virtualItems()
    const target = virtualScroll.virtualItems
    if (isVirtualItemsDiff(source, target)) {
      setVirtualItems(target)
    }
    if (target.length > 0) {
      setTranslateY(0 - (y - target[0].y))
    }
  }

  return (
    <div
      class={virtualListClasses()}
      classList={props.classList}
      style={mergeStyles([props.style, virtualListStyles()])}
      {...eventHandlers}
    >
      <For each={virtualItems()}>
        {
          (item) => <div style={`height:${item.height}px`}>{props.children?.(item)}</div>
        }
      </For>
    </div>
  )
}

/**
 * 判断两个VirtualScrollItems是否一样
 * @param source 
 * @param target 
 * @returns 
 */
function isVirtualItemsDiff(source: VirtualScrollItem[], target: VirtualScrollItem[]): boolean {
  if (source.length === 0 && target.length === 0) {
    return false
  }
  if (source.length !== target.length) {
    return true
  }
  if (
    source[0].index === target[0].index
    &&
    source[source.length - 1].index === source[source.length - 1].index
  ) {
    return false
  }
  return true
}
