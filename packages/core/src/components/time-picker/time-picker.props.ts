import { mergeProps, splitProps } from 'solid-js'
import { customEventHandlersName } from '../../events'
import dayjs from 'dayjs'
import { TimePickerPanelProps } from './time-picker-panel.props'

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