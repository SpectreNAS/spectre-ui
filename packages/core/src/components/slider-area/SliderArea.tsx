import { createEffect, createSignal } from 'solid-js'
import { SliderAreaProps, generateProps } from './slider-area.props'
import { SpDraggable } from '../draggable'
import { Point } from '@spectre-ui/utils'
import { mergeStyles, mergeClasses } from '../../utils'

export const SliderArea = (propsRaw: SliderAreaProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  let areaRef: HTMLDivElement | undefined
  let sliderRef: HTMLDivElement | undefined
  const [sliderX, setSliderX] = createSignal(0)
  const [sliderY, setSliderY] = createSignal(0)
  const [sliderMinX, setSliderMinX] = createSignal(0)
  const [sliderMaxX, setSliderMaxX] = createSignal(0)
  const [sliderMinY, setSliderMinY] = createSignal(0)
  const [sliderMaxY, setSliderMaxY] = createSignal(0)

  const areaClasses = () => mergeClasses([
    'sp-color-saturation',
    props.class ?? '',
  ])

  const areaStyles = () => mergeStyles([
    props.style,
    `
    width:${props.width}px;
    height:${props.height}px;
    `
  ])

  createEffect(() => {
    setSliderMinX(0)
    setSliderMinY(0)
    setSliderMaxX(props.width)
    setSliderMaxY(props.height)
  })

  function onPointerDownArea() {

  }

  function onChangeSlider({ x, y }: Point) {
  }

  return (
    <div
      ref={areaRef}
      class={areaClasses()}
      classList={props.classList}
      style={areaStyles()}
      {...eventHandlers}
      onPointerDown={onPointerDownArea}
    >
      <SpDraggable
        ref={(el) => sliderRef = el}
        minX={sliderMinX()}
        maxX={sliderMaxX()}
        minY={sliderMinY()}
        maxY={sliderMaxY()}
        x={sliderX()}
        y={sliderY()}
        change={onChangeSlider}
      >
        {props.children}
      </SpDraggable>
    </div>
  )
}