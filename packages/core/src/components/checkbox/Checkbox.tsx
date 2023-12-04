import { Show, createEffect, createSignal, createMemo } from 'solid-js'

import { CheckboxProps, generateProps } from './checkbox.props'
import { mergeClasses, eventHandlerCall } from '../../utils'
import { CheckFilled } from '../icon/check-filled'

export const Checkbox = (propsRaw: CheckboxProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const [checked, setChecked] = createSignal(props.value)

  const showChecked = createMemo(() => !props.indeterminate && checked())

  const checkboxClasses = () => mergeClasses([
    'sp-checkbox',
    showChecked() ? 'checked' : '',
    props.indeterminate ? 'indeterminate' : '',
    props.size ?? '',
    props.class ?? '',
  ])

  createEffect(() => {
    setChecked(props.value)
  })

  function onChecked(event: MouseEvent) {
    const checked = setChecked(value => !value)
    props.change?.(checked)
    eventHandlers.onClick && eventHandlerCall(eventHandlers.onClick, event)
  }

  return (
    <div
      class={checkboxClasses()}
      classList={props.classList}
      style={props.style}
      ref={props.ref}
      {...eventHandlers}
      onClick={onChecked}
    >
      <Show when={props.indeterminate}>
        <div class='sp-checkbox-indeterminate'></div>
      </Show>
      <Show when={showChecked()}>
        <CheckFilled class='sp-checkbox-checked'></CheckFilled>
      </Show>
    </div>
  )
}