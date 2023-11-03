import { ComponentSize } from '../../types'

export type ButtonType = 'default' | 'light' | 'text'

export type ButtonColor = 'default' | 'primary' | 'success' | 'warn' | 'danger'

export interface ButtonProps {
  type?: ButtonType
  color?: ButtonColor
  size?: ComponentSize
  round?: boolean
}