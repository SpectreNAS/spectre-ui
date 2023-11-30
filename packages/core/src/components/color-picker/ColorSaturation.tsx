import { ColorSaturationProps, generateProps } from './color-saturation.props'
import { useColorPickerPanelContext } from './ColorPickerPanel'
import { createEffect, createSignal } from 'solid-js'
import { Point } from '@spectre-ui/utils'
import { mergeStyles, mergeClasses } from '../../utils'
import Color from 'color'
import { SpSliderArea } from '../slider-area'

export const ColorSaturation = (propsRaw: ColorSaturationProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const colorPickerPanelContext = useColorPickerPanelContext()
  if (!colorPickerPanelContext) {
    throw Error('colorPickerPanelContext is undefined')
  }

  const [sliderX, setSliderX] = createSignal(0)
  const [sliderY, setSliderY] = createSignal(0)

  const saturationClasses = () => mergeClasses([
    'sp-color-saturation',
    props.class ?? '',
  ])

  const saturationStyles = () => mergeStyles([
    props.style,
    `
    background: linear-gradient(to right, #ffffff 0%, ${Color().hsv(colorPickerPanelContext.color().hue(), 100, 100)} 100%);
    `
  ])

  createEffect(() => {
    const color = colorPickerPanelContext.color()
    setSliderX(saturationTransformX(color.saturationv() / 100, props.width))
    setSliderY(valueTransformY(color.value() / 100, props.height))
  })

  function onChangeSlider({ x, y }: Point) {
    colorPickerPanelContext?.setColor(
      value => value.saturationv(xTransformSaturation(x, props.width) * 100)
        .value(yTransformValue(y, props.height) * 100)
    )
    setSliderX(x)
    setSliderY(y)
  }

  return (
    <SpSliderArea
      ref={props.ref}
      class={saturationClasses()}
      classList={props.classList}
      style={saturationStyles()}
      width={props.width}
      height={props.height}
      renderSlider={<div class='sp-color-saturation-slider'></div>}
      sliderX={sliderX()}
      sliderY={sliderY()}
      {...eventHandlers}
      change={onChangeSlider} />
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
