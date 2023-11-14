import { createSignal, onMount } from 'solid-js'
import { mergeClasses } from '../../utils'
import { ScrollAreaProps, generateProps } from './scroll-area.props'
import { SpDraggable } from '../draggable'
import { Point, Scrollbar } from '@spectre-ui/utils'

export const ScrollArea = (propsRaw: ScrollAreaProps) => {

  const [eventHandlers, props] = generateProps(propsRaw)

  let viewRef: HTMLDivElement | undefined
  const scrollbar = new Scrollbar()
  const [verticalSliderY, setVerticalSliderY] = createSignal(0)
  const [verticalSliderMaxY, setVerticalSliderMaxY] = createSignal(0)
  const [verticalSliderHeight, setVerticalSliderHeight] = createSignal(0)
  const [horizontalSliderX, setHorizontalSliderX] = createSignal(0)
  const [horizontalSliderMaxX, setHorizontalSliderMaxX] = createSignal(0)
  const [horizontalSliderWidth, setHorizontalSliderWidth] = createSignal(0)

  const scrollAreaClasses = () => mergeClasses([
    'sp-scroll-area',
    props.class ?? ''
  ])
  const verticalSliderStyles = () => `height:${verticalSliderHeight()}px;`
  const horizontalSliderStyles = () => `width:${horizontalSliderWidth()}px;`

  function setViewRef(el: HTMLDivElement) {
    viewRef = el
    onMount(() => {
      const { width, height } = el.getBoundingClientRect()
      scrollbar
        .setContentWidth(el.scrollHeight)
        .setContentHeight(el.scrollHeight)
        .setViewWidth(width)
        .setViewHeight(height)
      setVerticalSliderY(scrollbar.thumbY)
      setHorizontalSliderX(scrollbar.thumbX)
      setVerticalSliderMaxY(scrollbar.viewHeight - scrollbar.thumbHeight)
      setHorizontalSliderMaxX(scrollbar.viewWidth - scrollbar.thumbWidth)
      setVerticalSliderHeight(scrollbar.thumbHeight)
      setHorizontalSliderWidth(scrollbar.thumbWidth)
    })
  }

  function setViewScroll(point: Partial<Point>) {
    if (viewRef?.scrollLeft !== undefined && point.x !== undefined) {
      viewRef.scrollLeft = point.x
    }

    if (viewRef?.scrollTop !== undefined && point.y !== undefined) {
      viewRef.scrollTop = point.y
    }
  }

  function onVerticalSlider({ y }: Point) {
    setViewScroll({ y: scrollbar.thumbTo({ y }).scrollY })
  }

  function onHorizontalSlider({ x }: Point) {
    setViewScroll({ x: scrollbar.thumbTo({ x }).scrollX })
  }

  function onWheelScroll(event: Event) {
    const target = event.target as HTMLDivElement
    scrollbar.scrollTo({ y: target.scrollTop })
    setVerticalSliderY(scrollbar.thumbY)
    setHorizontalSliderX(scrollbar.thumbX)
  }

  return (
    <div
      class={scrollAreaClasses()}
      classList={props.classList}
      style={props.style}
      ref={props.ref}
      {...eventHandlers}
    >
      <div class='sp-scroll-area-view' ref={setViewRef} onScroll={onWheelScroll}>
        <div>
          {props.children}
        </div>
      </div>
      <div class='sp-scroll-area-vertical-bar'>
        <SpDraggable
          class='sp-scroll-area-vertical-slider'
          style={verticalSliderStyles()}
          only='y'
          y={verticalSliderY()}
          minY={0}
          maxY={verticalSliderMaxY()}
          change={onVerticalSlider}
        />
      </div>
      <div class='sp-scroll-area-horizontal-bar'>
        <SpDraggable
          class='sp-scroll-area-horizontal-slider'
          style={horizontalSliderStyles()}
          only='x'
          x={horizontalSliderX()}
          minX={0}
          maxX={horizontalSliderMaxX()}
          change={onHorizontalSlider}
        />
      </div>
    </div>
  )
}