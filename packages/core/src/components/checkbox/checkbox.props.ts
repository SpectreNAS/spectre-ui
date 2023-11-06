import { ComponentSize, ValueChanged } from '../../types'

export interface CheckboxProps {
  value?: boolean
  indeterminate?: boolean
  size?: ComponentSize
  change?: ValueChanged<boolean>
}