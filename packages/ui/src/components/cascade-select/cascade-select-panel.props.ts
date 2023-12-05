import { mergeProps, splitProps, JSX } from 'solid-js'

import { customEventHandlersName } from '../../events'
import { ComponentProps, ValueChanged } from '../../types'

export type CascadeSelectSingleValue = string[]

export type CascadeSelectMultipleValue = CascadeSelectSingleValue[]

export type CascadeSelectValue = unknown[]

export interface CascadeSelectOption {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
  label?: JSX.Element
  value: string
  children?: CascadeSelectOption[]
  disabled?: boolean
}

export interface CascadeSelectPanelProps extends ComponentProps<HTMLDivElement> {
  value?: CascadeSelectValue
  multiple?: boolean
  options?: CascadeSelectOption[]
  change?: ValueChanged<CascadeSelectValue>
}

export function generateProps(propsRaw: CascadeSelectPanelProps) {
  return splitProps(mergeProps({ value: [], options: [], multiple: false }, propsRaw), customEventHandlersName)
}