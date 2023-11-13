import { Show, createEffect, createSignal } from 'solid-js'
import { mergeClasses, getRangeValue } from '../../utils'
import { SpInput } from '../input'
import { SpIconButton } from '../button'
import { ChevronUpFilled } from '../icon/chevron-up-filled'
import { ChevronDownFilled } from '../icon/chevron-down-filled'
import { InputNumberProps, generateProps } from './input-number.props'

const INPUT_NUMBER_REGEX = /^[0-9+\-.]*$/

const NUMBER_REGEX = /^-?\d*\.?\d*$|^$/

export const InputNumber = (propsRaw: InputNumberProps) => {

  const [eventHandlers, props] = generateProps(propsRaw)

  const [inputValue, setInputValue] = createSignal('')

  const inputNumberClasses = () => mergeClasses([
    'sp-input-number',
    props.size ?? '',
    props.class ?? '',
  ])

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

  function onAdd() {
    let value = Number(inputValue())
    if (props.add) {
      value = props.add(value)
    } else {
      value = getRangeValue(value + props.step, props.min, props.max)
    }
    setInputValue(value.toString())
  }

  function onSubtract() {
    let value = Number(inputValue())
    if (props.subtract) {
      value = props.subtract(value)
    } else {
      value = getRangeValue(value - props.step, props.min, props.max)
    }
    setInputValue(value.toString())
  }

  function emitInput(value: string, event: InputEvent) {
    props.input?.(Number(getNumberString(value)), event)
  }

  function emitChange() {
    props.change?.(Number(inputValue()))
  }

  return (
    <div class={inputNumberClasses()}>
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
      <Show when={props.showStep}>
        <div class='sp-input-number-wrapper'>
          <SpIconButton class='sp-input-number-up' onClick={onAdd}>
            <ChevronUpFilled />
          </SpIconButton>
          <SpIconButton class='sp-input-number-down' onClick={onSubtract}>
            <ChevronDownFilled />
          </SpIconButton>
        </div>
      </Show>
    </div>
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