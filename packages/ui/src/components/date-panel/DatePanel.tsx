import dayjs from 'dayjs'
import { createEffect, createSignal, For } from 'solid-js'

import { DatePanelProps, generateProps, WeekDays } from './date-panel.props'
import { mergeClasses } from '../../utils'
import { SpButton } from '../button'

const weekDayTextMap = {
  0: 'S',
  1: 'M',
  2: 'TU',
  3: 'W',
  4: 'T',
  5: 'FR',
  6: 'SA',
}

export const DatePanel = (propsRaw: DatePanelProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const [weekDays, setWeekDays] = createSignal<WeekDays[]>([])
  const [dates, setDates] = createSignal<dayjs.Dayjs[]>([])
  const [selectedDate, setSelectedDate] = createSignal<dayjs.Dayjs>()
  const [currentMonth, setCurrentMonth] = createSignal(props.currentMonth)

  const rowIndexes = () => Array.from({ length: dates().length / 7 }, (_, key) => key)
  const rowDates = (rowIndex: number) => dates().slice(rowIndex * 7, rowIndex * 7 + 7)
  const isSelected = (date: dayjs.Dayjs) => {
    const selected = selectedDate()
    return selected ? isDateEqual(date, selected) : false
  }

  const datePanelClasses = () => mergeClasses([
    'sp-date-panel',
    props.class ?? ''
  ])

  createEffect(() => {
    setDates(generateMonthDates(setCurrentMonth(props.currentMonth)))
  })

  createEffect(() => {
    setSelectedDate(props.value)
  })

  createEffect(() => {
    setWeekDays(generateWeekDays(WeekDays.Sunday))
  })

  function onSelectedDate(date: dayjs.Dayjs) {
    if (date.isBefore(currentMonth(), 'month') || date.isAfter(currentMonth(), 'month')) {
      setDates(generateMonthDates(setCurrentMonth(value => value.set('month', date.month()))))
    }
    setSelectedDate(date)
  }

  return (
    <div
      class={datePanelClasses()}
    >
      <div class='sp-date-panel-week'>
        <For each={weekDays()}>
          {
            (day) => (
              <div class='sp-date-panel-week-day'>{weekDayTextMap[day]}</div>
            )
          }
        </For>
      </div>
      <div>
        <For each={rowIndexes()}>
          {
            (rowIndex) => (
              <div class='sp-date-panel-row'>
                <For each={rowDates(rowIndex)}>
                  {
                    (date) => (
                      <SpButton
                        class='sp-date-panel-day'
                        classList={{
                          'in-month': date.month() === currentMonth().month(),
                          today: isDateEqual(date, dayjs()),
                          selected: isSelected(date),
                        }}
                        onClick={[onSelectedDate, date]}
                      >
                        {date.date()}
                      </SpButton>
                    )
                  }
                </For>
              </div>
            )
          }
        </For>
      </div>
    </div>
  )
}

function generateWeekDays(weekFirstDay: WeekDays): WeekDays[] {
  const days: WeekDays[] = []
  let day = weekFirstDay
  do {
    days.push(day)
    day = day + 1 > WeekDays.Saturday ? WeekDays.Sunday : day + 1
  } while (day !== weekFirstDay)
  return days
}

function generateMonthDates(month: dayjs.Dayjs, weekFirstDay: WeekDays = WeekDays.Sunday): dayjs.Dayjs[] {
  const dates: dayjs.Dayjs[] = []
  for (let date = month.set('date', 1); date.month() === month.month(); date = date.add(1, 'day')) {
    dates.push(date)
  }
  let firstDate = dates[0]
  while (firstDate.day() !== weekFirstDay) {
    firstDate = firstDate.subtract(1, 'day')
    dates.unshift(firstDate)
  }
  for (let date = dates[dates.length - 1].add(1, 'day'); date.day() !== weekFirstDay; date = date.add(1, 'day')) {
    dates.push(date)
  }
  return dates
}

function isDateEqual(source: dayjs.Dayjs, target: dayjs.Dayjs): boolean {
  return source.year() === target.year() && source.month() === target.month() && source.date() === target.date()
}