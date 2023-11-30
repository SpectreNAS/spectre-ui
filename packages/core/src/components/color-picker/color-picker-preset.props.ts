import { mergeProps, splitProps } from 'solid-js'
import { ComponentProps } from '../../types'
import { customEventHandlersName } from '../../events'
import Color from 'color'
import { ColorPickerPanelProps } from './color-picker-panel.props'

export interface ColorPickerPresetProps extends ComponentProps<HTMLDivElement>, ColorPickerPanelProps {
}

export function generateProps(propsRaw: ColorPickerPresetProps) {
  return splitProps(mergeProps({
    value: Color('#FFFFFFFF'), 
  }, propsRaw), customEventHandlersName)
}