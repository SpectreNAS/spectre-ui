import { mergeProps, splitProps, JSX } from 'solid-js'

import { customEventHandlersName } from '../../events'
import { ComponentProps } from '../../types'

export interface CascadeSelectOption {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
  label?: JSX.Element
  value: string
  children?: CascadeSelectOption[]
  disabled?: boolean
}

export interface CascadeSelectPanelProps extends ComponentProps<HTMLDivElement> {
  value?: string
  options?: CascadeSelectOption[]
}

export function generateProps(propsRaw: CascadeSelectPanelProps) {
  return splitProps(mergeProps({ options: [] }, propsRaw), customEventHandlersName)
}