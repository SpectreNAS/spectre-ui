import dayjs from 'dayjs'
import { createEffect, on } from 'solid-js'

import { DatePanelProps, generateProps } from './date-panel.props'
import { DatePanel } from './DatePanel'
import { useDateRangeContext } from './DateRangeContext'
import { getDateKey } from '../../utils'
import { SpButton } from '../button'

export const DateRangeStart = (propsRaw: DatePanelProps) => {

  const [eventHandlers, props] = generateProps(propsRaw)

  const dateRangeContext = useDateRangeContext()

  const isInRange = (date: dayjs.Dayjs) => dateRangeContext.dateRangeDates()[getDateKey(date)]?.isSame(dateRangeContext.startMonth(), 'month') ? true : false

  createEffect(on(() => props.currentMonth, () => {
    if (props.currentMonth.isBefore(dateRangeContext.endMonth(), 'month')) {
      dateRangeContext.setStartMonth(props.currentMonth)
    }
  }))

  function onSelectedStartDate(date: dayjs.Dayjs) {
    if (date.isBefore(dateRangeContext.endMonth(), 'month')) {
      dateRangeContext.setStartMonth(value => value.set('year', date.year()).set('month', date.month()))
    }
    dateRangeContext.onSelectedDate(date)
  }

  return (
    <DatePanel
      class={props.class}
      classList={props.classList}
      style={props.style}
      ref={props.ref}
      {...eventHandlers}
      weekFirstDay={props.weekFirstDay}
      showHeader={props.showHeader}
      currentMonth={dateRangeContext.startMonth()}
      max={dateRangeContext.endMonth().subtract(1, 'month')}
      renderDate={(date: dayjs.Dayjs) => (
        <div
          class='sp-date-panel-wrap'
          classList={{
            'in-range': isInRange(date),
            end: dateRangeContext.isHoverEnd(date)
          }}
          onMouseEnter={[dateRangeContext.onHoverDate, date]}
        >
          <SpButton
            class='sp-date-panel-day'
            classList={{
              'in-month': date.month() === dateRangeContext.startMonth().month(),
              today: date.isSame(dayjs(), 'date'),
              selected: dateRangeContext.isSelected(date),
            }}
            onClick={[onSelectedStartDate, date]}
          >
            {date.date()}
          </SpButton>
        </div>
      )}
      currentMonthChange={dateRangeContext.setStartMonth}
    />
  )
}