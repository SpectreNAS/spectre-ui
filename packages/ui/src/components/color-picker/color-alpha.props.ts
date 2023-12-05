import { mergeProps, splitProps } from 'solid-js'

import { customEventHandlersName } from '../../events'
import { ComponentProps } from '../../types'

export interface ColorAlphaProps extends ComponentProps<HTMLDivElement> {
  vertical?: boolean
  width?: number
  height?: number
}

export function generateProps(propsRaw: ColorAlphaProps) {
  return splitProps(mergeProps({
    vertical: false,
    width: 280,
    height: 12,
  }, propsRaw), customEventHandlersName)
}