import { darkTheme } from './dark-theme'
import { lightTheme } from './light-theme'
import { componentsTheme } from './components'
import { SystemThemeType, Theme } from './types'

export function getSystemTheme(type?: SystemThemeType): Theme {
  if (!type) {
    type = getSystemThemeType()
  }
  return { ...(type === 'dark' ? darkTheme : lightTheme), ...componentsTheme }
}

export function getSystemThemeType(): SystemThemeType {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

export function setRootStyleRule(styleRule: CSSStyleRule, theme: Theme) {
  for (const key in theme) {
    const value = theme[key]
    if (value) {
      styleRule.style.setProperty(key, value)
    }
  }
}

export function getRootStyleRule(): CSSStyleRule | undefined {
  const cssRules = document.styleSheets[0]?.cssRules
  if (!cssRules) {
    return
  }
  return Array.prototype.find.call(cssRules, (item: CSSStyleRule) => item.selectorText === ':root')
}