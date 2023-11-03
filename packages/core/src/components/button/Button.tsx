import { mergeProps } from 'solid-js'
import { ButtonColor, ButtonProps, ButtonType } from './button.props'
import { ComponentSize } from '../../types'
import { mergeClasses } from '../../utils'

export const Button = (propsRaw: ButtonProps) => {
  const props = mergeProps({ size: 'default', type: 'default', round: false }, propsRaw)

  const buttonClasses = () => mergeClasses([
    'sp-button',
    getSizeClass(props.size as ComponentSize),
    getTypeClass(props.type as ButtonType),
    getColorClass(props.color as ButtonColor),
    props.round ? 'round' : ''
  ])

  return <button class={buttonClasses()}>Button</button>
}

function getSizeClass(size: ComponentSize) {
  switch (size) {
    case 'small':
      return 'small'
    case 'medium':
      return 'medium'
    case 'large':
      return 'large'
  }
  return ''
}

function getTypeClass(type: ButtonType) {
  switch (type) {
    case 'light':
      return 'light'
    case 'text':
      return 'text'
  }
  return ''
}

function getColorClass(color: ButtonColor) {
  switch (color) {
    case 'primary':
      return 'primary'
    case 'success':
      return 'success'
    case 'warn':
      return 'warn'
    case 'danger':
      return 'danger'
  }
  return ''
}