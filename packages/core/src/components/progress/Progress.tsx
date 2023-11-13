import { createEffect, createSignal } from 'solid-js'
import { ProgressProps, generateProps } from './progress.props'
import { getRangeValue, mergeClasses } from '../../utils'

export const Progress = (propsRaw: ProgressProps) => {

  const [eventHandlers, props] = generateProps(propsRaw)
  const [percentage, setPercentage] = createSignal(0)

  createEffect(() => {
    setPercentage(getRangeValue(props.percentage, 0, 100))
  })

  const progressClasses = () => mergeClasses([
    'sp-progress',
    props.size ?? '',
    props.color ?? '',
    props.class ?? ''
  ])

  const innerStyles = () => `width:${percentage()}%`

  return (
    <div
      class={progressClasses()}
      classList={props.classList}
      style={props.style}
      ref={props.ref}
      {...eventHandlers}
    >
      <div class='sp-progress-outer'>
        <div class='sp-progress-inner' style={innerStyles()}></div>
      </div>
    </div>
  )
}