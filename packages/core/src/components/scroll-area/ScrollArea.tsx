import { createEffect, createSignal, onMount, on } from 'solid-js'
import { mergeClasses } from '../../utils'
import { ScrollAreaProps, generateProps } from './scroll-area.props'
import { Point, Scrollbar } from '@spectre-ui/utils'
import { SpVerticalScrollbar, SpHorizontalScrollbar } from '../scrollbar'

export const ScrollArea = (propsRaw: ScrollAreaProps) => {

  const [eventHandlers, props] = generateProps(propsRaw)

  let viewRef: HTMLDivElement | undefined
  const scrollbar = new Scrollbar()
  const [verticalBarHeight, setVerticalBarHeight] = createSignal(0)
  const [verticalSliderY, setVerticalSliderY] = createSignal(0)
  const [verticalSliderHeight, setVerticalSliderHeight] = createSignal(0)
  const [horizontalBarWidth, setHorizontalBarWidth] = createSignal(0)
  const [horizontalSliderX, setHorizontalSliderX] = createSignal(0)
  const [horizontalSliderWidth, setHorizontalSliderWidth] = createSignal(0)

  const scrollAreaClasses = () => mergeClasses([
    'sp-scroll-area',
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
    viewRef = el
    onMount(() => init(el))
  }

  /**
   * 根据dom初始化滚动区域
   * @param el 
   */
  function init(el: HTMLDivElement) {
    const { width, height } = el.getBoundingClientRect()
    scrollbar
      .setContentWidth(el.scrollHeight)
      .setContentHeight(el.scrollHeight)
      .setViewWidth(width)
      .setViewHeight(height)
      .scrollTo({ x: props.scrollX, y: props.scrollY })
    el.scrollLeft = scrollbar.scrollX
    el.scrollTop = scrollbar.scrollY
    setVerticalBarHeight(scrollbar.viewHeight)
    setVerticalSliderHeight(scrollbar.thumbHeight)
    setVerticalSliderY(scrollbar.thumbY)
    setHorizontalBarWidth(scrollbar.viewWidth)
    setHorizontalSliderX(scrollbar.thumbX)
    setHorizontalSliderWidth(scrollbar.thumbWidth)
  }

  /**
   * 设置原生滚动条滚动位置
   * @param point 
   */
  function setViewScroll(point: Partial<Point>) {
    if (viewRef?.scrollLeft !== undefined && point.x !== undefined) {
      viewRef.scrollLeft = point.x
    }
    if (viewRef?.scrollTop !== undefined && point.y !== undefined) {
      viewRef.scrollTop = point.y
    }
  }

  /**
   * 拖拽垂直滑块事件
   * @param param0 
   */
  function onVerticalSlider({ y }: Point) {
    setViewScroll({ y: scrollbar.thumbTo({ y }).scrollY })
    emitScroll()
  }

  /**
   * 拖拽水平滑块事件
   * @param param0 
   */
  function onHorizontalSlider({ x }: Point) {
    setViewScroll({ x: scrollbar.thumbTo({ x }).scrollX })
    emitScroll()
  }

  /**
   * 滚轮滚动事件
   * @param event 
   */
  function onWheelScroll(event: Event) {
    const target = event.target as HTMLDivElement
    scrollbar.scrollTo({ x: target.scrollLeft, y: target.scrollTop })
    setVerticalSliderY(scrollbar.thumbY)
    setHorizontalSliderX(scrollbar.thumbX)
    emitScroll()
  }

  /**
   * 触发组件滚动事件
   */
  function emitScroll() {
    props.scroll?.({ x: scrollbar.scrollX, y: scrollbar.scrollY })
  }

  return (
    <div
      class={scrollAreaClasses()}
      classList={props.classList}
      style={props.style}
      ref={props.ref}
      {...eventHandlers}
    >
      <div class='sp-scroll-area-view' ref={initViewRef} onScroll={onWheelScroll}>
        <div>
          {props.children}
        </div>
      </div>
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