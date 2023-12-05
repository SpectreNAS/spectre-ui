import { JSX, mergeProps, splitProps } from 'solid-js'

import { customEventHandlersName } from '../../events'
import { ComponentSize, ComponentColor, ComponentParentProps } from '../../types'
import { ButtonType } from '../button'

export interface PaginationProps extends ComponentParentProps<HTMLDivElement> {
  
  //大小
  size?: ComponentSize

  //按钮类型
  type?: ButtonType

  //颜色
  color?: ComponentColor

  //半圆按钮
  round?: boolean

  //当前分页
  currentPage?: number

  //每页大小
  pageSize?: number

  //分页总数
  total?: number

  //最多显示的页码，其他页码省略
  maxPager?: number

  //是否展示前一页按钮，可自定义前进按钮
  prev?: boolean | JSX.Element

  //否展示后一页按钮，可自定义前进按钮
  next?: boolean | JSX.Element

  //自定义快进按钮
  quickPrev?: JSX.Element

  //自定义快退按钮
  quickNext?: JSX.Element

  //禁止使用
  disabled?: boolean
  
  //只有一个分页是否隐藏
  hideOnSinglePage?: boolean

  //自定义页码
  page?: (value: number) => JSX.Element
}

export function generateProps(propsRaw: PaginationProps) {
  return splitProps(
    mergeProps(
      { 
        currentPage: 1,
        pageSize: 10,
        total: 0,
        maxPager: 7,
        prev: false,
        next: false,
        disabled: false,
        hideOnSinglePage: false, 
      },
      propsRaw
    ),
    customEventHandlersName
  )
}