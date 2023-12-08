import dayjs from 'dayjs'
import { JSX, mergeProps, splitProps } from 'solid-js'

import { customEventHandlersName } from '../../events'
import { ComponentProps, ValueChanged } from '../../types'

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
  value?: dayjs.Dayjs | dayjs.Dayjs[]
  currentMonth?: dayjs.Dayjs
  multiple?: boolean
  weekFirstDay?: WeekDays
  showHeader?: boolean
  renderDate?: (date: dayjs.Dayjs) => JSX.Element
  change?: ValueChanged<dayjs.Dayjs | undefined>
  currentMonthChange?: ValueChanged<dayjs.Dayjs>
}

export function generateProps(propsRaw: DatePanelProps) {
  return splitProps(mergeProps({
    currentMonth: dayjs(),
    multiple: false,
    weekFirstDay: WeekDays.Sunday,
    showHeader: true,
  }, propsRaw), customEventHandlersName)
}