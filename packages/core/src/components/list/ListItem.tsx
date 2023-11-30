import { createEffect, createSignal, onCleanup, on } from 'solid-js'

import { useListContext } from './List'
import { ListItemProps, generateProps } from './list-item.props'
import { useListGroupContext } from './ListGroup'
import { mergeClasses } from '../../utils'

export const ListItem = (propsRaw: ListItemProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const listContext = useListContext()
  if (!listContext) {
    throw Error('listContext is undefined')
  }
  const parentGroupContext = useListGroupContext()

  const [active, setActive] = createSignal(false)
  const [level, setLevel] = createSignal(0)
  const [itemKey, setItemKey] = createSignal(listContext.addItem({ active, setActive, parentKey: parentGroupContext?.parentKey }, props.value))

  const listItemClasses = () => mergeClasses([
    'sp-list-item',
    props.class ?? '',
    active() ? 'active' : '',
  ])

  const Indent = () => <div style={`width:${listContext.indent() * level()}px`}></div>

  createEffect(on(() => props.value, () => {
    const key = itemKey()
    if (props.value !== key) {
      listContext.removeItem(key)
      setItemKey(listContext.addItem({ active, setActive, parentKey: parentGroupContext?.parentKey }, props.value))
    }
  }, { defer: true }))

  createEffect(() => {
    const parentLevel = parentGroupContext?.level()
    if (parentLevel !== undefined) {
      setLevel(parentLevel + 1)
    }
  })

  createEffect(() => {
    const defaultActiveItem = listContext.defaultActiveItem()
    const key = itemKey()
    if (defaultActiveItem === key) {
      listContext.activeItem(key)
    }
  })

  onCleanup(() => {
    listContext.removeItem(itemKey())
  })

  function onActive() {
    const key = itemKey()
    listContext?.activeItem(key)
    listContext?.selectItem?.(key)
  }

  return (
    <div
      class={listItemClasses()}
      classList={props.classList}
      style={props.style}
      ref={props.ref}
      {...eventHandlers}
      onclick={onActive}
    >
      {Indent()}
      {props.children}
    </div>
  )
}