import { createEffect, createSignal } from 'solid-js'
import { mergeClasses, mergeStyles, getRangeValue } from '../../utils'
import { DraggableProps, generateProps } from './draggable.props'
import { Point } from '@spectre-ui/utils'

export const Draggable = (propsRaw: DraggableProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const [x, setX] = createSignal(0)
  const [y, setY] = createSignal(0)
  const draggableClasses = () => mergeClasses(['sp-draggable', props.class ?? ''])

  const draggableStyles = () => `left: ${x()}px; top: ${y()}px`

  createEffect(() => {
    setX(props.x)
  })

  createEffect(() => {
    setY(props.y)
  })

  function dragRef(el: HTMLDivElement) {
    props.ref = el
    el.addEventListener('pointerdown', onDragStart())
  }

  function onDragStart() {
    let startX = 0
    let startY = 0
    return (downEvent: PointerEvent) => {
      startX = downEvent.pageX - x()
      startY = downEvent.pageY - y()
      const onDrag = (moveEvent: PointerEvent) => {
        const _x = getRangeValue(moveEvent.pageX - startX, props.minX, props.maxX)
        const _y = getRangeValue(moveEvent.pageY - startY, props.minY, props.maxY)
        if (props.only === 'x') {
          setX(_x)
          emitChange({ x: _x })
        } else if (props.only === 'y') {
          setY(_y)
          emitChange({ y: _y })
        } else {
          setX(_x)
          setY(_y)
          props.change?.({ x: _x, y: _y })
        }
      }
      const onDragEnd = () => {
        window.removeEventListener('pointerdown', onDragStart)
        window.removeEventListener('pointermove', onDrag)
        window.removeEventListener('pointerup', onDragEnd)
      }
      window.addEventListener('pointermove', onDrag)
      window.addEventListener('pointerup', onDragEnd)
    }
  }

  function emitChange(point: Partial<Point>) {
    props.change?.({ x: point.x ?? x(), y: point.y ?? y() })
  }

  return (
    <div
      class={draggableClasses()}
      classList={props.classList}
      style={mergeStyles([props.style, draggableStyles()])}
      ref={dragRef}
      {...eventHandlers}
    >
      {props.children}
    </div>
  )
}

