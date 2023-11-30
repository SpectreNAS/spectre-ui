import { mergeProps, splitProps } from 'solid-js'
import { ComponentProps, ValueChanged } from '../../types'
import { customEventHandlersName } from '../../events'
import Color from 'color'

export interface ColorPickerPresetProps extends ComponentProps<HTMLDivElement> {
  value: Color
  change?: ValueChanged<Color>
}

export function generateProps(propsRaw: ColorPickerPresetProps) {
  return splitProps(mergeProps({
    value: Color('#fff'), 
  }, propsRaw), customEventHandlersName)
}