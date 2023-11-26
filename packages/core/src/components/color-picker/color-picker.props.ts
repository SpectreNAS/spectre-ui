import { mergeProps, splitProps } from 'solid-js'
import { ComponentProps, ValueChanged } from '../../types'
import { customEventHandlersName } from '../../events'
import Color from 'color'

export interface ColorPickerProps extends ComponentProps<HTMLDivElement> {
  value: Color
  change?: ValueChanged<Color>
}

export function generateProps(propsRaw: ColorPickerProps) {
  return splitProps(mergeProps({
    value: Color('#fff'), 
  }, propsRaw), customEventHandlersName)
}