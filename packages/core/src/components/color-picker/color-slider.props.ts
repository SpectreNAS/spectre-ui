import { mergeProps, splitProps } from 'solid-js'
import { ComponentProps } from '../../types'
import { customEventHandlersName } from '../../events'

export interface ColorSliderProps extends ComponentProps<HTMLDivElement> {
  width?: number
  height?: number
  sliderWidth?: number
}

export function generateProps(propsRaw: ColorSliderProps) {
  return splitProps(mergeProps({
    width: 240,
    height: 240,
    sliderWidth: 12,
  }, propsRaw), customEventHandlersName)
}