import { createEffect, createSignal, onMount, on } from 'solid-js'
import { mergeClasses } from '../../utils'
import { VirtualScrollAreaProps, generateProps } from './virtual-scroll-area.props'
import { SpDraggable } from '../draggable'
import { Point, Scrollbar } from '@spectre-ui/utils'

export const VirtualScrollArea = (propsRaw: VirtualScrollAreaProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const virtualScrollAreaClasses = () => mergeClasses([
    'sp-virtual-scroll-area',
    props.class ?? ''
  ])

  return (
    <div
      class={virtualScrollAreaClasses()}
      classList={props.classList}
      style={props.style}
      ref={props.ref}
      {...eventHandlers}
    >
    </div>
  )
}