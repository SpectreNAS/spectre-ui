import { ColorSaturationProps, generateProps } from './color-saturation.props'
import { useColorPickerPanelContext } from './ColorPickerPanel'
import { createEffect, createSignal } from 'solid-js'
import { SpDraggable } from '../draggable'
import { Point } from '@spectre-ui/utils'
import { mergeStyles, mergeClasses } from '../../utils'

export const ColorSaturation = (propsRaw: ColorSaturationProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const colorPickerPanelContext = useColorPickerPanelContext()
  if (!colorPickerPanelContext) {
    throw Error('colorPickerPanelContext is undefined')
  }

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
    background: linear-gradient(to right, #ffffff 0%, ${colorPickerPanelContext.color().hsv(colorPickerPanelContext.color().hue(), 100, 100)} 100%);
    `
  ])

  function drag({ x, y }: Point): Partial<Point> {
    const xCenter = getCenter(x, props.width)
    const yCenter = getCenter(y, props.height)
    colorPickerPanelContext?.setColor(
      value => value.saturationv(xTransformSaturation(xCenter, props.width) * 100)
        .value(yTransformValue(yCenter, props.height) * 100)
    )
    return { x: xCenter, y: yCenter }
  }

  function onSelect() {

  }

  return (
    <div
      class={saturationClasses()}
      classList={props.classList}
      style={saturationStyles()}
      {...eventHandlers}
      onPointerDown={onSelect}
    >
      <SpDraggable
        minX={sliderMinX()}
        maxX={sliderMaxX()}
        minY={sliderMinY()}
        maxY={sliderMaxY()}
        x={sliderX()}
        y={sliderY()}
        drag={drag}
      >
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

function getCenter(x: number, width: number) {
  return x + width / 2
}