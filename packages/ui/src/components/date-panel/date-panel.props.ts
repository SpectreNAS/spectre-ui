import dayjs from 'dayjs'
import { mergeProps, splitProps } from 'solid-js'

import { customEventHandlersName } from '../../events'
import { ComponentProps } from '../../types'

export enum WeekDays {
  Sunday = 0,
  MonDay,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

export interface DatePanelProps extends ComponentProps<HTMLDivElement> {
  value?: dayjs.Dayjs
  currentMonth?: dayjs.Dayjs
}

export function generateProps(propsRaw: DatePanelProps) {
  return splitProps(mergeProps({
    currentMonth: dayjs()
  }, propsRaw), customEventHandlersName)
}