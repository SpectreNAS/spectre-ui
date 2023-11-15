import { ComponentSize, ComponentColor, ComponentParentProps, ValueChanged } from '../../types'
import { Point } from '@spectre-ui/utils'

export interface ScrollBarProps extends ComponentParentProps<HTMLDivElement> {
  size?: ComponentSize
  color?: ComponentColor
  change?: ValueChanged<Point>
}

