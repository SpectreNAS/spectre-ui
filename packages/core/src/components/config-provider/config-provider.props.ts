import { JSXElement } from 'solid-js'
import { Theme, SystemThemeType } from '../../theme'
import { ComponentSize } from '../../types'

export interface ConfigProviderProps {
  themeType?: SystemThemeType
  customTheme?: Theme
  size?: ComponentSize
  children?: JSXElement
}

export interface ConfigProviderValue {
  size: ComponentSize
}