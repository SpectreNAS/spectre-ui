import { mergeProps, Show } from 'solid-js'
import { TagProps } from './tag.props'
import { mergeClasses } from '../../utils'
import { CloseFilled } from '../icon/close-filled'

export const Tag = (propsRaw: TagProps) => {
  const props = mergeProps({ round: false }, propsRaw)

  const tagClasses = () => mergeClasses([
    'sp-tag',
    props.type ?? '',
    props.round ? 'round' : '',
    props.size ?? '',
    props.color ?? '',
    props.class ?? '',
  ])

  return (
    <span class={tagClasses()}>
      {props.children}
      <Show when={props.closable}>
        <div class='sp-tag-closable'>
          <CloseFilled></CloseFilled>
        </div>
      </Show>
    </span>
  )
}
