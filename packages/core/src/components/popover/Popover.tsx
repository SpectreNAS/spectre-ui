import { Portal } from 'solid-js/web'
import { PopoverProps, generateProps } from './popover.props'
import { mergeClasses } from '../../utils'
import { Show, createSignal, onMount } from 'solid-js'
import { Point } from '@spectre-ui/utils'

export const Popover = (propsRaw: PopoverProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const [targetRef, setTargetRef] = createSignal<HTMLDivElement>()
  let popoverRef: HTMLDivElement | undefined

  const popoverClasses = () => mergeClasses([
    'sp-popover',
    props.class ?? ''
  ])

  function initTargetRef(el: HTMLDivElement) {
    onMount(() => {
      const { left, top, width, height } = el.getBoundingClientRect()
      const position = getBottomCenterPosition(left, top, width, height, props.width)
      if (popoverRef) {
        popoverRef.style.left = `${position.x}px`
        popoverRef.style.top = `${position.y}px`
      }
    })
  }

  function initPopoverRef(el: HTMLDivElement) {
    popoverRef = el
    el.style.position = 'absolute'
    el.style.width = `${props.width}px`
    el.style.backgroundColor = 'var(--bg-common-highest)'
    el.style.boxShadow = '0px 12px 24px 0px rgba(0, 0, 0, 0.16), 0px 3px 6px 0px rgba(0, 0, 0, 0.12)'
  }

  return (
    <div class='sp-popover' ref={initTargetRef}>
      {props.children}
      <Portal mount={document.body} ref={initPopoverRef}>
        <div style='width:100%; height:100px'></div>
      </Portal>

    </div>
  )
}

function getBottomCenterPosition(x: number, y: number, width: number, height: number, popoverWidth: number): Point {
  return { x: x + width / 2 - popoverWidth / 2, y: y + height }
}