import { ComponentSize, ComponentColor, ComponentParentProps } from '../../types'

export type TagType = 'light' | 'jelly' | 'fill' | 'bordered' | 'colorfulBordered'

export interface TagProps extends ComponentParentProps<HTMLSpanElement> {
  type?: TagType
  color?: ComponentColor
  size?: ComponentSize
  round?: boolean
  closable?: boolean
}