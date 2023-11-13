import { createEffect, createSignal } from 'solid-js'
import { SpInput } from '../input'
import { InputNumberProps, generateProps } from './input-number.props'

const INPUT_NUMBER_REGEX = /^[0-9+\-.]*$/

const NUMBER_REGEX = /^-?\d+(\.\d+)?$/

export const InputNumber = (propsRaw: InputNumberProps) => {

  const [eventHandlers, props] = generateProps(propsRaw)

  const [inputValue, setInputValue] = createSignal('')

  createEffect(() => {
    setInputValue(props.value?.toString() ?? '')
  })

  function onInput(value: string, event: InputEvent) {
    const target = event.target as HTMLInputElement
    if (!checkInputNumber(value)) {
      target.value = inputValue()
      return
    }
    setInputValue(value)
    emitInput(value, event)
    emitChange()
  }

  function onBlur(event: FocusEvent) {
    const target = event.target as HTMLInputElement
    const value = getNumberString(target.value)
    target.value = value
    setInputValue(target.value)
    emitChange()
  }

  function emitInput(value: string, event: InputEvent) {
    props.input?.(Number(getNumberString(value)), event)
  }

  function emitChange() {
    props.change?.(Number(inputValue()))
  }

  return (
    <SpInput
      value={inputValue()}
      placeholder={props.placeholder}
      clearable={props.clearable}
      size={props.size}
      prefix={props.prefix}
      suffix={props.suffix}
      {...eventHandlers}
      input={onInput}
      onBlur={onBlur}
    />
  )
}

/**
 * 检查输入数字
 * 
 * @param value 
 * @returns 
 */
function checkInputNumber(value: string): boolean {
  return INPUT_NUMBER_REGEX.test(value)
}

/**
 * 获取一个有效的数字字符串
 * @param value 
 * @returns 
 */
function getNumberString(value: string): string {
  if (!NUMBER_REGEX.test(value)) {
    return '0'
  }
  return value
}