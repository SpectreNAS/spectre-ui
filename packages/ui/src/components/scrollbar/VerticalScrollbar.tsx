import { VerticalScrollbarProps, generateProps } from './vertical-scrollbar.props'
import { mergeClasses, mergeStyles } from '../../utils'
import { SpDraggable } from '../draggable'

export const VerticalScrollbar = (propsRaw: VerticalScrollbarProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const verticalScrollbarClasses = () => mergeClasses([
    'sp-vertical-scrollbar',
    props.class ?? '',
    props.size ?? '',
    props.color ?? '',
  ])
  const verticalScrollbarStyles = () => mergeStyles([
    props.style,
    `height:${props.height}px`
  ])

  const sliderStyles = () => `height:${props.sliderHeight}px;`
  const sliderMaxY = () => props.height - props.sliderHeight

  return (
    <div
      class={verticalScrollbarClasses()}
      classList={props.classList}
      style={verticalScrollbarStyles()}
      ref={props.ref}
      {...eventHandlers}
    >
      <SpDraggable
        class='sp-vertical-scrollbar-slider'
        style={sliderStyles()}
        axis='y'
        x={props.sliderX}
        y={props.sliderY}
        minY={0}
        maxY={sliderMaxY()}
        change={props.change}
      >
        {props.children}
      </SpDraggable>
    </div>
  )
}