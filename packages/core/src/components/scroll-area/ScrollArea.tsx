import { createEffect, createSignal, onMount, on, Show } from 'solid-js'
import { mergeClasses } from '../../utils'
import { ScrollAreaProps, generateProps } from './scroll-area.props'
import { Point, Scrollbar } from '@spectre-ui/utils'
import { SpVerticalScrollbar, SpHorizontalScrollbar } from '../scrollbar'

export const ScrollArea = (propsRaw: ScrollAreaProps) => {

  const [eventHandlers, props] = generateProps(propsRaw)

  let viewRef: HTMLDivElement | undefined
  let contentRef: HTMLDivElement | undefined
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

  const showVerticalScroll = () => verticalSliderHeight() > 0
  const showHorizontalScroll = () => horizontalSliderWidth() > 0

  createEffect(on(
    () => props.scrollX,
    (value) => setScrollX(value),
    { defer: true },
  ))
  createEffect(on(
    () => props.scrollY,
    (value) => setScrollY(value),
    { defer: true },
  ))

  onMount(() => {
    if (viewRef) {
      watchViewResize(viewRef)
    }
    if (contentRef) {
      watchContentResize(contentRef)
    }
  })

  /**
   * 监听可见区域大小变化
   * @param el 
   */
  function watchViewResize(el: HTMLDivElement) {
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (entry) {
        const { width, height } = entry.target.getBoundingClientRect()
        if (width !== scrollbar.viewWidth) {
          scrollbar.setViewWidth(width)
          setHorizontalBarWidth(scrollbar.viewWidth)
          setHorizontalSliderX(scrollbar.thumbX)
          setHorizontalSliderWidth(scrollbar.thumbWidth)
        }
        if (height !== scrollbar.viewHeight) {
          scrollbar.setViewHeight(height)
          setVerticalBarHeight(scrollbar.viewHeight)
          setVerticalSliderHeight(scrollbar.thumbHeight)
          setVerticalSliderY(scrollbar.thumbY)
        }
        setScrollY(props.scrollY)
        setScrollX(props.scrollX)
      }
    })
    resizeObserver.observe(el, {})
  }

  /**
   * 监听内容大小变化
   * @param el 
   */
  function watchContentResize(el: HTMLDivElement) {
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (entry) {
        const width = entry.target.scrollWidth
        const height = entry.target.scrollHeight
        if (width !== scrollbar.contentWidth) {
          scrollbar.setContentWidth(width)
          setHorizontalBarWidth(scrollbar.viewWidth)
          setHorizontalSliderX(scrollbar.thumbX)
          setHorizontalSliderWidth(scrollbar.thumbWidth)
        }
        if (height !== scrollbar.contentHeight) {
          scrollbar.setContentHeight(height)
          setVerticalBarHeight(scrollbar.viewHeight)
          setVerticalSliderHeight(scrollbar.thumbHeight)
          setVerticalSliderY(scrollbar.thumbY)
        }
        setScrollY(props.scrollY)
        setScrollX(props.scrollX)
      }
    })
    resizeObserver.observe(el)
  }

  /**
   * 设置原生滚动y轴
   * @param y 
   */
  function setViewScrollY(y: number) {
    if (viewRef) {
      viewRef.scrollTop = y
    }
  }

  /**
   * 设置原生滚动x轴
   * @param x 
   */
  function setViewScrollX(x: number) {
    if (viewRef) {
      viewRef.scrollLeft = x
    }
  }

  /**
   * 设置滚动y轴
   * @param y 
   */
  function setScrollY(y: number) {
    setVerticalSliderY(scrollbar.scrollTo({ y }).thumbY)
    setViewScrollY(scrollbar.scrollY)
  }

  /**
   * 设置滚动x轴
   * @param x 
   */
  function setScrollX(x: number) {
    setHorizontalSliderX(scrollbar.scrollTo({ x }).thumbX)
    setViewScrollX(scrollbar.scrollX)
  }

  /**
   * 拖拽垂直滑块事件
   * @param param0 
   */
  function onVerticalSlider({ y }: Point) {
    setViewScrollY(scrollbar.thumbTo({ y }).scrollY)
    emitScroll()
  }

  /**
   * 拖拽水平滑块事件
   * @param param0 
   */
  function onHorizontalSlider({ x }: Point) {
    setViewScrollX(scrollbar.thumbTo({ x }).scrollX)
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
      <div class='sp-scroll-area-view' ref={viewRef} onScroll={onWheelScroll}>
        <div ref={contentRef}>
          {props.children}
        </div>
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
  )
}