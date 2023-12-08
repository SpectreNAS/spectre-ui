import dayjs from 'dayjs'
import { createEffect, createSignal } from 'solid-js'

import { DatePanel } from './DatePanel'
import { getDateKey } from '../../utils'
import { SpButton } from '../button'

interface DateRange {
  start?: dayjs.Dayjs
  end?: dayjs.Dayjs
}

export const DateRangePanel = () => {

  const [startMonth, setStartMonth] = createSignal(dayjs())
  const [endMonth, setEndMonth] = createSignal(dayjs().add(1, 'month'))
  const [dateRange, setDateRange] = createSignal<DateRange>({})
  const [dateRangeDates, setDateRangeDates] = createSignal<Record<string, dayjs.Dayjs>>({})
  const [hoverEndDate, setHoverEndDate] = createSignal<dayjs.Dayjs>()

  const isSelected = (date: dayjs.Dayjs) => {
    const range = dateRange()
    return range.start && range.start.isSame(date, 'date') || range.end && range.end.isSame(date, 'date')
  }
  const isInStartRange = (date: dayjs.Dayjs) => dateRangeDates()[getDateKey(date)]?.isSame(startMonth(), 'month') ? true : false
  const isInEndRange = (date: dayjs.Dayjs) => dateRangeDates()[getDateKey(date)]?.isSame(endMonth(), 'month') ? true : false

  createEffect(() => {
    const range = dateRange()
    if (range.start && range.end) {
      const startM = startMonth()
      if (!startM.isBefore(range.start, 'month')) {
        setDateRangeDates(
          getDateRangeDates(
            [
              ...generateDateRangeDates(startM.isSame(range.start, 'month') ? range.start : startM.set('date', 1), startM.set('date', 1).add(1, 'month').subtract(1, 'day')),
              ...generateDateRangeDates(range.end.set('date', 1), range.end),
            ]
          )
        )
      }
    }
  })

  createEffect(() => {
    const range = dateRange()
    if (range.start && range.end) {
      const endM = endMonth()
      if (!endM.isAfter(range.end, 'month')) {
        setDateRangeDates(
          getDateRangeDates(
            [
              ...generateDateRangeDates(range.start, range.start.set('date', 1).add(1, 'month').subtract(1, 'day')),
              ...generateDateRangeDates(endM.set('date', 1), endM.isSame(range.end, 'month') ? range.end : range.end.set('date', 1).add(1, 'month').subtract(1, 'day')),
            ]
          )
        )
      }
    }
  })

  function getDateRangeDates(dates: dayjs.Dayjs[]): Record<string, dayjs.Dayjs> {
    const d: Record<string, dayjs.Dayjs> = {}
    for (const date of dates) {
      d[getDateKey(date)] = date
    }
    return d
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
          ...generateDateRangeDates(startDate, startDate.set('date', 1).add(1, 'month').subtract(1, 'day')),
          ...generateDateRangeDates(endDate.set('date', 1), endDate),
        ]
      setDateRangeDates(getDateRangeDates(dates))
      setHoverEndDate(endDate)
    }
  }

  function onSelectedStartDate(date: dayjs.Dayjs) {
    if (date.isBefore(endMonth(), 'month')) {
      setStartMonth(value => value.set('year', date.year()).set('month', date.month()))
    }
    onSelectedDate(date)
  }

  function onSelectedEndDate(date: dayjs.Dayjs) {
    if (date.isAfter(startMonth(), 'month')) {
      setEndMonth(value => value.set('year', date.year()).set('month', date.month()))
    }
    onSelectedDate(date)
  }

  function onSelectedDate(date: dayjs.Dayjs) {
    setDateRange(value => {
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
  }

  return (
    <div class='sp-date-panel-range'>
      <DatePanel
        currentMonth={startMonth()}
        max={endMonth().subtract(1, 'month')}
        renderDate={(date: dayjs.Dayjs) => (
          <div
            class='sp-date-panel-wrap'
            classList={{
              'in-range': isInStartRange(date),
              end: date.isSame(hoverEndDate())
            }}
            onMouseEnter={[onHoverDate, date]}
          >
            <SpButton
              class='sp-date-panel-day'
              classList={{
                'in-month': date.month() === startMonth().month(),
                today: date.isSame(dayjs(), 'date'),
                selected: isSelected(date),
              }}
              onClick={[onSelectedStartDate, date]}
            >
              {date.date()}
            </SpButton>
          </div>
        )}
        currentMonthChange={setStartMonth}
      />
      <DatePanel
        currentMonth={endMonth()}
        min={startMonth().add(1, 'month')}
        renderDate={(date: dayjs.Dayjs) => (
          <div
            class='sp-date-panel-wrap'
            classList={{
              'in-range': isInEndRange(date),
              end: date.isSame(hoverEndDate())
            }}
            onMouseEnter={[onHoverDate, date]}
          >
            <SpButton
              class='sp-date-panel-day'
              classList={{
                'in-month': date.month() === endMonth().month(),
                today: date.isSame(dayjs(), 'date'),
                selected: isSelected(date),
              }}
              onClick={[onSelectedEndDate, date]}
            >
              {date.date()}
            </SpButton>
          </div>
        )}
        currentMonthChange={setEndMonth}
      />
    </div>
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