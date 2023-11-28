import { ColorAlphaProps, generateProps } from './color-alpha.props'
import { SpHorizontalScrollbar, SpVerticalScrollbar } from '../scrollbar'
import { useColorPickerPanelContext } from './ColorPickerPanel'
import { createEffect, createSignal } from 'solid-js'
import { Point } from '@spectre-ui/utils'
import { mergeClasses, mergeStyles } from '../../utils'

export const ColorAlpha = (propsRaw: ColorAlphaProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const colorPickerPanelContext = useColorPickerPanelContext()
  if (!colorPickerPanelContext) {
    throw Error('colorPickerPanelContext is undefined')
  }

  const [sliderX, setSliderX] = createSignal(0)

  const alphaVerticalClasses = () => mergeClasses([
    props.class ?? '',
    'sp-color-alpha',
  ])

  const alphaHorizontalClasses = () => mergeClasses([
    props.class ?? '',
    'sp-color-alpha',
  ])

  const alphaVerticalStyles = () => mergeStyles([
    `
    background: linear-gradient(to bottom, ${colorPickerPanelContext.color().alpha(0).hexa()} 0%, 
    ${colorPickerPanelContext.color().alpha(1).hexa()} 100%);
    --sp-vertical-scrollbar-width:${props.sliderWidth}px;
    --sp-vertical-scrollbar-slider-width:${props.sliderWidth}px;
    `,
    props.style
  ])

  const alphaHorizontalStyles = () => mergeStyles([
    `
    background: linear-gradient(to right, ${colorPickerPanelContext.color().alpha(0).hexa()} 0%, 
    ${colorPickerPanelContext.color().alpha(1).hexa()} 100%);
    --sp-horizontal-scrollbar-height:${props.sliderWidth}px;
    --sp-horizontal-scrollbar-slider-height:${props.sliderWidth}px;
    `,
    props.style
  ])

  createEffect(() => {
    setSliderX(alphaTransformX(colorPickerPanelContext.color().alpha(), props.width - props.sliderWidth))
  })

  function onVertical({ y }: Point) {
    setSliderX(y)
    colorPickerPanelContext?.setColor(value => value.alpha(xTransformAlpha(y, props.width - props.sliderWidth)))
  }

  function onHorizontal({ x }: Point) {
    setSliderX(x)
    colorPickerPanelContext?.setColor(value => value.alpha(xTransformAlpha(x, props.width - props.sliderWidth)))
  }

  return (
    <>
      {
        props.vertical ?
          <SpVerticalScrollbar
            class={alphaVerticalClasses()}
            classList={props.classList}
            style={alphaVerticalStyles()}
            height={props.width}
            sliderY={sliderX()}
            sliderHeight={props.sliderWidth}
            {...eventHandlers}
            change={onVertical}
          >
            <div class='sp-color-alpha-slider vertical'></div>
          </SpVerticalScrollbar>
          :
          <SpHorizontalScrollbar
            class={alphaHorizontalClasses()}
            classList={props.classList}
            style={alphaHorizontalStyles()}
            width={props.width}
            sliderX={sliderX()}
            sliderWidth={props.sliderWidth}
            {...eventHandlers}
            change={onHorizontal}
          >
            <div class='sp-color-alpha-slider'></div>
          </SpHorizontalScrollbar>
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
