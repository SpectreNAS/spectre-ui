import { mergeProps, splitProps } from 'solid-js'
import { ComponentParentProps } from '../../types'
import { customEventHandlersName } from '../../events'

export type PopoverTrigger = 'click' | 'focus' | 'hover' | 'contextmenu'

export type PopoverPlacement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'

export interface PopoverProps extends ComponentParentProps<HTMLButtonElement> {
  trigger?: PopoverTrigger
  placement?: PopoverPlacement
  width?: number
}

export function generateProps(propsRaw: PopoverProps) {
  return splitProps(mergeProps({
    trigger: 'hover',
    placement: 'bottom',
    width: 150,
  }, propsRaw), customEventHandlersName)
}