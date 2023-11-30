import { Component, Show } from 'solid-js'

import { AlertProps, generateProps } from './alert.props'
import { ComponentColor } from '../../types'
import { mergeClasses } from '../../utils'
import { SpIconButton } from '../button'
import { CheckCircleFilled } from '../icon/check-circle-filled'
import { CloseCircleFilled } from '../icon/close-circle-filled'
import { CloseFilled } from '../icon/close-filled'
import { InfoCircleFilled } from '../icon/info-circle-filled'
import { WarnCircleFilled } from '../icon/warn-circle-filled'

const iconTypes: Record<ComponentColor, Component> = {
  primary: InfoCircleFilled,
  success: CheckCircleFilled,
  warn: WarnCircleFilled,
  danger: CloseCircleFilled,
}

export const Alert = (propsRaw: AlertProps) => {

  const [eventHandlers, props] = generateProps(propsRaw)

  const alertClasses = () => mergeClasses([
    'sp-alert',
    props.color,
    props.center ? 'center' : '',
    props.light ? 'light' : '',
    props.class ?? '',
  ])

  const titleClasses = () => mergeClasses([
    'sp-alert-title',
    props.description ? 'description' : ''
  ])

  const Icon = () => typeof props.icon === 'boolean' ? iconTypes[props.color as ComponentColor]({}) : props.icon
  const Closable = () => typeof props.closable === 'boolean' ? <CloseFilled /> : props.closable

  return (
    <div
      class={alertClasses()}
      classList={props.classList}
      style={props.style}
      ref={props.ref}
      {...eventHandlers}
    >
      <div class='sp-alert-content'>
        <Show when={props.icon}>
          <div class='sp-alert-icon'>
            <Icon />
          </div>
        </Show>
        <div>
          <div class={titleClasses()}>{props.title}</div>
          <Show when={props.description}>
            <div class='sp-alert-description'>{props.description}</div>
          </Show>
        </div>
      </div>
      <Show when={props.closable}>
        <SpIconButton class='sp-alert-closable' size='small' type='text'>
          <Closable />
        </SpIconButton>
      </Show>
    </div>
  )
}