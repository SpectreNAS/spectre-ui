import { Point } from '@spectres/utils'
import { createEffect, createSignal } from 'solid-js'

import { ColorHueProps, generateProps } from './color-hue.props'
import { useColorPickerPanelContext } from './ColorPickerPanel'
import { mergeClasses } from '../../utils'
import { SpSliderArea } from '../slider-area'

export const ColorHue = (propsRaw: ColorHueProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const colorPickerPanelContext = useColorPickerPanelContext()
  if (!colorPickerPanelContext) {
    throw Error('colorPickerPanelContext is undefined')
  }

  const [sliderX, setSliderX] = createSignal(0)

  const hueVerticalClasses = () => mergeClasses([
    'sp-color-hue vertical',
    props.class ?? '',
  ])

  const hueHorizontalClasses = () => mergeClasses([
    'sp-color-hue horizontal',
    props.class ?? '',
  ])

  createEffect(() => {
    setSliderX(
      colorPickerPanelContext.hue() === 360 ?
        props.width :
        hueTransformX(colorPickerPanelContext.color().hue(), props.width)
    )
  })

  function onChangeVerticalSlider({ y }: Point) {
    setSliderX(y)
    const hue = xTransformHue(y, props.width)
    colorPickerPanelContext?.setHue(hue)
    colorPickerPanelContext?.setColor(value => value.hue(hue))
  }

  function onChangeHorizontalSlider({ x }: Point) {
    setSliderX(x)
    const hue = xTransformHue(x, props.width)
    colorPickerPanelContext?.setHue(hue)
    colorPickerPanelContext?.setColor(value => value.hue(hue))
  }

  return (
    <>
      {
        props.vertical ?
          <SpSliderArea
            ref={props.ref}
            class={hueVerticalClasses()}
            classList={props.classList}
            style={props.style}
            width={props.height}
            height={props.width}
            axis='y'
            renderSlider={<div class='sp-color-hue-slider vertical'></div>}
            sliderY={sliderX()}
            {...eventHandlers}
            change={onChangeVerticalSlider} />
          :
          <SpSliderArea
            ref={props.ref}
            class={hueHorizontalClasses()}
            classList={props.classList}
            style={props.style}
            width={props.width}
            height={props.height}
            axis='x'
            renderSlider={<div class='sp-color-hue-slider horizontal'></div>}
            sliderX={sliderX()}
            {...eventHandlers}
            change={onChangeHorizontalSlider} />
      }
    </>
  )
}

//hue转换x轴坐标
function hueTransformX(hue: number, width: number) {
  return hue / 360 * width
}

//x坐标转换hue
function xTransformHue(x: number, width: number) {
  return Math.round(x / width * 360)
}
