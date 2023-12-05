import { ButtonProps, generateProps } from './button.props'
import { mergeClasses } from '../../utils'

export const Button = (propsRaw: ButtonProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const buttonClasses = () => mergeClasses([
    'sp-button',
    props.size ?? '',
    props.type ?? '',
    props.color ?? '',
    props.round ? 'round' : '',
    props.class ?? ''
  ])

  return (
    <button
      class={buttonClasses()}
      classList={props.classList}
      style={props.style}
      ref={props.ref}
      {...eventHandlers}
    >
      {props.children}
    </button>
  )
}
