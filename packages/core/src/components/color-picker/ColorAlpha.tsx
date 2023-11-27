import { ColorAlphaProps, generateProps } from './color-alpha.props'
import { SpHorizontalScrollbar, SpVerticalScrollbar } from '../scrollbar'
import { useColorPickerPanelContext } from './ColorPickerPanel'
import { createEffect, createSignal } from 'solid-js'
import { Point } from '@spectre-ui/utils'

export const ColorAlpha = (propsRaw: ColorAlphaProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const colorPickerPanelContext = useColorPickerPanelContext()
  if (!colorPickerPanelContext) {
    throw Error('colorPickerPanelContext is undefined')
  }

  const [sliderX, setSliderX] = createSignal(0)

  const alphaStyles = () =>
    `background: linear-gradient(to right, ${colorPickerPanelContext.color().alpha(0).hexa()} 0%, 
  ${colorPickerPanelContext.color().alpha(1).hexa()} 100%);`

  createEffect(() => {
    setSliderX(alphaTransformX(colorPickerPanelContext.color().alpha(), props.width - props.sliderWidth))
  })

  function onVertical({ y }: Point) {
    colorPickerPanelContext?.setColor(value => value.alpha(xTransformAlpha(y, props.width - props.sliderWidth)))
  }

  function onHorizontal({ x }: Point) {
    colorPickerPanelContext?.setColor(value => value.alpha(xTransformAlpha(x, props.width - props.sliderWidth)))
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

//alpha转换x坐标
function alphaTransformX(alpha: number, width: number) {
  return alpha * width
}

//x坐标转换alpha
function xTransformAlpha(x: number, width: number) {
  return x / width
}
