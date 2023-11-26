import { ColorHueSliderProps, generateProps } from './color-hue-slider.props'
import { SpHorizontalScrollbar, SpVerticalScrollbar } from '../scrollbar'
import { useColorPickerPanelContext } from './ColorPickerPanel'
import { createEffect, createSignal } from 'solid-js'
import { Point } from '@spectre-ui/utils'

export const ColorHueSlider = (propsRaw: ColorHueSliderProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const colorPickerPanelContext = useColorPickerPanelContext()
  if (!colorPickerPanelContext) {
    throw Error('colorPickerPanelContext is undefined')
  }

  const [sliderX, setSliderX] = createSignal(0)

  createEffect(() => {
    setSliderX(hueTransformX(colorPickerPanelContext.color().hue(), props.width - props.sliderWidth))
  })

  function onVertical({ y }: Point) {
    colorPickerPanelContext?.setColor(value => value.hue(xTransformHue(y, props.width - props.sliderWidth)))
  }

  function onHorizontal({ x }: Point) {
    colorPickerPanelContext?.setColor(value => value.hue(xTransformHue(x, props.width - props.sliderWidth)))
  }

  return (
    <>
      {
        props.vertical ?
          <SpVerticalScrollbar height={props.width} sliderY={sliderX()} sliderHeight={props.sliderWidth} change={onVertical} /> :
          <SpHorizontalScrollbar width={props.width} sliderX={sliderX()} sliderWidth={props.sliderWidth} change={onHorizontal} />
      }
    </>
  )
}

//hue转换x轴坐标
function hueTransformX(hue: number, width: number) {
  return (hue / 360) * width
}

//x坐标转换hue
function xTransformHue(x: number, width: number) {
  return (x / width) * 360
}
