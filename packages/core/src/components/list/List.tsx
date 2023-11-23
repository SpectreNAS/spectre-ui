import { createEffect, createSignal } from 'solid-js'
import { ListProps, generateProps } from './list.props'
import { mergeClasses } from '../../utils'

export const List = (propsRaw: ListProps) => {

  const [eventHandlers, props] = generateProps(propsRaw)

  const listClasses = () => mergeClasses([
    'sp-list',
    props.class ?? ''
  ])

  return (
    <div class={listClasses()}>
      {props.children}
    </div>
  )
}