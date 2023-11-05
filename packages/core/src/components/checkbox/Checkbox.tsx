import { mergeProps } from 'solid-js'
import { CheckboxProps } from './checkbox.props'

export const Checkbox = (propsRaw: CheckboxProps) => {
  const props = mergeProps({ value: false, indeterminate: false }, propsRaw)

  return (
    <div class='sp-checkbox'></div>
  )
}