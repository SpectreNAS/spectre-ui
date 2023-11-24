import { mergeProps, splitProps } from 'solid-js'
import { customEventHandlersName } from '../../events'
import { ComponentParentProps } from '../../types'

interface ListItem {
  title?: string
  value?: string
  children?: ListItem[]
  disabled?: boolean
}

export interface ListProps extends ComponentParentProps<HTMLDivElement> {
  items?: ListItem
  indent?: number
}

export function generateProps(propsRaw: ListProps) {
  return splitProps(mergeProps({ items: [], indent: 20 }, propsRaw), customEventHandlersName)
}