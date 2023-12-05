import { Point } from '@spectres/utils'
import dayjs from 'dayjs'
import { Show, createSignal, For, createEffect, on } from 'solid-js'

import { TimePickerPanelProps, generateProps } from './time-picker-panel.props'
import { mergeClasses, fillNumber } from '../../utils'
import { SpScrollArea } from '../scroll-area'

export const TimePickerPanel = (propsRaw: TimePickerPanelProps) => {

  const [eventHandlers, props] = generateProps(propsRaw)

  const itemHeight = 32
  const hours = Array.from({ length: 24 }, (_, k) => k)
  const minutes = Array.from({ length: 60 }, (_, k) => k)
  const seconds = Array.from({ length: 60 }, (_, k) => k)
  const [hoursY, setHoursY] = createSignal(0)
  const [minutesY, setMinutesY] = createSignal(0)
  const [secondsY, setSecondsY] = createSignal(0)
  const [currentHours, setCurrentHours] = createSignal(0)
  const [currentMinutes, setCurrentMinutes] = createSignal(0)
  const [currentSeconds, setCurrentSeconds] = createSignal(0)
  let day = dayjs()
  let hoursTimeout: NodeJS.Timeout | undefined
  let minutesTimeout: NodeJS.Timeout | undefined
  let secondsTimeout: NodeJS.Timeout | undefined

  const PlaceholderItem = () => <For each={Array.from({ length: 3 })}>{() => <div class='sp-time-picker-panel-item'></div>}</For>

  const timePickerPanelClasses = () => mergeClasses([
    'sp-time-picker-panel',
    props.class ?? ''
  ])

  createEffect(() => {
    day = dayjs(props.value)
    setHoursWithY(day.hour())
    setMinutesWithY(day.minute())
    setSecondsWithY(day.second())
  })

  createEffect(on(currentHours, (value) => {
    day = day.set('hour', value)
    emitChange()
  }, { defer: true }))

  createEffect(on(currentMinutes, (value) => {
    day = day.set('minute', value)
    emitChange()
  }, { defer: true }))

  createEffect(on(currentSeconds, (value) => {
    day = day.set('second', value)
    emitChange()
  }, { defer: true }))

  function setHoursWithY(value: number) {
    setCurrentHours(value)
    setHoursY(value * itemHeight)
  }

  function setMinutesWithY(value: number) {
    setCurrentMinutes(value)
    setMinutesY(value * itemHeight)
  }

  function setSecondsWithY(value: number) {
    setCurrentSeconds(value)
    setSecondsY(value * itemHeight)
  }

  function onScrollHours({ y }: Point) {
    const value = Math.round(y / itemHeight)
    setHoursY(y)
    setCurrentHours(value)
    clearTimeout(hoursTimeout)
    hoursTimeout = setTimeout(() => {
      setHoursY(currentHours() * itemHeight)
    }, 300)
  }

  function onScrollMinutes({ y }: Point) {
    const value = Math.round(y / itemHeight)
    setMinutesY(y)
    setCurrentMinutes(value)
    clearTimeout(minutesTimeout)
    minutesTimeout = setTimeout(() => {
      setMinutesY(currentMinutes() * itemHeight)
    }, 300)
  }

  function onScrollSeconds({ y }: Point) {
    const value = Math.round(y / itemHeight)
    setSecondsY(y)
    setCurrentSeconds(value)
    clearTimeout(secondsTimeout)
    secondsTimeout = setTimeout(() => {
      setSecondsY(currentSeconds() * itemHeight)
    }, 300)
  }

  function onSelectHours(value: number) {
    if (value !== currentHours()) {
      setHoursWithY(value)
    }
  }

  function onSelectMinutes(value: number) {
    if (value !== currentMinutes()) {
      setMinutesWithY(value)
    }
  }

  function onSelectSeconds(value: number) {
    if (value !== currentSeconds()) {
      setSecondsWithY(value)
    }
  }

  function emitChange() {
    props.change?.(day)
  }

  return (
    <div
      class={timePickerPanelClasses()}
      classList={props.classList}
      style={props.style}
      ref={props.ref}
      {...eventHandlers}
    >
      <div class='sp-time-picker-panel-divider'></div>
      <Show when={props.hours}>
        <SpScrollArea class='sp-time-picker-panel-column' scrollY={hoursY()} scroll={onScrollHours}>
          <PlaceholderItem />
          <For each={hours}>
            {
              (item) => {
                return (
                  <div
                    class={mergeClasses(['sp-time-picker-panel-item', item === currentHours() ? 'active' : ''])}
                    onClick={[onSelectHours, item]}
                  >
                    {fillNumber(item)}
                  </div>
                )
              }
            }
          </For>
          <PlaceholderItem />
        </SpScrollArea>
      </Show>
      <Show when={props.minutes}>
        <SpScrollArea class='sp-time-picker-panel-column' scrollY={minutesY()} scroll={onScrollMinutes}>
          <PlaceholderItem />
          <For each={minutes}>
            {
              (item) => {
                return (
                  <div
                    class={mergeClasses(['sp-time-picker-panel-item', item === currentMinutes() ? 'active' : ''])}
                    onClick={[onSelectMinutes, item]}
                  >
                    {fillNumber(item)}
                  </div>
                )
              }
            }
          </For>
          <PlaceholderItem />
        </SpScrollArea>
      </Show>
      <Show when={props.seconds}>
        <SpScrollArea class='sp-time-picker-panel-column' scrollY={secondsY()} scroll={onScrollSeconds}>
          <PlaceholderItem />
          <For each={seconds}>
            {
              (item) => {
                return (
                  <div
                    class={mergeClasses(['sp-time-picker-panel-item', item === currentSeconds() ? 'active' : ''])}
                    onClick={[onSelectSeconds, item]}
                  >
                    {fillNumber(item)}
                  </div>
                )
              }
            }
          </For>
          <PlaceholderItem />
        </SpScrollArea>
      </Show>
    </div>
  )
}