import { AlertTheme, BadgeTheme, ButtonTheme, CheckboxTheme, LinkTheme, TagTheme } from './types'

export const alertTheme: AlertTheme = {
  '--sp-alert-padding': '8px 16px',
  '--sp-alert-border-width': 'none',
  '--sp-alert-border-style': 'none',
  '--sp-alert-border-color': 'none',
  '--sp-alert-border-radius': '4px',
  '--sp-alert-bg-color': 'var(--bg-brand-default)',
  '--sp-alert-text-color': 'var(--text-static-primary)',

  '--sp-alert-title-font': 'var(--sp-text-b2)',
  '--sp-alert-description-font': 'var(--sp-text-b4)',
}

export const badgeTheme: BadgeTheme = {
  '--sp-badge-padding': '0px 6px',
  '--sp-badge-radius': '10px',
  '--sp-badge-font': 'var(--sp-text-b4)',
  '--sp-badge-bg-color': 'var(--bg-brand-default)',
  '--sp-badge-text-color': 'var(--text-static-primary)',
  '--sp-badge-size': '18px',
  '--sp-badge-dot-size': '8px',
}

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

export const linkTheme: LinkTheme = {
  '--sp-link-text-color': 'var(--text-common-primary)',
  '--sp-link-text-color-hover': 'var(--text-brand-hover)',
  '--sp-link-text-color-active': 'var(--text-brand-active)',
  '--sp-link-underline-width': '1px',
  '--sp-link-underline-style': 'solid',
  '--sp-link-underline-color': 'var(--border-brand-default)',
  '--sp-link-underline-color-hover': 'var(--border-brand-hover)',
  '--sp-link-underline-color-active': 'var(--border-brand-active)',
}

export const tagTheme: TagTheme = {

  /* tag base */
  '--sp-tag-border-width': '1px',
  '--sp-tag-border-style': 'solid',
  '--sp-tag-border-color': 'var(--border-common-default)',
  '--sp-tag-border-radius': '4px',
  '--sp-tag-padding': '3px 8px',
  '--sp-tag-line-height': '18px',
  '--sp-tag-font-size': '12px',
  
  /* tag background */
  '--sp-tag-bg-color': 'var(--bg-tag-default)',
    
  /* tag text */
  '--sp-tag-text-color': 'var(--text-common-primary)',

  /* tag closable */
  '--sp-tag-closable-size': '16px',
  '--sp-tag-closable-border-radius': '2px',
  '--sp-tag-closable-bg-color': 'none',
}

export const componentsTheme = {
  ...alertTheme,
  ...badgeTheme,
  ...buttonTheme,
  ...checkboxTheme,
  ...linkTheme,
  ...tagTheme,
}