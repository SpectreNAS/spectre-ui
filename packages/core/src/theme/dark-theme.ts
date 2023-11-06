import { BaseTheme, ButtonTheme, CheckboxTheme } from './theme'

const baseTheme: BaseTheme = {

  /* background */
  '--bg-brand-default': 'rgba(144, 127, 240, 1)',
  '--bg-brand-hover': 'rgba(168, 154, 245, 1)',
  '--bg-brand-active': 'rgba(192, 182, 250, 1)',
  '--bg-brand-disabled': 'rgba(144, 127, 240, 0.5)',
  '--bg-brand-light-default': 'rgba(144, 127, 240, 0.16)',
  '--bg-brand-light-hover': 'rgba(144, 127, 240, 0.24)',
  '--bg-brand-light-active': 'rgba(144, 127, 240, 0.32)',
  '--bg-brand-light-disabled': 'rgba(144, 127, 240, 0.08)',

  '--bg-success-default': 'rgba(60, 214, 163, 1)',
  '--bg-success-hover': 'rgba(99, 224, 183, 1)',
  '--bg-success-active': 'rgba(141, 235, 203, 1)',
  '--bg-success-disabled': 'rgba(60, 214, 163, 0.5)',
  '--bg-success-light-default': 'rgba(60, 214, 163, 0.16)',
  '--bg-success-light-hover': 'rgba(60, 214, 163, 0.24)',
  '--bg-success-light-active': 'rgba(60, 214, 163, 0.32)',
  '--bg-success-light-disabled': 'rgba(60, 214, 163, 0.08)',

  '--bg-warn-default': 'rgba(255, 166, 42, 1)',
  '--bg-warn-hover': 'rgba(255, 183, 82, 1)',
  '--bg-warn-active': 'rgba(255, 199, 120, 1)',
  '--bg-warn-disabled': 'rgba(255, 166, 42, 0.5)',
  '--bg-warn-light-default': 'rgba(255, 166, 42, 0.16)',
  '--bg-warn-light-hover': 'rgba(255, 166, 42, 0.24)',
  '--bg-warn-light-active': 'rgba(255, 166, 42, 0.32)',
  '--bg-warn-light-disabled': 'rgba(255, 166, 42, 0.08)',

  '--bg-danger-default': 'rgba(240, 115, 105, 1)',
  '--bg-danger-hover': 'rgba(245, 144, 137, 1)',
  '--bg-danger-active': 'rgba(250, 175, 170, 1)',
  '--bg-danger-disabled': 'rgba(240, 115, 105, 0.5)',
  '--bg-danger-light-default': 'rgba(238, 83, 71, 0.16)',
  '--bg-danger-light-hover': 'rgba(238, 83, 71, 0.24)',
  '--bg-danger-light-active': 'rgba(238, 83, 71, 0.32)',
  '--bg-danger-light-disabled': 'rgba(238, 83, 71, 0.08)',

  '--bg-controls-default': 'rgba(255, 255, 255, 0.08)',
  '--bg-controls-hover': 'rgba(255, 255, 255, 0.16)',
  '--bg-controls-active': 'rgba(255, 255, 255, 0.24)',
  '--bg-controls-disabled': 'rgba(255, 255, 255, 0.08)',

  /* text */
  '--text-static-primary': 'rgba(255, 255, 255, 1)',
  '--text-static-disabled': 'rgba(255, 255, 255, 0.3)',

  '--text-common-primary': 'rgba(255, 255, 255, 0.85)',
  '--text-common-secondary': 'rgba(255, 255, 255, 0.7)',
  '--text-common-tertiary': 'rgba(255, 255, 255, 0.55)',
  '--text-common-quaternary': 'rgba(255, 255, 255, 0.4)',
  '--text-common-disabled': 'rgba(255, 255, 255, 0.25)',

  '--text-brand-default': 'rgba(144, 127, 240, 1)',
  '--text-brand-hover': 'rgba(168, 154, 245, 1)',
  '--text-brand-active': 'rgba(192, 182, 250, 1)',
  '--text-brand-disabled': 'rgba(144, 127, 240, 0.5)',

  '--text-danger-default': 'rgba(240, 115, 105, 1)',
  '--text-danger-hover': 'rgba(245, 144, 137, 1)',
  '--text-danger-active': 'rgba(250, 175, 170, 1)',
  '--text-danger-disabled': 'rgba(240, 115, 105, 0.5)',

  '--text-success-default': 'rgba(60, 214, 163, 1)',
  '--text-success-hover': 'rgba(99, 224, 183, 1)',
  '--text-success-active': 'rgba(141, 235, 203, 1)',
  '--text-success-disabled': 'rgba(60, 214, 163, 0.5)',

  '--text-warn-default': 'rgba(255, 166, 42, 1)',
  '--text-warn-hover': 'rgba(255, 183, 82, 1)',
  '--text-warn-active': 'rgba(255, 199, 120, 1)',
  '--text-warn-disabled': 'rgba(255, 166, 42, 0.5)',
}

const buttonTheme: ButtonTheme = {

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

const CheckboxTheme: CheckboxTheme = {

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

export const darkTheme = { ...baseTheme, ...buttonTheme, ...CheckboxTheme }