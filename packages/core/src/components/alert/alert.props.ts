import { JSX, mergeProps, splitProps } from 'solid-js'
import { ComponentColor, ComponentProps, VoidCallback } from '../../types'
import { customEventHandlersName } from '../../events'

export interface AlertProps extends ComponentProps<HTMLDivElement> {
  
  //标题
  title?: string | JSX.Element
  
  //描述
  description?: string | JSX.Element
  
  //颜色
  color?: ComponentColor
  
  //是否居中
  center?: boolean
  
  light?: boolean
  
  //是否显示图标，可自定义
  icon?: boolean | JSX.Element
  
  //是否显示关闭按钮，可自定义
  closable?: boolean | JSX.Element

  //关闭按钮回调事件
  close?: VoidCallback
}

export function generateProps(propsRaw: AlertProps) {
  return splitProps(
    mergeProps(
      {
        title: '',
        description: '',
        color: 'primary',
        center: false,
        light: false,
        icon: false,
        closable: false
      },
      propsRaw
    ),
    customEventHandlersName
  )
}