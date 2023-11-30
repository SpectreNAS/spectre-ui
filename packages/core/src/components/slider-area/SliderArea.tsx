import { Point } from '@spectre-ui/utils'
import { createEffect, createSignal } from 'solid-js'

import { SliderAreaProps, generateProps } from './slider-area.props'
import { mergeStyles, mergeClasses } from '../../utils'
import { SpDraggable } from '../draggable'

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
    'sp-slider-area',
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

  createEffect(() => {
    setSliderX(props.sliderX)
  })

  createEffect(() => {
    setSliderY(props.sliderY)
  })

  function onPointerDownArea(event: PointerEvent) {
    if (areaRef && sliderRef) {
      const { x, y } = areaRef.getBoundingClientRect()
      const offsetX = event.clientX - x
      const offsetY = event.clientY - y
      if (offsetX < sliderMinX() || offsetX > sliderMaxX()) {
        return
      }
      if (offsetY < sliderMinY() || offsetY > sliderMaxY()) {
        return
      }
      if (props.axis === 'x') {
        setSliderX(offsetX)
      } else if (props.axis === 'y') {
        setSliderY(offsetY)
      } else {
        setSliderX(offsetX)
        setSliderY(offsetY)
      }
      emitChange()
      sliderRef.dispatchEvent(new PointerEvent('pointerdown', { clientX: event.clientX, clientY: event.clientY }))
    }
  }

  function onChangeSlider({ x, y }: Point) {
    setSliderX(x)
    setSliderY(y)
    emitChange()
  }

  function emitChange() {
    props.change?.({ x: sliderX(), y: sliderY() })
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
        axis={props.axis}
        minX={sliderMinX()}
        maxX={sliderMaxX()}
        minY={sliderMinY()}
        maxY={sliderMaxY()}
        x={sliderX()}
        y={sliderY()}
        change={onChangeSlider}
      >
        {props.renderSlider}
      </SpDraggable>
      {props.children}
    </div>
  )
}