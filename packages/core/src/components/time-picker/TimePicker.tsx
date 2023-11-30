import dayjs from 'dayjs'
import { createEffect, createSignal } from 'solid-js'

import { TimePickerProps, generateProps } from './time-picker.props'
import { TimePickerPanel } from './TimePickerPanel'
import { SpInput } from '../input'
import { SpPopover } from '../popover'

export const TimePicker = (propsRaw: TimePickerProps) => {

  const [eventHandlers, props] = generateProps(propsRaw)

  const [day, setDay] = createSignal(dayjs())

  const inputValue = () => day().format('HH:mm:ss')

  createEffect(() => {
    setDay(dayjs(props.value))
  })

  function onChangeTimePicker(value: dayjs.Dayjs) {
    setDay(value)
  }

  return (
    <SpPopover
      classList={props.classList}
      style={props.style}
      trigger='focus'
      renderContent={
        <TimePickerPanel
          value={day()}
          change={onChangeTimePicker}
        />
      }
    >
      <SpInput
        value={inputValue()}
        {...eventHandlers}
      ></SpInput>
    </SpPopover>
  )
}