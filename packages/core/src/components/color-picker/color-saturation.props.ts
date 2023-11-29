import { mergeProps, splitProps } from 'solid-js'
import { ComponentProps } from '../../types'
import { customEventHandlersName } from '../../events'

export interface ColorSaturationProps extends ComponentProps<HTMLDivElement> {
  width?: number
  height?: number
  sliderWidth?: number
  sliderHeight?: number
}

export function generateProps(propsRaw: ColorSaturationProps) {
  return splitProps(mergeProps({
    width: 280,
    height: 180,
    sliderWidth: 12,
    sliderHeight: 12,
  }, propsRaw), customEventHandlersName)
}