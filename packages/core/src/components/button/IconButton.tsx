import { ButtonProps } from './button.props'
import { Button } from './Button'

export const IconButton = (propsRaw: ButtonProps) => {
  return <Button {...propsRaw} class='icon'></Button>
}
