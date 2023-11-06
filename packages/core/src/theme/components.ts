import { ButtonTheme, CheckboxTheme } from './theme'

export const buttonTheme: ButtonTheme = {

  /*button base*/
  '--sp-button-border': 'none',
  '--sp-button-border-radius': '4px',
  '--sp-button-padding': '9px 16px',
  '--sp-button-line-height': '22px',
  '--sp-button-font-size': '14px',

  /* button background */
  '--sp-button-bg-color': 'var(--bg-controls-default)',
  '--sp-button-bg-color-hover': 'var(--bg-controls-hover)',
  '--sp-button-bg-color-active': 'var(--bg-controls-active)',
  '--sp-button-bg-color-disable': 'var(--bg-controls-disable)',

  /* button text */
  '--sp-button-text-color': 'var(--text-common-primary)',
  '--sp-button-text-color-hover': 'var(--text-common-primary)',
  '--sp-button-text-color-active': 'var(--text-common-primary)',
  '--sp-button-text-color-disable': 'var(--text-common-disabled)',

}

export const checkboxTheme: CheckboxTheme = {

  /* checkbox unchecked border */
  '--sp-checkbox-unchecked-border-color': '#000',
  '--sp-checkbox-unchecked-border-color-hover': '#000',
  '--sp-checkbox-unchecked-border-color-active': '#000',
  '--sp-checkbox-unchecked-border-color-disable': '#000',

  /* checkbox half unchecked */
  '--sp-checkbox-indeterminate-border-color': '#000',
  '--sp-checkbox-indeterminate-border-color-hover': '#000',
  '--sp-checkbox-indeterminate-border-color-active': '#000',
  '--sp-checkbox-indeterminate-border-color-disable': '#000',

  '--sp-checkbox-indeterminate-bg-color': '#000',
  '--sp-checkbox-indeterminate-bg-color-hover': '#000',
  '--sp-checkbox-indeterminate-bg-color-active': '#000',
  '--sp-checkbox-indeterminate-bg-color-disable': '#000',

  /* checkbox checked */
  '--sp-checkbox-checked-text-color': '#000',

  '--sp-checkbox-checked-border-color': '#000',
  '--sp-checkbox-checked-border-color-hover': '#000',
  '--sp-checkbox-checked-border-color-active': '#000',
  '--sp-checkbox-checked-border-color-disable': '#000',

  '--sp-checkbox-checked-bg-color': '#000',
  '--sp-checkbox-checked-bg-color-hover': '#000',
  '--sp-checkbox-checked-bg-color-active': '#000',
  '--sp-checkbox-checked-bg-color-disable': '#000',
}