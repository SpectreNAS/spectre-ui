import { createContext, useContext, createSignal, createEffect } from 'solid-js'
import { ListProps, generateProps, ListProviderValue, ItemValue } from './list.props'
import { mergeClasses } from '../../utils'

const ListContext = createContext<ListProviderValue>()

export const useListContext = () => useContext(ListContext)

export const List = (propsRaw: ListProps) => {

  const [eventHandlers, props] = generateProps(propsRaw)
  const [indent, setIndent] = createSignal(props.indent)
  const [defaultActiveItem, setDefaultActiveItem] = createSignal(props.activeItem)
  const [expands, setExpands] = createSignal(props.expands)

  let count = 0
  const itemMap = new Map<string, ItemValue>()

  const listClasses = () => mergeClasses([
    'sp-list',
    props.class ?? ''
  ])

  createEffect(() => {
    setIndent(props.indent)
  })

  createEffect(() => {
    setDefaultActiveItem(props.activeItem)
  })

  createEffect(() => {
    setExpands(props.expands)
  })

  function addItem(value: ItemValue, key?: string): string {
    const itemKey = `${key ?? count++}`
    itemMap.set(itemKey, value)
    return itemKey
  }

  function removeItem(key: string) {
    itemMap.delete(key)
  }

  function activeItem(key: string) {
    for (const [itemKey, itemValue] of itemMap.entries()) {
      const isActive = itemValue.setActive?.(itemKey === key)
      if (isActive) {
        props.change?.(key)
      }
    }
  }

  return (
    <ListContext.Provider value={{
      indent,
      expands,
      defaultActiveItem,
      addItem,
      removeItem,
      activeItem,
    }}>
      <div
        class={listClasses()}
        classList={props.classList}
        style={props.style}
        ref={props.ref}
        {...eventHandlers}
      >
        {props.children}
      </div>
    </ListContext.Provider>
  )
}