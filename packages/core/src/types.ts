import type { ParentProps, JSX } from 'solid-js'

export type ComponentSize = 'default' | 'small' | 'medium' | 'large'

export type ComponentTheme = 'dark' | 'light'

export type ComponentColor = 'primary' | 'success' | 'warn' | 'danger'

export type ValueChanged<T> = (value: T) => void

export type VoidCallback = () => void

export interface CustomEventHandlers<T extends HTMLElement> extends JSX.CustomEventHandlersCamelCase<T> {
  onFocusIn?: JSX.HTMLAttributes<T>['onFocusIn']
  onFocusOut?: JSX.HTMLAttributes<T>['onFocusOut']
}

export interface ComponentProps<T extends HTMLElement> extends CustomEventHandlers<T> {
  ref?: JSX.HTMLAttributes<T>['ref']
  class?: JSX.HTMLAttributes<T>['class']
  classList?: JSX.HTMLAttributes<T>['classList']
  style?: JSX.HTMLAttributes<T>['style']
}

export type ComponentParentProps<T extends HTMLElement> = ParentProps<ComponentProps<T>>

export type CustomEvent<T, E extends Event> = E & {
  currentTarget: T
  target: Element
}

export type CustomInputEvent<E extends Event> = E & {
  currentTarget: HTMLInputElement
  target: HTMLInputElement
}