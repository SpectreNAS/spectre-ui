import { Show, createEffect, createSignal } from 'solid-js'
import { DrawerProps, generateProps } from './drawer.props'
import { mergeClasses, mergeStyles } from '../../utils'

export const Drawer = (propsRaw: DrawerProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const [visible, setVisible] = createSignal(false)

  const drawerClasses = () => mergeClasses([
    'sp-drawer',
    props.position,
    props.class ?? ''
  ])

  const drawerStyles = () => {
    if (['left', 'right'].includes(props.position)) {
      return `width:${props.width};`
    }
    if (['top', 'bottom'].includes(props.position)) {
      return `height:${props.width};`
    }
    return ''
  }

  createEffect(() => {
    setVisible(props.value)
  })

  function onClickOverlay() {
    setVisible(false)
    emitChange()
  }

  function onClickDrawer(event: MouseEvent) {
    event.stopPropagation()
  }

  function emitChange() {
    props.change?.(visible())
  }

  return (
    <Show when={visible()}>
      <div class='sp-drawer-overlay' style='z-index: 2000' onClick={onClickOverlay}>
        <div
          class={drawerClasses()}
          classList={props.classList}
          style={mergeStyles([drawerStyles(), props.style])}
          ref={props.ref}
          {...eventHandlers}
          onClick={onClickDrawer}
        >
          {props.children}
        </div>
      </div>
    </Show>
  )
}