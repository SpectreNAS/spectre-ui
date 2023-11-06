import { ComponentSize, ComponentColor } from '../../types'

export type ButtonType = 'light' | 'text'

export interface ButtonProps {
  type?: ButtonType
  color?: ComponentColor
  size?: ComponentSize
  round?: boolean
}