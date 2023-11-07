import { ComponentColor, ComponentParentProps } from '../../types'

export interface AnchorProps extends ComponentParentProps<HTMLAnchorElement> {
  color?: ComponentColor
}