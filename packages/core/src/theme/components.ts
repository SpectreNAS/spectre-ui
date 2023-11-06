import { ButtonTheme, CheckboxTheme } from './types'

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
  '--sp-checkbox-size': '20px',
  '--sp-checkbox-border-width': '2px',
  '--sp-checkbox-border-style': 'solid',
  '--sp-checkbox-border-radius': '2px',

  /* checkbox unchecked border */
  '--sp-checkbox-border-color': 'var(--text-common-quaternary)',
  '--sp-checkbox-border-color-hover': 'var(--text-brand-hover)',
  '--sp-checkbox-border-color-active': 'var(--text-brand-active)',
  '--sp-checkbox-border-color-disable': 'var(--text-common-disabled)',

  /* checkbox indeterminate */
  '--sp-checkbox-indeterminate-size': '12px',
  '--sp-checkbox-indeterminate-margin': '2px',
  '--sp-checkbox-indeterminate-radius': '1px',
  '--sp-checkbox-indeterminate-bg-color': 'var(--text-brand-default)',
  '--sp-checkbox-indeterminate-bg-color-hover': 'var(--text-brand-hover)',
  '--sp-checkbox-indeterminate-bg-color-active': 'var(--text-brand-active)',
  '--sp-checkbox-indeterminate-bg-color-disable': 'var(--text-brand-disabled)',

  /* checkbox checked */
  '--sp-checkbox-checked-size': '16px',
  '--sp-checkbox-checked-margin': '2px',
  '--sp-checkbox-checked-text-color': 'var(--text-static-primary)',
  '--sp-checkbox-checked-bg-color': 'var(--text-brand-default)',
  '--sp-checkbox-checked-bg-color-hover': 'var(--text-brand-hover)',
  '--sp-checkbox-checked-bg-color-active': 'var(--text-brand-active)',
  '--sp-checkbox-checked-bg-color-disable': 'var(--text-brand-disabled)',
}

export const componentsTheme = {
  ...buttonTheme,
  ...checkboxTheme,
}