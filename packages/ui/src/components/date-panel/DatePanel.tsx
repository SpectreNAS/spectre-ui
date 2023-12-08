import dayjs from 'dayjs'
import { createEffect, createSignal, For, Show } from 'solid-js'

import { DatePanelProps, generateProps, WeekDays } from './date-panel.props'
import { mergeClasses, getDateKey } from '../../utils'
import { SpButton, SpIconButton } from '../button'
import { ChevronDoubleLeftFilled } from '../icon/chevron-double-left-filled'
import { ChevronDoubleRightFilled } from '../icon/chevron-double-right-filled'
import { ChevronLeftFilled } from '../icon/chevron-left-filled'
import { ChevronRightFilled } from '../icon/chevron-right-filled'

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

  const selectedDateMap = new Map<string, dayjs.Dayjs>()
  const [weekDays, setWeekDays] = createSignal<WeekDays[]>([])
  const [dates, setDates] = createSignal<dayjs.Dayjs[]>([])
  const [selectedDate, setSelectedDate] = createSignal<Record<string, dayjs.Dayjs>>({})
  const [currentMonth, setCurrentMonth] = createSignal(props.currentMonth)

  const rowIndexes = () => Array.from({ length: dates().length / 7 }, (_, key) => key)
  const rowDates = (rowIndex: number) => dates().slice(rowIndex * 7, rowIndex * 7 + 7)
  const isSelected = (date: dayjs.Dayjs) => selectedDate()[getDateKey(date)] ? true : false

  const datePanelClasses = () => mergeClasses([
    'sp-date-panel',
    props.class ?? ''
  ])

  createEffect(() => {
    setWeekDays(generateWeekDays(props.weekFirstDay))
    setCurrentMonth(props.currentMonth)
  })

  createEffect(() => {
    setDates(generateMonthDates(currentMonth(), props.weekFirstDay))
    emitCurrentMonthChange()
  })

  createEffect(() => {
    if (props.multiple && Array.isArray(props.value)) {
      for (const item of props.value) {
        selectedDateMap.set(getDateKey(item), item)
      }
    } else if (props.value) {
      selectedDateMap.set(getDateKey(props.value as dayjs.Dayjs), props.value as dayjs.Dayjs)
    }
    setSelectedDate(Object.fromEntries(selectedDateMap))
  })

  function switchMonth(month: dayjs.Dayjs) {
    if (month.isBefore(currentMonth(), 'month') || month.isAfter(currentMonth(), 'month')) {
      setCurrentMonth(value => value.set('year', month.year()).set('month', month.month()))
    }
  }

  function onSelectedDate(date: dayjs.Dayjs) {
    const dateKey = getDateKey(date)
    const isSelected = selectedDateMap.get(dateKey)
    if (isSelected) {
      selectedDateMap.delete(dateKey)
      setSelectedDate(Object.fromEntries(selectedDateMap))
      switchMonth(date)
      return
    }
    if (!props.multiple) {
      selectedDateMap.clear()
    }
    selectedDateMap.set(dateKey, date)
    setSelectedDate(Object.fromEntries(selectedDateMap))
    switchMonth(date)
  }

  function onPrevYear() {
    setCurrentMonth(value => value.subtract(1, 'year'))
  }

  function onPrevMonth() {
    setCurrentMonth(value => value.subtract(1, 'month'))
  }

  function onNextYear() {
    setCurrentMonth(value => value.add(1, 'year'))
  }

  function onNextMonth() {
    setCurrentMonth(value => value.add(1, 'month'))
  }

  function emitCurrentMonthChange() {
    props.currentMonthChange?.(currentMonth())
  }

  return (
    <div
      class={datePanelClasses()}
    >
      <Show when={props.showHeader}>
        <div class='sp-date-panel-header'>
          <SpIconButton type='text' onClick={onPrevYear}>
            <ChevronDoubleLeftFilled />
          </SpIconButton>
          <SpIconButton type='text' onClick={onPrevMonth}>
            <ChevronLeftFilled />
          </SpIconButton>
          <span class='sp-date-panel-header-text'>
            { }
          </span>
          <SpIconButton type='text' onClick={onNextMonth}>
            <ChevronRightFilled />
          </SpIconButton>
          <SpIconButton type='text' onClick={onNextYear}>
            <ChevronDoubleRightFilled />
          </SpIconButton>
        </div>
      </Show>
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
                    (date) => props.renderDate?.(date) ?? (
                      <div class='sp-date-panel-wrap'>
                        <SpButton
                          class='sp-date-panel-day'
                          classList={{
                            'in-month': date.isSame(currentMonth(), 'month'),
                            today: date.isSame(dayjs(), 'date'),
                            selected: isSelected(date),
                          }}
                          onClick={[onSelectedDate, date]}
                        >
                          {date.date()}
                        </SpButton>
                      </div>
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

