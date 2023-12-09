import dayjs from 'dayjs'
import { createEffect, on } from 'solid-js'

import { DatePanelProps, generateProps } from './date-panel.props'
import { DatePanel } from './DatePanel'
import { useDateRangeContext } from './DateRangeContext'
import { getDateKey } from '../../utils'
import { SpButton } from '../button'

export const DateRangeEnd = (propsRaw: DatePanelProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const dateRangeContext = useDateRangeContext()

  const isInRange = (date: dayjs.Dayjs) => dateRangeContext.dateRangeDates()[getDateKey(date)]?.isSame(dateRangeContext.endMonth(), 'month') ? true : false

  createEffect(on(() => props.currentMonth, () => {
    if (props.currentMonth.isAfter(dateRangeContext.startMonth(), 'month')) {
      dateRangeContext.setEndMonth(props.currentMonth)
    }
  }))

  function onSelectedEndDate(date: dayjs.Dayjs) {
    if (date.isAfter(dateRangeContext.startMonth(), 'month')) {
      dateRangeContext.setEndMonth(value => value.set('year', date.year()).set('month', date.month()))
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
      currentMonth={dateRangeContext.endMonth()}
      min={dateRangeContext.startMonth().add(1, 'month')}
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
              'in-month': date.month() === dateRangeContext.endMonth().month(),
              today: date.isSame(dayjs(), 'date'),
              selected: dateRangeContext.isSelected(date),
            }}
            onClick={[onSelectedEndDate, date]}
          >
            {date.date()}
          </SpButton>
        </div>
      )}
      currentMonthChange={dateRangeContext.setEndMonth}
    />
  )
}