import { JSXElement } from 'solid-js'
import { Theme, SystemThemeType } from '../../theme'

export interface ConfigProviderProps {
  themeType?: SystemThemeType
  customTheme?: Theme
  children?: JSXElement
}

