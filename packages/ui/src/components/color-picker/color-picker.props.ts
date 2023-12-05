import Color from 'color'
import { mergeProps, splitProps } from 'solid-js'

import { ColorPickerPanelProps } from './color-picker-panel.props'
import { customEventHandlersName } from '../../events'
import { ComponentProps } from '../../types'

export interface ColorPickerProps extends ComponentProps<HTMLDivElement>, ColorPickerPanelProps {
}

export function generateProps(propsRaw: ColorPickerProps) {
  return splitProps(mergeProps({
    value: Color('#FFFFFFFF'), 
  }, propsRaw), customEventHandlersName)
}