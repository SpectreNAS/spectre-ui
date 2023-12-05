
import { Show, createEffect, createSignal } from 'solid-js'

import { InputProps, generateProps } from './input.props'
import { mergeClasses } from '../../utils'
import { SpIconButton } from '../button'
import { CloseCircleOutlined } from '../icon/close-circle-outlined'

export const Input = (propsRaw: InputProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  let inputRef: HTMLInputElement
  const [focus, setFocus] = createSignal(false)
  const [hover, setHover] = createSignal(false)
  const [inputValue, setInputValue] = createSignal('')

  const inputClasses = () => mergeClasses([
    'sp-input',
    props.class ?? '',
    props.size ?? '',
    focus() ? 'focus' : '',
  ])
  const showClearable = () => props.clearable && inputValue() && (hover() || focus())

  createEffect(() => {
    setInputValue(props.value)
  })

  function setInputRef(el: HTMLInputElement) {
    inputRef = el
    props.ref = el
  }

  function onFocusIn() {
    setFocus(true)
  }

  function onFocusOut() {
    setFocus(false)
  }

  function onEnter() {
    setHover(true)
  }

  function onLeave() {
    setHover(false)
  }

  function onClick() {
    inputRef.focus()
    setFocus(true)
  }

  function onInput(event: InputEvent) {
    const target = event.target as HTMLInputElement
    if (props.maxLength !== undefined && target.value.length > props.maxLength) {
      target.value = inputValue()
    }
    setInputValue(target.value)
    props.input?.(target.value, event)
  }

  function onClear() {
    setInputValue('')
  }

  return (
    <div
      class={inputClasses()}
      classList={props.classList}
      style={props.style}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <div class='sp-input-wrapper'>
        <Show when={props.prefix}>
          <div class='sp-input-prefix'>
            {props.prefix}
          </div>
        </Show>
        <input
          class='sp-input-inner'
          ref={setInputRef}
          value={inputValue()}
          {...eventHandlers}
          onFocusIn={onFocusIn}
          onFocusOut={onFocusOut}
          onInput={onInput}
        />
        <Show when={props.suffix}>
          <div class='sp-input-suffix'>
            {props.suffix}
          </div>
        </Show>
        <Show when={showClearable()}>
          <SpIconButton class='sp-input-clear' type='text' onClick={onClear}>
            <CloseCircleOutlined />
          </SpIconButton>
        </Show>
      </div>
    </div>
  )
}