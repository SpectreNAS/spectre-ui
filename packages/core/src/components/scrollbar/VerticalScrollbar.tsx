import { mergeClasses } from '../../utils'
import { SpDraggable } from '../draggable'
import { VerticalScrollbarProps, generateProps } from './vertical-scrollbar.props'

export const VerticalScrollbar = (propsRaw: VerticalScrollbarProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const verticalScrollbarClasses = () => mergeClasses([
    'sp-vertical-scrollbar',
    props.class ?? '',
    props.size ?? '',
    props.color ?? '',
  ])
  const sliderStyles = () => `height:${props.sliderHeight}px;`
  const sliderMaxY = () => props.height - props.sliderHeight

  return (
    <div
      class={verticalScrollbarClasses()}
      classList={props.classList}
      style={props.style}
      ref={props.ref}
      {...eventHandlers}
    >
      <SpDraggable
        class='sp-vertical-scrollbar-slider'
        style={sliderStyles()}
        only='y'
        x={1}
        y={props.sliderY}
        minY={0}
        maxY={sliderMaxY()}
        change={props.change}
      />
    </div>
  )
}