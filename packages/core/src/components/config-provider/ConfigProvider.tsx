import { createEffect, mergeProps } from 'solid-js'
import { Theme, type ConfigProviderProps, ThemeType } from './config-provider.props'
import { darkTheme } from './dark-theme'

export const ConfigProvider = (propsRaw: ConfigProviderProps) => {
  const props = mergeProps({ themeType: 'system' }, propsRaw)
  createEffect(() => {

  })
  const styleRule = getRootStyleRule()
  if (styleRule) {
    setTheme(styleRule, darkTheme)
  }
  return (
    <>
      {props.children}
    </>
  )
}

function getSystemTheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

function setTheme(styleRule: CSSStyleRule, theme: Theme) {
  for (const key in theme) {
    const value = theme[key]
    if (value) {
      styleRule.style.setProperty(key, value)
    }
  }
}

function getRootStyleRule(): CSSStyleRule | undefined {
  const cssRules = document.styleSheets[0]?.cssRules
  if (!cssRules) {
    return
  }
  return Array.prototype.find.call(cssRules, (item: CSSStyleRule) => item.selectorText === ':root')
}