import dayjs from 'dayjs'
import { mergeProps, Accessor, Setter, FlowProps } from 'solid-js'

import { ValueChanged } from '../../types'

export interface DateRange {
  start?: dayjs.Dayjs
  end?: dayjs.Dayjs
}

export interface DateRangeProviderValue {
  startMonth: Accessor<dayjs.Dayjs>
  setStartMonth: Setter<dayjs.Dayjs>

  endMonth: Accessor<dayjs.Dayjs>
  setEndMonth: Setter<dayjs.Dayjs>

  dateRange: Accessor<DateRange>
  dateRangeDates: Accessor<Record<string, dayjs.Dayjs>>

  isSelected: (date: dayjs.Dayjs) => boolean
  isHoverEnd: (date: dayjs.Dayjs) => boolean

  onHoverDate: ValueChanged<dayjs.Dayjs>
  onSelectedDate: ValueChanged<dayjs.Dayjs>
}

export interface DateRangePanelProps extends FlowProps {
  value?: DateRange
  change?: ValueChanged<DateRange>
}

export function generateProps(propsRaw: DateRangePanelProps) {
  return mergeProps({}, propsRaw)
}