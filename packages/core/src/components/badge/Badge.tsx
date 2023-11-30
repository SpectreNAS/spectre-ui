import { Show } from 'solid-js'

import { BadgeProps, generateProps } from './badge.props'
import { mergeClasses } from '../../utils'

export const Badge = (propsRaw: BadgeProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)
  const badgeClasses = () => mergeClasses([
    'sp-badge',
    props.class ?? ''
  ])

  const contentClasses = () => mergeClasses([
    'sp-badge-content',
    props.light ? 'light' : '',
    props.color ?? '',
    props.dot ? 'dot' : ''
  ])

  const value = () => {
    if (typeof props.value === 'number') {
      return props.value > props.max ? `${props.max}+` : props.value
    }
    return props.value
  }

  return (
    <div
      class={badgeClasses()}
      classList={props.classList}
      style={props.style}
      ref={props.ref}
      {...eventHandlers}
    >
      {props.children}
      <Show when={!props.hidden}>
        <div class={contentClasses()}>
          <Show when={!props.dot}>{value()}</Show>
        </div>
      </Show>
    </div>
  )
}