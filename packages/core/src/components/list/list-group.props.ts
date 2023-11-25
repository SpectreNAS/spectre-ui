import { Accessor, JSX, mergeProps, splitProps } from 'solid-js'
import { customEventHandlersName } from '../../events'
import { ComponentParentProps } from '../../types'

export interface ListGroupProps extends ComponentParentProps<HTMLDivElement> {
  title?: JSX.Element
  value?: string
}

export interface ListGroupProviderValue {
  level: Accessor<number>
  parentKey: Accessor<string>
}

export function generateProps(propsRaw: ListGroupProps) {
  return splitProps(mergeProps({ }, propsRaw), customEventHandlersName)
}