import { JSX, splitProps, mergeProps } from 'solid-js'
import { ComponentProps, ComponentSize, ValueChanged } from '../../types'
import { customEventHandlersName } from '../../events'

export interface InputNumberProps extends ComponentProps<HTMLInputElement> {
  //输入值
  value?: number
  
  //占位符
  placeholder?: string
   
  //是否一键清空
  clearable?: boolean
   
  //大小
  size?: ComponentSize
 
  prefix?: JSX.Element
  suffix?: JSX.Element

  input?: (value: number, event: InputEvent) => void
  change?: ValueChanged<number>
}

export function generateProps(propsRaw: InputNumberProps) {
  return splitProps(
    mergeProps({ 
      placeholder: '',
      clearable: false,
    }, propsRaw), 
    customEventHandlersName,
  )
}
