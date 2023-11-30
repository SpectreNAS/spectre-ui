import dayjs from 'dayjs'
import { mergeProps, splitProps } from 'solid-js'

import { TimePickerPanelProps } from './time-picker-panel.props'
import { customEventHandlersName } from '../../events'

export interface TimePickerProps extends TimePickerPanelProps {
  disabled?: boolean
}

export function generateProps(propsRaw: TimePickerPanelProps) {
  return splitProps(mergeProps({
    value: dayjs(), 
    hours: true,
    minutes: true,
    seconds: true,
    disabled: false,
  }, propsRaw), customEventHandlersName)
}