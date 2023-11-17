import { Show, createEffect, createSignal, mergeProps, createMemo } from 'solid-js'
import { CheckboxProps } from './checkbox.props'
import { mergeClasses } from '../../utils'
import { CheckFilled } from '../icon/check-filled'

export const Checkbox = (propsRaw: CheckboxProps) => {
  const props = mergeProps({ value: false, indeterminate: false }, propsRaw)

  const [checked, setChecked] = createSignal(props.value)

  const showChecked = createMemo(() => !props.indeterminate && checked())

  const checkboxClasses = () => mergeClasses([
    'sp-checkbox',
    showChecked() ? 'checked' : '',
    props.size ?? '',
    props.class ?? '',
  ])

  createEffect(() => {
    setChecked(props.value)
  })

  function onChecked() {
    const checked = setChecked(value => !value)
    props.change?.(checked)
  }

  return (
    <div class={checkboxClasses()} onClick={onChecked}>
      <Show when={props.indeterminate}>
        <div class='sp-checkbox-indeterminate'></div>
      </Show>
      <Show when={showChecked()}>
        <CheckFilled class='sp-checkbox-checked'></CheckFilled>
      </Show>
    </div>
  )
}