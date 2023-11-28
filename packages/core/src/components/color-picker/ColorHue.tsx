import { ColorHueProps, generateProps } from './color-hue.props'
import { SpHorizontalScrollbar, SpVerticalScrollbar } from '../scrollbar'
import { useColorPickerPanelContext } from './ColorPickerPanel'
import { createEffect, createSignal } from 'solid-js'
import { Point } from '@spectre-ui/utils'
import { mergeClasses, mergeStyles } from '../../utils'

export const ColorHue = (propsRaw: ColorHueProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const colorPickerPanelContext = useColorPickerPanelContext()
  if (!colorPickerPanelContext) {
    throw Error('colorPickerPanelContext is undefined')
  }

  const [sliderX, setSliderX] = createSignal(0)

  const hueVerticalClasses = () => mergeClasses([
    'sp-color-hue',
    props.class ?? '',
  ])

  const hueHorizontalClasses = () => mergeClasses([
    'sp-color-hue',
    props.class ?? '',
  ])

  const hueVerticalStyles = () => mergeStyles([
    `
    --sp-vertical-scrollbar-width:${props.sliderWidth}px;
    --sp-vertical-scrollbar-slider-width:${props.sliderWidth}px;
    `,
    props.style
  ])

  const hueHorizontalStyles = () => mergeStyles([
    `
    --sp-horizontal-scrollbar-height:${props.sliderWidth}px;
    --sp-horizontal-scrollbar-slider-height:${props.sliderWidth}px;
    `,
    props.style
  ])

  createEffect(() => {
    setSliderX(hueTransformX(colorPickerPanelContext.color().hue(), props.width - props.sliderWidth)
    )
  })

  function onVertical({ y }: Point) {
    setSliderX(y)
    colorPickerPanelContext?.setColor(value => value.hue(xTransformHue(y, props.width - props.sliderWidth)))
  }

  function onHorizontal({ x }: Point) {
    setSliderX(x)
    colorPickerPanelContext?.setColor(value => value.hue(xTransformHue(x, props.width - props.sliderWidth)))
  }

  return (
    <>
      {
        props.vertical ?
          <SpVerticalScrollbar
            class={hueVerticalClasses()}
            classList={props.classList}
            style={hueVerticalStyles()}
            height={props.width}
            sliderY={sliderX()}
            sliderHeight={props.sliderWidth}
            {...eventHandlers}
            change={onVertical}
          >
            <div class='sp-color-hue-slider vertical'></div>
          </SpVerticalScrollbar>
          :
          <SpHorizontalScrollbar
            class={hueHorizontalClasses()}
            classList={props.classList}
            style={hueHorizontalStyles()}
            width={props.width}
            sliderX={sliderX()}
            sliderWidth={props.sliderWidth}
            {...eventHandlers}
            change={onHorizontal}
          >
            <div class='sp-color-hue-slider'></div>
          </SpHorizontalScrollbar>
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
  return Math.round((x / width) * 360)
}
