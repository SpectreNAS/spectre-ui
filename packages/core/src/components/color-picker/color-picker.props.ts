import { mergeProps, splitProps } from 'solid-js'
import { ComponentProps } from '../../types'
import { customEventHandlersName } from '../../events'
import Color from 'color'
import { ColorPickerPanelProps } from './color-picker-panel.props'

export interface ColorPickerProps extends ComponentProps<HTMLDivElement>, ColorPickerPanelProps {
}

export function generateProps(propsRaw: ColorPickerProps) {
  return splitProps(mergeProps({
    value: Color('#FFFFFFFF'), 
  }, propsRaw), customEventHandlersName)
}