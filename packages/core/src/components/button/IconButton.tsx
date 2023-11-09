import { ButtonProps } from './button.props'
import { Button } from './Button'
import { mergeClasses } from '../../utils'

export const IconButton = (propsRaw: ButtonProps) => {
  const iconClasses = () => mergeClasses(['icon', propsRaw.class ?? ''])
  return <Button {...propsRaw} class={iconClasses()}></Button>
}
