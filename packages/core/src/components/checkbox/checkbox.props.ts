import { ComponentSize, ValueChanged, ComponentParentProps } from '../../types'

export interface CheckboxProps extends ComponentParentProps<HTMLSpanElement> {
  value?: boolean
  indeterminate?: boolean
  size?: ComponentSize
  change?: ValueChanged<boolean>
}