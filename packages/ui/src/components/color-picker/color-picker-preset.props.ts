import Color from 'color'
import { mergeProps, splitProps } from 'solid-js'

import { ColorPickerPanelProps } from './color-picker-panel.props'
import { customEventHandlersName } from '../../events'
import { ComponentProps } from '../../types'

export interface ColorPickerPresetProps extends ComponentProps<HTMLDivElement>, ColorPickerPanelProps {
}

export function generateProps(propsRaw: ColorPickerPresetProps) {
  return splitProps(mergeProps({
    value: Color('#FFFFFFFF'), 
  }, propsRaw), customEventHandlersName)
}