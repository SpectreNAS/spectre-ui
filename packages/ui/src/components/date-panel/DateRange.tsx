import { createEffect } from 'solid-js'

import { DatePanelProps, generateProps } from './date-panel.props'
import { useDateRangeContext } from './DateRangeContext'
import { DateRangeStart } from './DateRangeStart'

export const DateRange = (propsRaw: DatePanelProps) => {

  const [eventHandlers, props] = generateProps(propsRaw)

  const dateRangeContext = useDateRangeContext()

  createEffect(() => {
    dateRangeContext.setEndMonth(dateRangeContext.startMonth().add(2, 'month').add(1, 'year'))
  })

  return (
    <DateRangeStart
      class={props.class}
      classList={props.classList}
      style={props.style}
      ref={props.ref}
      {...eventHandlers}
    ></DateRangeStart>
  )
}