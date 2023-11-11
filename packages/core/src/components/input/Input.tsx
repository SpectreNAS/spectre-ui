
import { Show, createEffect, createSignal } from 'solid-js'
import { mergeClasses } from '../../utils'
import { InputProps, generateProps } from './input.props'
import { SpIconButton } from '../button'
import { CloseCircleOutlined } from '../icon/close-circle-outlined'

export const Input = (propsRaw: InputProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const [focus, setFocus] = createSignal(false)
  const [hover, setHover] = createSignal(false)
  const [inputValue, setInputValue] = createSignal('')

  const inputClasses = () => mergeClasses([
    'sp-input',
    props.class ?? '',
    props.size ?? '',
    focus() ? 'focus' : '',
  ])
  const showClearable = () => inputValue() && (hover() || focus())

  createEffect(() => {
    setInputValue(props.value)
  })

  function onFocusIn() {
    setFocus(true)
  }

  function onFocusOut() {
    setFocus(false)
  }

  function onEnter() {
    setHover(true)
  }

  function onOut() {
    setHover(false)
  }

  function onInput(event: InputEvent) {
    const target = event.target as HTMLInputElement
    if (props.maxLength !== undefined && target.value.length > props.maxLength) {
      target.value = inputValue()
    }
    setInputValue(target.value)
  }

  function onClear() {
    setInputValue('')
  }

  return (
    <div
      class={inputClasses()}
      onMouseEnter={onEnter}
      onMouseOut={onOut}
    >
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
        <Show when={showClearable()}>
          <SpIconButton type='text' size='small' onClick={onClear}>
            <CloseCircleOutlined />
          </SpIconButton>
        </Show>
      </div>
    </div>
  )
}