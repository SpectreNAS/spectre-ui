import { ComponentColor, ComponentParentProps } from '../../types'

export interface BadgeProps extends ComponentParentProps<HTMLAnchorElement> {
  color?: ComponentColor
}