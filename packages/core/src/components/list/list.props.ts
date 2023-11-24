import { mergeProps, splitProps, Accessor, Setter } from 'solid-js'
import { customEventHandlersName } from '../../events'
import { ComponentParentProps, ValueChanged } from '../../types'

interface ListItem {
  title?: string
  value?: string
  children?: ListItem[]
  disabled?: boolean
}

export interface ListProps extends ComponentParentProps<HTMLDivElement> {
  items?: ListItem
  indent?: number
  activeItem?: string
  expands?: string[] | 'all'
  change?: ValueChanged<string>
}

export interface ItemValue {
  active?: Accessor<boolean>
  setActive?: Setter<boolean>

  expand?: Accessor<boolean>
  setExpand?: Setter<boolean>
}

export interface ListProviderValue {
  indent: Accessor<number>
  defaultActiveItem: Accessor<string | undefined>
  expands: Accessor<string[] | 'all' | undefined>
  addItem: (value: ItemValue, key?: string) => string
  removeItem: (key: string) => void
  activeItem: (key: string) => void
}

export function generateProps(propsRaw: ListProps) {
  return splitProps(mergeProps({ items: [], indent: 20 }, propsRaw), customEventHandlersName)
}