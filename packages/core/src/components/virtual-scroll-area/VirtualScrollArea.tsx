import { Point, Scrollbar } from '@spectre-ui/utils'
import { createEffect, createSignal, onMount, on, createContext, useContext, Show } from 'solid-js'

import { VirtualScrollAreaProps, generateProps, VirtualScrollAreaProviderValue } from './virtual-scroll-area.props'
import { ValueChanged } from '../../types'
import { mergeClasses } from '../../utils'
import { SpVerticalScrollbar, SpHorizontalScrollbar } from '../scrollbar'

const VirtualScrollAreaContext = createContext<VirtualScrollAreaProviderValue>()

export const useVirtualScrollContext = () => useContext(VirtualScrollAreaContext)

export const VirtualScrollArea = (propsRaw: VirtualScrollAreaProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const scrollbar = new Scrollbar()
  const [verticalBarHeight, setVerticalBarHeight] = createSignal(0)
  const [verticalSliderY, setVerticalSliderY] = createSignal(0)
  const [verticalSliderHeight, setVerticalSliderHeight] = createSignal(0)
  const [horizontalBarWidth, setHorizontalBarWidth] = createSignal(0)
  const [horizontalSliderX, setHorizontalSliderX] = createSignal(0)
  const [horizontalSliderWidth, setHorizontalSliderWidth] = createSignal(0)
  const listeners: ValueChanged<Point>[] = []

  const showVerticalScroll = () => verticalSliderHeight() > 0
  const showHorizontalScroll = () => horizontalSliderWidth() > 0

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
    scrollbar.thumbTo({ y })
    execListeners()
  }

  /**
     * 拖拽水平滑块事件
     * @param param0 
     */
  function onHorizontalSlider({ x: _ }: Point) {
    //
  }

  function setContentHeight(value: number) {
    scrollbar.setContentHeight(value)
    setVerticalSliderHeight(scrollbar.thumbHeight)
    setVerticalSliderY(scrollbar.thumbY)
  }

  function addListener(listener: ValueChanged<Point>) {
    listeners.push(listener)
  }

  function execListeners() {
    listeners.forEach(listener => listener({ x: scrollbar.scrollX, y: scrollbar.scrollY }))
  }

  function onWheel(event: WheelEvent) {
    scrollbar.scrollTo({ y: scrollbar.scrollY + (event.deltaY > 0 ? 40 : -40) })
    setVerticalSliderY(scrollbar.thumbY)
    execListeners()
  }

  return (
    <VirtualScrollAreaContext.Provider value={{
      setContentHeight,
      viewHeight: verticalBarHeight,
      addListener
    }}>
      <div
        class={virtualScrollAreaClasses()}
        classList={props.classList}
        style={props.style}
        ref={props.ref}
        {...eventHandlers}
      >
        <div class='sp-virtual-scroll-area-view' ref={initViewRef} onWheel={onWheel}>
          {props.children}
        </div>
        <Show when={showVerticalScroll()}>
          <SpVerticalScrollbar
            height={verticalBarHeight()}
            sliderY={verticalSliderY()}
            sliderHeight={verticalSliderHeight()}
            change={onVerticalSlider}
          />
        </Show>
        <Show when={showHorizontalScroll()}>
          <SpHorizontalScrollbar
            width={horizontalBarWidth()}
            sliderX={horizontalSliderX()}
            sliderWidth={horizontalSliderWidth()}
            change={onHorizontalSlider}
          />
        </Show>
      </div>
    </VirtualScrollAreaContext.Provider>
  )
}