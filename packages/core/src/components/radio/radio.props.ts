import { ComponentSize, ValueChanged, ComponentParentProps, ComponentProps } from '../../types'

export interface RadioGroupProps extends ComponentParentProps<HTMLInputElement> {
  value: string
  change?: ValueChanged<string>
}

export interface RadioProps extends ComponentProps<HTMLInputElement> {
  value?: string
  size?: ComponentSize
}
