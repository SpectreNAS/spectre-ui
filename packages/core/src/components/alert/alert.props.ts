import { ComponentColor, ComponentParentProps } from '../../types'

export interface AlertProps extends ComponentParentProps<HTMLDivElement> {
  color?: ComponentColor
}