import { Show, createEffect, createSignal } from 'solid-js'
import { ListGroupProps, generateProps } from './list-group.props'
import { mergeClasses } from '../../utils'
import { ListItem } from './ListItem'
import { TriangleDownFilled } from '../icon/TriangleDownFilled'
import { TriangleRightFilled } from '../icon/TriangleRightFilled'

export const ListGroup = (propsRaw: ListGroupProps) => {

  const [eventHandlers, props] = generateProps(propsRaw)

  const [expand, setExpand] = createSignal(false)

  const ExpandIcon = () => expand() ? <TriangleDownFilled /> : <TriangleRightFilled />

  const listGroupClasses = () => mergeClasses([
    'sp-list-group',
    props.class ?? ''
  ])

  function onExpand() {
    setExpand(value => !value)
  }

  return (
    <div class={listGroupClasses()}>
      <ListItem onClick={onExpand}>
        <div>
          <div class='sp-list-item-icon'><ExpandIcon /></div>
        </div>
        {props.title}
      </ListItem>
      <Show when={expand()}>
        <div>{props.children}</div>
      </Show>
    </div>
  )
}