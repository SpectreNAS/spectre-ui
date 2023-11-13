import { createSignal } from 'solid-js'
import { mergeClasses } from '../../utils'
import { ScrollAreaProps, generateProps } from './scroll-area.props'
import { SpDraggable } from '../draggable'
import { Point, Scrollbar } from '@spectre-ui/utils'

export const ScrollArea = (propsRaw: ScrollAreaProps) => {

  const [eventHandlers, props] = generateProps(propsRaw)

  const scrollbar = new Scrollbar()
  const [verticalSliderY, setVerticalSliderY] = createSignal(0)
  const [verticalSliderHeight, setVerticalSliderHeight] = createSignal(0)
  const [horizontalSliderX, setHorizontalSliderX] = createSignal(0)
  const [horizontalSliderWidth, setHorizontalSliderWidth] = createSignal(0)

  const scrollAreaClasses = () => mergeClasses([
    'sp-scroll-area'
  ])

  const verticalSliderStyles = () => `height:${verticalSliderHeight()}px;`

  const horizontalSliderStyles = () => `width:${horizontalSliderWidth()}px;`

  function onVerticalSlider({ y }: Point) {
    scrollbar.thumbTo({ y })
  }

  function onHorizontalSlider({ x }: Point) {
    scrollbar.thumbTo({ x })
  }

  return (
    <div class={scrollAreaClasses()}>
      <div class='sp-scroll-area-view'>
        <div>
          {props.children}
        </div>
      </div>
      <div class='sp-scroll-area-vertical-bar'></div>
      <SpDraggable y={verticalSliderY()} minY={0} change={onVerticalSlider}>
        <div
          class='sp-scroll-area-vertical-slider'
          style={verticalSliderStyles()}
        ></div>
      </SpDraggable>
      <div class='sp-scroll-area-horizontal-bar'></div>
      <SpDraggable y={horizontalSliderX()} minY={0} change={onHorizontalSlider}>
        <div
          class='sp-scroll-area-horizontal-slider'
          style={horizontalSliderStyles()}
        ></div>
      </SpDraggable>
    </div>
  )
}