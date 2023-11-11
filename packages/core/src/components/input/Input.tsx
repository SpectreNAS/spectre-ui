
import { createSignal } from 'solid-js'
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
        <div></div>
        <input class='sp-input-inner' onFocusIn={onFocusIn} onFocusOut={onFocusOut} />
        <div></div>
      </div>
    </div>
  )
}