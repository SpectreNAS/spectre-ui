import { JSX, onCleanup } from 'solid-js'

import { ValueChanged } from '../types'

export function mergeClasses(classes: string[]): string {
  return classes.filter(item => item !== '').join(' ')
}

export function mergeStyles(styles: (JSX.CSSProperties | string | undefined)[]): string {
  let styleSting = ''
  for (const style of styles) {
    if (!style) continue
    if (typeof style === 'string') {
      styleSting += `${style}`
    } else {
      styleSting += styleObjectToString(style)
    }
  }
  return styleSting
}

function styleObjectToString(styles: JSX.CSSProperties): string {
  let s = ''
  for (const [key, value] of Object.entries(styles)) {
    s += `${key}: ${value};`
  }
  return s
}

//获取范围值
export function getRangeValue(value: number, min?: number, max?: number): number {
  if (min != undefined && value < min) {
    value = min
  } else if (max != undefined && value > max) {
    value = max
  }
  return value
}

export function clickOutside(elements: HTMLElement[], accessor?: ValueChanged<Event>) {
  const onClick = (e: Event) => {
    if (elements.every(element => !element.contains(e.target as Node))) {
      accessor?.(e)
    }
  }
  document.body.addEventListener('click', onClick)
  onCleanup(() => document.body.removeEventListener('click', onClick))
}

export function fillNumber(value: number, maxLength = 2, fillString = '0') {
  return value.toString().padStart(maxLength, fillString)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function eventHandlerCall<T extends HTMLElement, E extends Event>(eventHandler: JSX.EventHandlerUnion<T, E>, event: any) {
  if (typeof eventHandler === 'function') {
    eventHandler?.(event)
  } else if (typeof eventHandler === 'object') {
    eventHandler[0](eventHandler[1], event)
  }
}
