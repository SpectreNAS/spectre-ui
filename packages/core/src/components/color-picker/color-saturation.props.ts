import { mergeProps, splitProps } from 'solid-js'

import { customEventHandlersName } from '../../events'
import { ComponentProps } from '../../types'

export interface ColorSaturationProps extends ComponentProps<HTMLDivElement> {
  width?: number
  height?: number
}

export function generateProps(propsRaw: ColorSaturationProps) {
  return splitProps(mergeProps({
    width: 280,
    height: 180,
  }, propsRaw), customEventHandlersName)
}