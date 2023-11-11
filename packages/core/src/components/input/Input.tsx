
import { Show, createSignal } from 'solid-js'
import { mergeClasses } from '../../utils'
import { InputProps, generateProps } from './input.props'

export const Input = (propsRaw: InputProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const [focus, setFocus] = createSignal(false)
  const [inputValue, setInputValue] = createSignal('')

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

  function onInput(event: InputEvent) {
    const target = event.target as HTMLInputElement
    if (props.maxLength !== undefined && target.value.length > props.maxLength) {
      target.value = inputValue()
    }
    setInputValue(target.value)
  }

  return (
    <div class={inputClasses()}>
      <div class='sp-input-wrapper'>
        <Show when={props.prefix}>
          <div class='sp-input-prefix'>
            {props.prefix}
          </div>
        </Show>
        <input
          class='sp-input-inner'
          value={inputValue()}
          onFocusIn={onFocusIn}
          onFocusOut={onFocusOut}
          onInput={onInput}
        />
        <Show when={props.suffix}>
          <div class='sp-input-suffix'>
            {props.suffix}
          </div>
        </Show>
      </div>
    </div>
  )
}