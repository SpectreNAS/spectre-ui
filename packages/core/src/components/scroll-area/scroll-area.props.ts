import { mergeProps, splitProps } from 'solid-js'
import { ComponentSize, ComponentColor, ComponentParentProps } from '../../types'
import { customEventHandlersName } from '../../events'
export interface ScrollAreaProps extends ComponentParentProps<HTMLDivElement> {
  color?: ComponentColor
  size?: ComponentSize
  scrollX?: number
  scrollY?: number
}

export function generateProps(propsRaw: ScrollAreaProps) {
  return splitProps(
    mergeProps(
      { 
        scrollX: 0,
        scrollY: 0,
      }, 
      propsRaw,
    ), 
    customEventHandlersName
  )
}