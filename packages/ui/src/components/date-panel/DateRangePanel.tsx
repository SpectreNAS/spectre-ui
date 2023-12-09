import dayjs from 'dayjs'
import { createEffect, createSignal, createContext, useContext, on } from 'solid-js'

import { DateRangeProviderValue, DateRange, DateRangePanelProps, generateProps } from './date-range-context.props'
import { getDateKey } from '../../utils'

const _DateRangeContext = createContext<DateRangeProviderValue>()

export const useDateRangeContext = () => {
  const context = useContext(_DateRangeContext)
  if (!context) {
    throw Error('DateRangePanelContext is undefined')
  }
  return context
}

export const DateRangeContext = (propsRaw: DateRangePanelProps) => {
  const props = generateProps(propsRaw)

  const [startMonth, setStartMonth] = createSignal(dayjs())
  const [endMonth, setEndMonth] = createSignal(startMonth().add(1, 'month'))
  const [dateRange, setDateRange] = createSignal<DateRange>({})
  const [dateRangeDates, setDateRangeDates] = createSignal<Record<string, dayjs.Dayjs>>({})
  const [hoverEndDate, setHoverEndDate] = createSignal<dayjs.Dayjs>()

  const isSelected = (date: dayjs.Dayjs) => {
    const range = dateRange()
    return (range.start && range.start.isSame(date, 'date') || range.end && range.end.isSame(date, 'date')) ? true : false
  }
  const isHoverEnd = (date: dayjs.Dayjs) => date.isSame(hoverEndDate(), 'date')

  createEffect(on([startMonth, endMonth], ([startMonth, endMonth]) => {
    const range = dateRange()
    if (range.start && range.end) {
      if (range.start.isSame(range.end, 'month')) {
        return setDateRangeDates(getDateRangeDates(generateDateRangeDates(range.start, range.end)))
      }
      if (startMonth.isSame(range.end, 'month')) {
        return setDateRangeDates(getDateRangeDates(generateDateRangeDates(range.end.set('date', 1), range.end)))
      }
      if (endMonth.isSame(range.start, 'month')) {
        return setDateRangeDates(getDateRangeDates(generateDateRangeDates(range.start, getMonthLastDate(range.start))))
      }
      let dates: dayjs.Dayjs[] = []
      if (startMonth.isAfter(range.start, 'month')) {
        dates = [...generateDateRangeDates(startMonth.set('date', 1), getMonthLastDate(startMonth))]
      } else if (startMonth.isSame(range.start, 'month')) {
        dates = [...generateDateRangeDates(range.start, getMonthLastDate(startMonth))]
      }
      if (endMonth.isBefore(range.end, 'month')) {
        dates = [...dates, ...generateDateRangeDates(endMonth.set('date', 1), getMonthLastDate(endMonth))]
      } else if (endMonth.isSame(range.end, 'month')) {
        dates = [...dates, ...generateDateRangeDates(endMonth.set('date', 1), range.end)]
      }
      setDateRangeDates(getDateRangeDates(dates))
    }
  }))

  function getDateRangeDates(dates: dayjs.Dayjs[]): Record<string, dayjs.Dayjs> {
    const record: Record<string, dayjs.Dayjs> = {}
    for (const date of dates) {
      record[getDateKey(date)] = date
    }
    return record
  }

  function onHoverDate(date: dayjs.Dayjs) {
    const range = dateRange()
    if (range.start && range.end === undefined) {
      const isStart = range.start.isBefore(date)
      const startDate = isStart ? range.start : date
      const endDate = isStart ? date : range.start
      const dates = startDate.isSame(endDate, 'month') ?
        generateDateRangeDates(startDate, endDate) :
        [
          ...generateDateRangeDates(startDate, getMonthLastDate(startDate)),
          ...generateDateRangeDates(endDate.set('date', 1), endDate),
        ]
      setDateRangeDates(getDateRangeDates(dates))
      setHoverEndDate(endDate)
    }
  }

  function onSelectedDate(date: dayjs.Dayjs) {
    const dateRange = setDateRange(value => {
      const dateRange: DateRange = { ...value }
      if (value.start !== undefined && value.end !== undefined) {
        dateRange.start = date
        dateRange.end = undefined
      } else if (value.start === undefined) {
        dateRange.start = date
      } else if (date.isBefore(value.start)) {
        dateRange.end = value.start
        dateRange.start = date
      } else {
        dateRange.end = date
      }
      return dateRange
    })
    if (dateRange.end === undefined) {
      setDateRangeDates({})
    }
  }

  return (
    <_DateRangeContext.Provider value={{
      startMonth,
      setStartMonth,
      endMonth,
      setEndMonth,
      dateRange,
      dateRangeDates,
      isSelected,
      isHoverEnd,
      onHoverDate,
      onSelectedDate
    }}>
      {props.children}
    </_DateRangeContext.Provider>
  )
}

function generateDateRangeDates(start: dayjs.Dayjs, end: dayjs.Dayjs): dayjs.Dayjs[] {
  const dates: dayjs.Dayjs[] = []
  for (let date = start; !date.isSame(end, 'date'); date = date.add(1, 'day')) {
    dates.push(date)
  }
  dates.push(end)
  return dates
}

function getMonthLastDate(date: dayjs.Dayjs): dayjs.Dayjs {
  return date.set('date', 1).add(1, 'month').subtract(1, 'day')
}