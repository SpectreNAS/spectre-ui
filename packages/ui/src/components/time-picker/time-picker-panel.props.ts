import dayjs from 'dayjs'
import { mergeProps, splitProps } from 'solid-js'

import { customEventHandlersName } from '../../events'
import { ComponentProps, ValueChanged } from '../../types'

export interface TimePickerPanelProps extends ComponentProps<HTMLDivElement> {
  value?: dayjs.ConfigType
  hours?: boolean
  minutes?: boolean
  seconds?: boolean
  change?: ValueChanged<dayjs.Dayjs>
}

export function generateProps(propsRaw: TimePickerPanelProps) {
  return splitProps(mergeProps({
    value: dayjs(), 
    hours: true,
    minutes: true,
    seconds: true,
  }, propsRaw), customEventHandlersName)
}