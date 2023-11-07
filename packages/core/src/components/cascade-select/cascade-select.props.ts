import { ComponentSize, ValueChanged, ComponentProps } from '../../types'

export interface CascadeSelectPanel extends ComponentProps<HTMLDivElement> {
  value?: boolean
  indeterminate?: boolean
  size?: ComponentSize
  change?: ValueChanged<boolean>
}

