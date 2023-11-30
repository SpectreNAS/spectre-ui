import { mergeProps, splitProps } from 'solid-js'

import { customEventHandlersName } from '../../events'
import { ComponentProps } from '../../types'

export interface ColorHueProps extends ComponentProps<HTMLDivElement> {
  vertical?: boolean
  width?: number
  height?: number
}

export function generateProps(propsRaw: ColorHueProps) {
  return splitProps(mergeProps({
    vertical: false,
    width: 280,
    height: 12,
  }, propsRaw), customEventHandlersName)
}