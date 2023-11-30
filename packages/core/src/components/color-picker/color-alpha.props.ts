import { mergeProps, splitProps } from 'solid-js'
import { ComponentProps } from '../../types'
import { customEventHandlersName } from '../../events'

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