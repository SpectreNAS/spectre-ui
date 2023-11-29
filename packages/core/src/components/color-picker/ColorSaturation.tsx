import { ColorSaturationProps, generateProps } from './color-saturation.props'
import { useColorPickerPanelContext } from './ColorPickerPanel'
import { createEffect, createSignal } from 'solid-js'
import { SpDraggable } from '../draggable'
import { Point } from '@spectre-ui/utils'
import { mergeStyles, mergeClasses } from '../../utils'
import Color from 'color'

export const ColorSaturation = (propsRaw: ColorSaturationProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const colorPickerPanelContext = useColorPickerPanelContext()
  if (!colorPickerPanelContext) {
    throw Error('colorPickerPanelContext is undefined')
  }

  let saturationRef: HTMLDivElement | undefined
  let sliderRef: HTMLDivElement | undefined
  const [sliderX, setSliderX] = createSignal(0)
  const [sliderY, setSliderY] = createSignal(0)
  const [sliderMinX, setSliderMinX] = createSignal(0)
  const [sliderMaxX, setSliderMaxX] = createSignal(0)
  const [sliderMinY, setSliderMinY] = createSignal(0)
  const [sliderMaxY, setSliderMaxY] = createSignal(0)

  const saturationClasses = () => mergeClasses([
    'sp-color-saturation',
    props.class ?? '',
  ])

  const saturationStyles = () => mergeStyles([
    props.style,
    `
    width:${props.width}px;
    height:${props.height}px;
    background: linear-gradient(to right, #ffffff 0%, ${Color().hsv(colorPickerPanelContext.color().hue(), 100, 100)} 100%);
    `
  ])

  const sliderStyles = () => mergeStyles([
    `
    width:${props.sliderWidth}px;
    height:${props.sliderHeight}px;
    `
  ])

  createEffect(() => {
    setSliderMinX(0)
    setSliderMinY(0)
    setSliderMaxX(props.width)
    setSliderMaxY(props.height)
    const color = colorPickerPanelContext.color()
    setSliderX(saturationTransformX(color.saturationv() / 100, props.width))
    setSliderY(valueTransformY(color.value() / 100, props.height))
  })

  function onSelectColor(event: PointerEvent) {
    if (saturationRef && sliderRef) {
      const { x, y } = saturationRef.getBoundingClientRect()
      onChangeSlider({ x: event.clientX - x, y: event.clientY - y })
      sliderRef.dispatchEvent(new PointerEvent('pointerdown', { clientX: event.clientX, clientY: event.clientY }))
    }
  }

  function onChangeSlider({ x, y }: Point) {
    colorPickerPanelContext?.setColor(
      value => value.saturationv(xTransformSaturation(x, props.width) * 100)
        .value(yTransformValue(y, props.height) * 100)
    )
    setSliderX(x)
    setSliderY(y)
  }

  return (
    <div
      ref={saturationRef}
      class={saturationClasses()}
      classList={props.classList}
      style={saturationStyles()}
      {...eventHandlers}
      onPointerDown={onSelectColor}
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
        <div
          class='sp-color-saturation-slider'
          style={sliderStyles()}
        >
        </div>
      </SpDraggable>
    </div>
  )
}

//x坐标转换饱和度
function xTransformSaturation(x: number, width: number) {
  return x / width
}

//饱和度转换x坐标
function saturationTransformX(saturation: number, width: number) {
  return saturation * width
}

//y坐标转换明度
function yTransformValue(y: number, height: number) {
  return 1 - y / height
}

//明度转换y坐标
function valueTransformY(value: number, height: number) {
  return (1 - value) * height
}
