import { mergeProps } from 'solid-js'
import { ButtonProps } from './button.props'

export const Button = (propsRaw: ButtonProps) => {

  const props = mergeProps({ size: 'default' }, propsRaw)

  return <button></button>
}