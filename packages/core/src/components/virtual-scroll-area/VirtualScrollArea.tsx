import { createEffect, createSignal, onMount, on } from 'solid-js'
import { mergeClasses } from '../../utils'
import { VirtualScrollAreaProps, generateProps } from './virtual-scroll-area.props'
import { Point, Scrollbar } from '@spectre-ui/utils'
import { SpVerticalScrollbar, SpHorizontalScrollbar } from '../scrollbar'

export const VirtualScrollArea = (propsRaw: VirtualScrollAreaProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const scrollbar = new Scrollbar()
  const [verticalBarHeight, setVerticalBarHeight] = createSignal(0)
  const [verticalSliderY, setVerticalSliderY] = createSignal(0)
  const [verticalSliderHeight, setVerticalSliderHeight] = createSignal(0)
  const [horizontalBarWidth, setHorizontalBarWidth] = createSignal(0)
  const [horizontalSliderX, setHorizontalSliderX] = createSignal(0)
  const [horizontalSliderWidth, setHorizontalSliderWidth] = createSignal(0)

  const virtualScrollAreaClasses = () => mergeClasses([
    'sp-virtual-scroll-area',
    props.class ?? ''
  ])

  createEffect(on(
    () => props.scrollX,
    (value) => setHorizontalSliderX(scrollbar.scrollTo({ x: value }).thumbX),
    { defer: true },
  ))
  createEffect(on(
    () => props.scrollY,
    (value) => setVerticalSliderY(scrollbar.scrollTo({ y: value }).thumbY),
    { defer: true },
  ))

  function initViewRef(el: HTMLDivElement) {
    onMount(() => init(el))
  }

  /**
   * 根据dom初始化滚动区域
   * @param el 
   */
  function init(el: HTMLDivElement) {
    const { width, height } = el.getBoundingClientRect()
    scrollbar
      .setContentWidth(el.scrollWidth)
      .setContentHeight(el.scrollHeight)
      .setViewWidth(width)
      .setViewHeight(height)
      .scrollTo({ x: props.scrollX, y: props.scrollY })
    setVerticalBarHeight(scrollbar.viewHeight)
    setVerticalSliderHeight(scrollbar.thumbHeight)
    setVerticalSliderY(scrollbar.thumbY)
    setHorizontalBarWidth(scrollbar.viewWidth)
    setHorizontalSliderX(scrollbar.thumbX)
    setHorizontalSliderWidth(scrollbar.thumbWidth)
  }

  /**
   * 拖拽垂直滑块事件
   * @param param0 
   */
  function onVerticalSlider({ y }: Point) {

  }

  /**
     * 拖拽水平滑块事件
     * @param param0 
     */
  function onHorizontalSlider({ x }: Point) {
  }

  return (
    <div
      class={virtualScrollAreaClasses()}
      classList={props.classList}
      style={props.style}
      ref={props.ref}
      {...eventHandlers}
    >
      <div ref={initViewRef}></div>
      <SpVerticalScrollbar
        height={verticalBarHeight()}
        sliderY={verticalSliderY()}
        sliderHeight={verticalSliderHeight()}
        change={onVerticalSlider}
      />
      <SpHorizontalScrollbar
        width={horizontalBarWidth()}
        sliderX={horizontalSliderX()}
        sliderWidth={horizontalSliderWidth()}
        change={onHorizontalSlider}
      />
    </div>
  )
}