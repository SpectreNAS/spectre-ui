import { createEffect, createSignal } from 'solid-js'
import { SwitchProps, generateProps } from './switch.props'
import { mergeClasses } from '../../utils'

export const Switch = (propsRaw: SwitchProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const [isOn, setIsOn] = createSignal(false)

  const onClass = () => isOn() ? 'on' : ''

  const switchClasses = () => mergeClasses([
    'sp-switch',
    onClass(),
    props.size ?? '',
    props.color ?? '',
    props.class ?? '',
  ])

  const actionClasses = () => mergeClasses([
    'sp-switch-action',
    onClass(),
  ])

  const Action = () => isOn() ? props.renderOn : props.renderOff

  createEffect(() => {
    setIsOn(props.value)
  })

  function onSwitch() {
    setIsOn(value => !value)
  }

  return (
    <div
      class={switchClasses()}
      classList={props.classList}
      style={props.style}
      ref={props.ref}
      {...eventHandlers}
      onclick={onSwitch}
    >
      <div class={actionClasses()}>
        {Action()}
      </div>
    </div>
  )
}