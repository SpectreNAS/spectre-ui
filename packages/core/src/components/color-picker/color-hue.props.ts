import { mergeProps, splitProps } from 'solid-js'
import { ComponentProps } from '../../types'
import { customEventHandlersName } from '../../events'

export interface ColorHueProps extends ComponentProps<HTMLDivElement> {
  vertical?: boolean
  width?: number
  sliderWidth?: number
  sliderHeight?: number
}

export function generateProps(propsRaw: ColorHueProps) {
  return splitProps(mergeProps({
    vertical: false,
    width: 280,
    sliderWidth: 4,
    sliderHeight: 12,
  }, propsRaw), customEventHandlersName)
}