import { Portal } from 'solid-js/web'
import { PopoverPlacement, PopoverProps, PopoverTrigger, generateProps } from './popover.props'
import { mergeClasses, clickOutside } from '../../utils'
import { Show, createEffect, createSignal, on, onMount } from 'solid-js'
import { ValueChanged } from '../../types'

interface PopoverInset {
  left?: number
  bottom?: number
  right?: number
  top?: number
}

export const Popover = (propsRaw: PopoverProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  let targetRef: HTMLDivElement | undefined

  const popoverClasses = () => mergeClasses([
    'sp-popover',
    props.class ?? ''
  ])

  const [enterTarget, setEnterTarget] = createSignal(false)
  const [enterPopover, setEnterPopover] = createSignal(false)
  const [visiblePopover, setVisiblePopover] = createSignal(false)

  let targetTimeout: NodeJS.Timeout | undefined
  let popoverTimeout: NodeJS.Timeout | undefined

  createEffect(on(enterTarget, () => {
    if (!enterTarget()) {
      clearTimeout(targetTimeout)
      clearTimeout(popoverTimeout)
      targetTimeout = setTimeout(() => {
        if (!enterTarget()) {
          setVisiblePopover(enterPopover())
        }
      }, props.hideAfter)
    } else {
      setVisiblePopover(true)
    }
  }, { defer: true }))

  createEffect(on(enterPopover, () => {
    if (!enterPopover()) {
      clearTimeout(popoverTimeout)
      clearTimeout(targetTimeout)
      popoverTimeout = setTimeout(() => {
        if (!enterPopover()) {
          setVisiblePopover(enterTarget())
        }
      }, props.hideAfter)
    } else {
      setVisiblePopover(true)
    }
  }, { defer: true }))

  function initPopoverRef(popover: HTMLDivElement) {
    onMount(() => {
      if (!targetRef) {
        return
      }
      const target = targetRef
      clickOutside([target, popover], (event) => {
        onTrigger('click', onClickOutsideTarget)(event)
        onTrigger('contextmenu', onContextMenuOutsideTarget)(event)
        onTrigger('focus', onFocusOutTarget)(event)
      })
      initPopoverStyles(popover)
      initPopoverEvents(popover)
      setPopoverPosition(
        popover,
        getPopoverPosition(
          props.placement as PopoverPlacement,
          target.getBoundingClientRect(),
          popover.getBoundingClientRect(),
          window.innerWidth,
          window.innerHeight
        )
      )
      const scrollableElement = findScrollableParentElement(targetRef)
      scrollableElement?.addEventListener('scroll', () => {
        setPopoverPosition(
          popover,
          getPopoverPosition(
            props.placement as PopoverPlacement,
            target.getBoundingClientRect(),
            popover.getBoundingClientRect(),
            window.innerWidth,
            window.innerHeight
          )
        )
      })
    })
  }

  function initPopoverEvents(el: HTMLDivElement) {
    el.addEventListener('mouseenter', onTrigger('hover', onMouseEnterPopover))
    el.addEventListener('mouseleave', onTrigger('hover', onMouseLeavePopover))
  }

  function initPopoverStyles(el: HTMLDivElement) {
    el.style.position = 'absolute'
    el.style.backgroundColor = 'var(--sp-popover-bg-color)'
    el.style.boxShadow = 'var(--sp-popover-shadow)'
    el.style.borderRadius = 'var(--sp-popover-border-radius)'
    el.style.borderWidth = 'var(--sp-popover-border-width)'
    el.style.borderStyle = 'var(--sp-popover-border-style)'
    el.style.borderColor = 'var(--sp-popover-border-color)'
  }

  function setPopoverPosition(el: HTMLDivElement, value: PopoverInset) {
    if (value.left !== undefined) {
      el.style.left = `${value.left}px`
    }
    if (value.bottom !== undefined) {
      el.style.bottom = `${value.bottom}px`
    }
    if (value.right !== undefined) {
      el.style.right = `${value.right}px`
    }
    if (value.top !== undefined) {
      el.style.top = `${value.top}px`
    }
  }

  function onTrigger(triggerType: PopoverTrigger, callback: ValueChanged<Event>) {
    return (event: Event) => {
      if (props.trigger === triggerType) {
        callback(event)
      }
    }
  }

  function onMouseEnterTarget() {
    setEnterTarget(true)
  }

  function onMouseLeaveTarget() {
    setEnterTarget(false)
  }

  function onMouseEnterPopover() {
    setEnterPopover(true)
  }

  function onMouseLeavePopover() {
    setEnterPopover(false)
  }

  function onClickTarget() {
    setVisiblePopover(true)
  }

  function onClickOutsideTarget() {
    setVisiblePopover(false)
  }

  function onContextMenuTarget(event: Event) {
    event.preventDefault()
    setVisiblePopover(true)
  }

  function onContextMenuOutsideTarget() {
    setVisiblePopover(false)
  }

  function onFocusInTarget() {
    setVisiblePopover(true)
  }

  function onFocusOutTarget() {
    setVisiblePopover(false)
  }

  return (
    <div
      class={popoverClasses()}
      ref={targetRef}
      {...eventHandlers}
      onMouseEnter={onTrigger('hover', onMouseEnterTarget)}
      onMouseLeave={onTrigger('hover', onMouseLeaveTarget)}
      onClick={onTrigger('click', onClickTarget)}
      onContextMenu={onTrigger('contextmenu', onContextMenuTarget)}
      onFocusIn={onTrigger('focus', onFocusInTarget)}
    >
      {props.children}
      <Show when={visiblePopover()}>
        <Portal mount={document.body} ref={initPopoverRef}>
          {props.renderContent}
        </Portal>
      </Show>
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

function getPopoverPosition(placement: PopoverPlacement, targetRect: DOMRect, popoverRect: DOMRect, innerWidth: number, innerHeight: number, offset = 8): PopoverInset {
  const popoverInset: PopoverInset = {}
  if (placement === 'bottom') {
    return { left: getCenterLeft(targetRect.left, targetRect.width, popoverRect.width), top: targetRect.bottom + offset }
  } else if (placement === 'bottom-start') {
    return { left: targetRect.right - popoverRect.width, top: targetRect.bottom + offset }
  } else if (placement === 'bottom-end') {
    return { left: targetRect.left, top: targetRect.bottom + offset }
  } else if (placement === 'top') {
    return { left: getCenterLeft(targetRect.left, targetRect.width, popoverRect.width), bottom: innerHeight - targetRect.top + offset }
  } else if (placement === 'top-start') {
    return { left: targetRect.right - popoverRect.width, bottom: innerHeight - targetRect.top + offset }
  } else if (placement === 'top-end') {
    return { left: targetRect.left, bottom: innerHeight - targetRect.top + offset }
  } else if (placement === 'left') {
    return { right: innerWidth - targetRect.left + offset, top: getCenterLeft(targetRect.top, targetRect.height, popoverRect.height) }
  } else if (placement === 'left-start') {
    return { right: innerWidth - targetRect.left + offset, top: targetRect.bottom - popoverRect.height }
  } else if (placement === 'left-end') {
    return { right: innerWidth - targetRect.left + offset, top: targetRect.top }
  } else if (placement === 'right') {
    return { left: targetRect.right + offset, top: getCenterLeft(targetRect.top, targetRect.height, popoverRect.height) }
  } else if (placement === 'right-start') {
    return { left: targetRect.right + offset, top: targetRect.bottom - popoverRect.height }
  } else if (placement === 'right-end') {
    return { left: targetRect.right + offset, top: targetRect.top }
  }
  return popoverInset
}

//获取popover中间的位置
function getCenterLeft(left: number, width: number, popoverWidth: number): number {
  return left + width / 2 - popoverWidth / 2
}

