import { Show, createSignal, createContext, useContext, createEffect, onCleanup, on } from 'solid-js'
import { ListGroupProps, ListGroupProviderValue, generateProps } from './list-group.props'
import { mergeClasses } from '../../utils'
import { useListContext } from './List'
import { TriangleDownFilled } from '../icon/TriangleDownFilled'
import { TriangleRightFilled } from '../icon/TriangleRightFilled'

const ListGroupContext = createContext<ListGroupProviderValue>()

export const useListGroupContext = () => useContext(ListGroupContext)

export const ListGroup = (propsRaw: ListGroupProps) => {

  const [eventHandlers, props] = generateProps(propsRaw)

  const listContext = useListContext()
  if (!listContext) {
    throw Error('listContext is undefined')
  }

  const parentGroupContext = useListGroupContext()

  const [expand, setExpand] = createSignal(false)
  const [level, setLevel] = createSignal(0)

  let itemKey = listContext.addItem({ expand, setExpand }, props.value)

  const listGroupClasses = () => mergeClasses([
    'sp-list-group',
    props.class ?? ''
  ])

  const Indent = () => <div style={`width:${listContext.indent() * level()}px`}></div>
  const ExpandIcon = () => expand() ? <TriangleDownFilled /> : <TriangleRightFilled />

  createEffect(on(() => props.value, () => {
    if (props.value !== itemKey) {
      listContext.removeItem(itemKey)
      itemKey = listContext.addItem({ expand, setExpand }, props.value)
    }
  }, { defer: true }))

  createEffect(() => {
    const parentLevel = parentGroupContext?.level()
    if (parentLevel !== undefined) {
      setLevel(parentLevel + 1)
    }
  })

  createEffect(() => {
    const expands = listContext.expands()
    if (expands === 'all') {
      setExpand(true)
    } else if (expands && expands.includes(itemKey)) {
      setExpand(true)
    }
  })

  onCleanup(() => {
    listContext.removeItem(itemKey)
  })

  function onExpand() {
    setExpand(value => !value)
  }

  return (
    <ListGroupContext.Provider value={{
      level
    }}>
      <div
        class={listGroupClasses()}
        classList={props.classList}
        style={props.style}
        ref={props.ref}
        {...eventHandlers}
      >
        <div class='sp-list-group-item' onClick={onExpand}>
          {Indent()}
          <div class='sp-list-group-expand'>
            <div class='sp-list-group-icon'>{ExpandIcon()}</div>
          </div>
          {props.title}
        </div>
        <Show when={expand()}>
          <div>{props.children}</div>
        </Show>
      </div>
    </ListGroupContext.Provider>
  )
}