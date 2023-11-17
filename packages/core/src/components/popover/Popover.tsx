import { Portal } from 'solid-js/web'
import { PopoverPlacement, PopoverProps, generateProps } from './popover.props'
import { mergeClasses } from '../../utils'
import { Show, createSignal, onMount } from 'solid-js'

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
      const { left, top, width, height } = el.getBoundingClientRect()
      setPopoverPosition(left, top, width, height)
      scrollableElement?.addEventListener('scroll', () => {
        const { left, top, width, height } = el.getBoundingClientRect()
        setPopoverPosition(left, top, width, height)
      })
    })
  }

  function initPopoverRef(el: HTMLDivElement) {
    popoverRef = el
    el.style.position = 'absolute'
    el.style.width = `${props.width}px`
    el.style.backgroundColor = 'var(--bg-common-highest)'
    el.style.boxShadow = '0px 12px 24px 0px rgba(0, 0, 0, 0.16), 0px 3px 6px 0px rgba(0, 0, 0, 0.12)'
  }

  function setPopoverPosition(left: number, top: number, width: number, height: number) {
    switch (props.placement as PopoverPlacement) {
      case 'bottom':
        setBottomCenterPosition(left, top, width, height)
      case 'top':
        const position = getTopCenterPosition(left, window.innerHeight - top, width, height, props.width)
    }

  }

  function setBottomCenterPosition(left: number, top: number, width: number, height: number) {
    if (!popoverRef) {
      return
    }
    const position = getBottomCenterPosition(left, top, width, height, props.width)
    popoverRef.style.left = `${position.left}px`
    popoverRef.style.top = `${position.top}px`
  }

  function setTopCenterPosition(left: number, top: number, width: number, height: number) {
    if (!popoverRef) {
      return
    }
    const position = getBottomCenterPosition(left, top, width, height, props.width)
    popoverRef.style.left = `${position.left}px`
    popoverRef.style.top = `${position.top}px`
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
  return { left: 0, bottom: 0 }
}

//获取popover位于底部中间的位置
function getBottomCenterPosition(left: number, top: number, width: number, height: number, popoverWidth: number): { left: number, top: number, } {
  return { left: left + width / 2 - popoverWidth / 2, top: top + height }
}

