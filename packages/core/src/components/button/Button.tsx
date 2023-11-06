import { mergeProps } from 'solid-js'
import { ButtonProps } from './button.props'
import { mergeClasses } from '../../utils'

export const Button = (propsRaw: ButtonProps) => {
  const props = mergeProps({ round: false }, propsRaw)

  const buttonClasses = () => mergeClasses([
    'sp-button',
    props.size ?? '',
    props.type ?? '',
    props.color ?? '',
    props.round ? 'round' : ''
  ])

  return <button class={buttonClasses()}>Button</button>
}
