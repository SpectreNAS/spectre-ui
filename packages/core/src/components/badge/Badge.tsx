import { BadgeProps, generateProps } from './badge.props'
import { mergeClasses } from '../../utils'

export const Badge = (propsRaw: BadgeProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)
  const badgeClasses = () => mergeClasses([
    'sp-badge',
    props.class ?? ''
  ])

  return (
    <div
      class={badgeClasses()}
      classList={props.classList}
      style={props.style}
      ref={props.ref}
      {...eventHandlers}
    >
      <div></div>
      {props.children}
    </div>
  )
}