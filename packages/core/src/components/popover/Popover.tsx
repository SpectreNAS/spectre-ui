import { Portal } from 'solid-js/web'
import { PopoverPlacement, PopoverProps, generateProps } from './popover.props'
import { mergeClasses } from '../../utils'
import { Show, createSignal, onMount } from 'solid-js'
import { number } from 'yup'

interface LeftBottom {
  left: number
  bottom: number
}

interface LeftTop {
  left: number
  top: number
}

export const Popover = (propsRaw: PopoverProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  let popoverRef: HTMLDivElement | undefined

  const popoverClasses = () => mergeClasses([
    'sp-popover',
    props.class ?? ''
  ])

  function initTargetRef(el: HTMLDivElement) {

    onMount(() => {
      const scrollableElement = findScrollableParentElement(el)
      setPopoverPosition(el.getBoundingClientRect())
      scrollableElement?.addEventListener('scroll', () => {
        setPopoverPosition(el.getBoundingClientRect())
      })
    })
  }

  function initPopoverRef(el: HTMLDivElement) {
    popoverRef = el
    el.style.position = 'absolute'
    el.style.width = `${props.width}px`
    el.style.backgroundColor = 'var(--bg-common-highest)'
    el.style.boxShadow = 'var(--sp-shadow-default)'
  }

  function setPopoverPosition(targetRect: DOMRect) {

  }

  return (
    <div class={popoverClasses()} ref={initTargetRef}>
      {props.children}
      {/* <Portal mount={document.body} ref={initPopoverRef}>
        <div style='width:100%; height:100px'></div>
      </Portal> */}
    </div>
  )
}

/**
 * 递归查询可滚动的父级元素
 * @param el 
 * @returns 
 */
function findScrollableParentElement(el: HTMLElement): HTMLElement | undefined {
  if (el.scrollHeight > el.offsetHeight) {
    return el
  }
  if (el.parentElement) {
    return findScrollableParentElement(el.parentElement)
  }
}

//获取popover位于顶部中间的位置
function getTopCenterPosition(left: number, bottom: number, width: number, height: number, popoverWidth: number): { left: number, bottom: number, } {
  return { left: left + width / 2 - popoverWidth / 2, bottom: bottom }
}

//获取popover位于底部中间的位置
function getBottomCenterPosition(left: number, top: number, width: number, height: number, popoverWidth: number): LeftTop {
  return { left: left + width / 2 - popoverWidth / 2, top: top + height }
}

