import { Accessor, Setter, mergeProps, ParentProps } from 'solid-js'
import { ValueChanged } from '../../types'
import Color from 'color'

export interface ColorPickerPanelProps extends ParentProps {
  value?: Color
  change?: ValueChanged<Color>
}

export interface ColorPickerPanelProviderValue {
  color: Accessor<Color>
  setColor: Setter<Color>

  hue: Accessor<number>
  setHue: Setter<number>
}

export function generateProps(propsRaw: ColorPickerPanelProps) {
  return mergeProps({ value: Color('#FFFFFFFF') }, propsRaw)
}