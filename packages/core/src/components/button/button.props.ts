import { ComponentSize } from '../../types'

export type ButtonType = 'light' | 'text'

export type ButtonColor = 'primary' | 'success' | 'warn' | 'danger'

export interface ButtonProps {
  type?: ButtonType
  color?: ButtonColor
  size?: ComponentSize
  round?: boolean
}