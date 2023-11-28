import { createContext, useContext, createSignal, createEffect } from 'solid-js'
import { ColorPickerPanelProps, generateProps, ColorPickerPanelProviderValue } from './color-picker-panel.props'
import { mergeClasses } from '../../utils'

const ColorPickerPanelContext = createContext<ColorPickerPanelProviderValue>()

export const useColorPickerPanelContext = () => useContext(ColorPickerPanelContext)

export const ColorPickerPanel = (propsRaw: ColorPickerPanelProps) => {
  const [eventHandlers, props] = generateProps(propsRaw)

  const [color, setColor] = createSignal(props.value.hsv())

  const colorPickerPanelClasses = () => mergeClasses([
    'sp-color-picker-panel',
    props.class ?? ''
  ])

  createEffect(() => {
    setColor(props.value.hsv())
  })

  createEffect(() => {
    props.change?.(color())
  })

  return (
    <ColorPickerPanelContext.Provider value={{
      color,
      setColor,
    }}>
      <div
        class={colorPickerPanelClasses()}
        classList={props.classList}
        style={props.style}
        ref={props.ref}
        {...eventHandlers}
      >
        {props.children}
      </div>
    </ColorPickerPanelContext.Provider>
  )
}