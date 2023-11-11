import { JSX, splitProps, mergeProps } from 'solid-js'
import { ComponentProps, ComponentSize } from '../../types'
import { customEventHandlersName } from '../../events'

export interface InputProps extends ComponentProps<HTMLInputElement> {

  //输入值
  value?: string
  
  //占位符
  placeholder?: string
  
  //是否一键清空
  clearable?: boolean
  
  //大小
  size?: ComponentSize

  //输入长度限制
  maxLength?: number

  prepend?: JSX.Element
  append?: JSX.Element
  prefix?: JSX.Element
  suffix?: JSX.Element
}

export function generateProps(propsRaw: InputProps) {
  return splitProps(
    mergeProps({ 
      value: '',
      placeholder: '',
      clearable: false,
    }, propsRaw), 
    customEventHandlersName,
  )
}