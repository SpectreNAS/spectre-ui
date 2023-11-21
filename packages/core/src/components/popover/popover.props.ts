import { JSX, mergeProps, splitProps } from 'solid-js'
import { ComponentParentProps } from '../../types'
import { customEventHandlersName } from '../../events'

export type PopoverTrigger = 'click' | 'focus' | 'hover' | 'contextmenu'

export type PopoverPlacement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'

export interface PopoverProps extends ComponentParentProps<HTMLDivElement> {
  trigger?: PopoverTrigger
  placement?: PopoverPlacement
  showAfter?: number
  hideAfter?: number
  renderContent?: JSX.Element
}

export function generateProps(propsRaw: PopoverProps) {
  return splitProps(mergeProps({
    trigger: 'hover',
    placement: 'bottom',
    showAfter: 0, //TODO: 未实现
    hideAfter: 300,
  }, propsRaw), customEventHandlersName)
}