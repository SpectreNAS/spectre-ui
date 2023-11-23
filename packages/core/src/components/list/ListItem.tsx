import { createEffect, createSignal } from 'solid-js'
import { ListItemProps, generateProps } from './list-item.props'
import { mergeClasses } from '../../utils'

export const ListItem = (propsRaw: ListItemProps) => {

  const [eventHandlers, props] = generateProps(propsRaw)

  const listItemClasses = () => mergeClasses([
    'sp-list-item',
    props.class ?? ''
  ])

  return (
    <div
      class={listItemClasses()}
      classList={props.classList}
      style={props.style}
      ref={props.ref}
      {...eventHandlers}
    >
      {props.children}
    </div>
  )
}