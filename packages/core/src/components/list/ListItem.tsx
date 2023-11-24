import { ListItemProps, generateProps } from './list-item.props'
import { mergeClasses } from '../../utils'
import { useListContext } from './List'
import { createEffect, createSignal, onCleanup, on } from 'solid-js'
import { useListGroupContext } from './ListGroup'

export const ListItem = (propsRaw: ListItemProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const listContext = useListContext()
  if (!listContext) {
    throw Error('listContext is undefined')
  }
  const parentGroupContext = useListGroupContext()

  const [active, setActive] = createSignal(false)
  const [level, setLevel] = createSignal(0)

  let itemKey = listContext.addItem({ active, setActive }, props.value)

  const listItemClasses = () => mergeClasses([
    'sp-list-item',
    props.class ?? '',
    active() ? 'active' : '',
  ])

  const Indent = () => <div style={`width:${listContext.indent() * level()}px`}></div>

  createEffect(on(() => props.value, () => {
    if (props.value !== itemKey) {
      listContext.removeItem(itemKey)
      itemKey = listContext.addItem({ active, setActive }, props.value)
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
    if (defaultActiveItem === itemKey) {
      listContext.activeItem(itemKey)
    }
  })

  onCleanup(() => {
    listContext.removeItem(itemKey)
  })

  function onActive() {
    listContext?.activeItem(itemKey)
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