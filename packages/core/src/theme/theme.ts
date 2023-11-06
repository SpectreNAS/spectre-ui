import { darkTheme } from './dark-theme'
import { lightTheme } from './light-theme'

export type SystemThemeType = 'light' | 'dark'

export interface Theme extends BaseTheme, ButtonTheme, CheckboxTheme {
  [key: string]: string | undefined
}

export interface BaseTheme {

  /* background */
  '--bg-brand-default'?: string
  '--bg-brand-hover'?: string
  '--bg-brand-active'?: string
  '--bg-brand-disabled'?: string
  '--bg-brand-light-default'?: string
  '--bg-brand-light-hover'?: string
  '--bg-brand-light-active'?: string
  '--bg-brand-light-disabled'?: string

  '--bg-success-default'?: string
  '--bg-success-hover'?: string
  '--bg-success-active'?: string
  '--bg-success-disabled'?: string
  '--bg-success-light-default'?: string
  '--bg-success-light-hover'?: string
  '--bg-success-light-active'?: string
  '--bg-success-light-disabled'?: string

  '--bg-warn-default'?: string
  '--bg-warn-hover'?: string
  '--bg-warn-active'?: string
  '--bg-warn-disabled'?: string
  '--bg-warn-light-default'?: string
  '--bg-warn-light-hover'?: string
  '--bg-warn-light-active'?: string
  '--bg-warn-light-disabled'?: string

  '--bg-danger-default'?: string
  '--bg-danger-hover'?: string
  '--bg-danger-active'?: string
  '--bg-danger-disabled'?: string
  '--bg-danger-light-default'?: string
  '--bg-danger-light-hover'?: string
  '--bg-danger-light-active'?: string
  '--bg-danger-light-disabled'?: string

  '--bg-controls-default'?: string
  '--bg-controls-hover'?: string
  '--bg-controls-active'?: string
  '--bg-controls-disabled'?: string

  /* text */
  '--text-static-primary'?: string
  '--text-static-disabled'?: string

  '--text-common-primary'?: string
  '--text-common-secondary'?: string
  '--text-common-tertiary'?: string
  '--text-common-quaternary'?: string
  '--text-common-disabled'?: string

  '--text-brand-default'?: string
  '--text-brand-hover'?: string
  '--text-brand-active'?: string
  '--text-brand-disabled'?: string

  '--text-danger-default'?: string
  '--text-danger-hover'?: string
  '--text-danger-active'?: string
  '--text-danger-disabled'?: string

  '--text-success-default'?: string
  '--text-success-hover'?: string
  '--text-success-active'?: string
  '--text-success-disabled'?: string

  '--text-warn-default'?: string
  '--text-warn-hover'?: string
  '--text-warn-active'?: string
  '--text-warn-disabled'?: string
}

export interface ButtonTheme {

  /*button base*/
  '--sp-button-border'?: string
  '--sp-button-border-radius'?: string
  '--sp-button-padding'?: string
  '--sp-button-line-height'?: string
  '--sp-button-font-size'?: string

  /* button background */
  '--sp-button-bg-color'?: string
  '--sp-button-bg-color-hover'?: string
  '--sp-button-bg-color-active'?: string
  '--sp-button-bg-color-disable'?: string

  /* button text */
  '--sp-button-text-color'?: string
  '--sp-button-text-color-hover'?: string
  '--sp-button-text-color-active'?: string
  '--sp-button-text-color-disable'?: string
}

export interface CheckboxTheme {

  /* checkbox unchecked border */
  '--sp-checkbox-unchecked-border-color'?: string
  '--sp-checkbox-unchecked-border-color-hover'?: string
  '--sp-checkbox-unchecked-border-color-active'?: string
  '--sp-checkbox-unchecked-border-color-disable'?: string

  /* checkbox half unchecked */
  '--sp-checkbox-indeterminate-border-color'?: string
  '--sp-checkbox-indeterminate-border-color-hover'?: string
  '--sp-checkbox-indeterminate-border-color-active'?: string
  '--sp-checkbox-indeterminate-border-color-disable'?: string

  '--sp-checkbox-indeterminate-bg-color'?: string
  '--sp-checkbox-indeterminate-bg-color-hover'?: string
  '--sp-checkbox-indeterminate-bg-color-active'?: string
  '--sp-checkbox-indeterminate-bg-color-disable'?: string

  /* checkbox checked */
  '--sp-checkbox-checked-text-color'?: string

  '--sp-checkbox-checked-border-color'?: string
  '--sp-checkbox-checked-border-color-hover'?: string
  '--sp-checkbox-checked-border-color-active'?: string
  '--sp-checkbox-checked-border-color-disable'?: string

  '--sp-checkbox-checked-bg-color'?: string
  '--sp-checkbox-checked-bg-color-hover'?: string
  '--sp-checkbox-checked-bg-color-active'?: string
  '--sp-checkbox-checked-bg-color-disable'?: string
}

export function getSystemTheme(type?: SystemThemeType): Theme {
  if (!type) {
    type = getSystemThemeType()
  }
  return type === 'dark' ? darkTheme : lightTheme
}

export function getSystemThemeType() {
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