import { JSX, mergeProps, splitProps } from 'solid-js'
import { ComponentSize, ComponentColor, ComponentProps, ValueChanged } from '../../types'
import { customEventHandlersName } from '../../events'

export interface SwitchProps extends ComponentProps<HTMLDivElement> {
  color?: ComponentColor
  size?: ComponentSize
  value?: boolean
  offValue?: string
  onValue?: string
  renderOff?: JSX.Element
  renderOn?: JSX.Element
  change?: ValueChanged<boolean>
}

export function generateProps(propsRaw: SwitchProps) {
  return splitProps(mergeProps({ value: false }, propsRaw), customEventHandlersName)
}