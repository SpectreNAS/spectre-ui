import { Point } from '@spectres/utils'
import { createEffect, createSignal } from 'solid-js'

import { ColorAlphaProps, generateProps } from './color-alpha.props'
import { useColorPickerPanelContext } from './ColorPickerPanel'
import { mergeClasses, mergeStyles } from '../../utils'
import { SpSliderArea } from '../slider-area'

export const ColorAlpha = (propsRaw: ColorAlphaProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const colorPickerPanelContext = useColorPickerPanelContext()
  if (!colorPickerPanelContext) {
    throw Error('colorPickerPanelContext is undefined')
  }

  const [sliderX, setSliderX] = createSignal(0)

  const alphaVerticalClasses = () => mergeClasses([
    props.class ?? '',
    'sp-color-alpha vertical',
  ])

  const alphaHorizontalClasses = () => mergeClasses([
    props.class ?? '',
    'sp-color-alpha horizontal',
  ])

  const alphaVerticalStyles = () => mergeStyles([
    `
    background: linear-gradient(to bottom, ${colorPickerPanelContext.color().alpha(0).hexa()} 0%, 
    ${colorPickerPanelContext.color().alpha(1).hexa()} 100%);
    `,
  ])

  const alphaHorizontalStyles = () => mergeStyles([
    `
    background: linear-gradient(to right, ${colorPickerPanelContext.color().alpha(0).hexa()} 0%, 
    ${colorPickerPanelContext.color().alpha(1).hexa()} 100%);
    `,
  ])

  createEffect(() => {
    setSliderX(alphaTransformX(colorPickerPanelContext.color().alpha(), props.width))
  })

  function onChangeVerticalSlider({ y }: Point) {
    setSliderX(y)
    colorPickerPanelContext?.setColor(value => value.alpha(xTransformAlpha(y, props.width)))
  }

  function onChangeHorizontalSlider({ x }: Point) {
    setSliderX(x)
    colorPickerPanelContext?.setColor(value => value.alpha(xTransformAlpha(x, props.width)))
  }

  return (
    <>
      {
        props.vertical ?
          <SpSliderArea
            ref={props.ref}
            class={alphaVerticalClasses()}
            classList={props.classList}
            style={props.style}
            width={props.height}
            height={props.width}
            axis='y'
            renderSlider={<div class='sp-color-alpha-slider vertical'></div>}
            sliderY={sliderX()}
            {...eventHandlers}
            change={onChangeVerticalSlider}>
            <div class='sp-color-alpha-color' style={alphaVerticalStyles()}></div>
          </SpSliderArea>
          :
          <SpSliderArea
            ref={props.ref}
            class={alphaHorizontalClasses()}
            classList={props.classList}
            style={props.style}
            width={props.width}
            height={props.height}
            axis='x'
            renderSlider={<div class='sp-color-alpha-slider horizontal'></div>}
            sliderX={sliderX()}
            {...eventHandlers}
            change={onChangeHorizontalSlider}>
            <div class='sp-color-alpha-color' style={alphaHorizontalStyles()}></div>
          </SpSliderArea>
      }
    </>
  )
}

//alpha转换x坐标
function alphaTransformX(alpha: number, width: number) {
  return alpha * width
}

//x坐标转换alpha
function xTransformAlpha(x: number, width: number) {
  return x / width
}
