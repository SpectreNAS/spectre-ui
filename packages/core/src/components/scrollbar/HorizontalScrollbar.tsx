import { mergeClasses } from '../../utils'
import { SpDraggable } from '../draggable'
import { HorizontalScrollbarProps, generateProps } from './horizontal-scrollbar.props'

export const HorizontalScrollbar = (propsRaw: HorizontalScrollbarProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const horizontalScrollbarClasses = () => mergeClasses([
    'sp-horizontal-scrollbar',
    props.class ?? '',
    props.size ?? '',
    props.color ?? '',
  ])
  const sliderStyles = () => `width:${props.sliderWidth}px;`
  const sliderMaxX = () => props.width - props.sliderWidth

  return (
    <div
      class={horizontalScrollbarClasses()}
      classList={props.classList}
      style={props.style}
      ref={props.ref}
      {...eventHandlers}
    >
      <SpDraggable
        class='sp-horizontal-scrollbar-slider'
        style={sliderStyles()}
        only='x'
        x={props.sliderX}
        y={1}
        minX={0}
        maxX={sliderMaxX()}
        change={props.change}
      />
    </div>
  )
}