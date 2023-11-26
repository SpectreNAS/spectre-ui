import { Accessor, Setter, mergeProps, splitProps } from 'solid-js'
import { ComponentParentProps, ValueChanged } from '../../types'
import { customEventHandlersName } from '../../events'
import Color from 'color'

export interface ColorPickerPanelProps extends ComponentParentProps<HTMLDivElement> {
  value: Color
  change?: ValueChanged<Color>
}

export interface ColorPickerPanelProviderValue {
  color: Accessor<Color>
  setColor: Setter<Color>
}

export function generateProps(propsRaw: ColorPickerPanelProps) {
  return splitProps(mergeProps({
    value: Color('#fff'), 
  }, propsRaw), customEventHandlersName)
}