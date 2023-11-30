import { Point } from '@spectre-ui/utils'

import { ComponentSize, ComponentColor, ComponentParentProps, ValueChanged } from '../../types'

export interface ScrollBarProps extends ComponentParentProps<HTMLDivElement> {
  size?: ComponentSize
  color?: ComponentColor
  change?: ValueChanged<Point>
}

