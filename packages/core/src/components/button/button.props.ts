import { ComponentSize, ComponentColor, ComponentParentProps } from '../../types'

export type ButtonType = 'light' | 'text'

export interface ButtonProps extends ComponentParentProps<HTMLSpanElement> {
  type?: ButtonType
  color?: ComponentColor
  size?: ComponentSize
  round?: boolean
}