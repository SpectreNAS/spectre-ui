
import { Show, createSignal } from 'solid-js'
import { mergeClasses } from '../../utils'
import { InputProps, generateProps } from './input.props'

export const Input = (propsRaw: InputProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const [focus, setFocus] = createSignal(false)

  const inputClasses = () => mergeClasses([
    'sp-input',
    props.class ?? '',
    props.size ?? '',
    focus() ? 'focus' : '',
  ])

  function onFocusIn() {
    setFocus(true)
  }

  function onFocusOut() {
    setFocus(false)
  }

  return (
    <div class={inputClasses()}>
      <div class='sp-input-wrapper'>
        <Show when={props.prefix}>
          <div class='sp-input-prefix'>
            {props.prefix}
          </div>
        </Show>
        <input class='sp-input-inner' onFocusIn={onFocusIn} onFocusOut={onFocusOut} />
        <Show when={props.suffix}>
          <div class='sp-input-suffix'>
            {props.suffix}
          </div>
        </Show>
      </div>
    </div>
  )
}