import { createContext, useContext, createSignal, createEffect, on } from 'solid-js'
import { ColorPickerPanelProps, generateProps, ColorPickerPanelProviderValue } from './color-picker-panel.props'

const ColorPickerPanelContext = createContext<ColorPickerPanelProviderValue>()

export const useColorPickerPanelContext = () => useContext(ColorPickerPanelContext)

export const ColorPickerPanel = (propsRaw: ColorPickerPanelProps) => {
  const props = generateProps(propsRaw)

  const [color, setColor] = createSignal(props.value.hsv())
  const [hue, setHue] = createSignal(0)

  createEffect(on(() => props.value, () => {
    const hsv = props.value.hsv()
    if (hsv.hexa() !== color().hexa()) {
      setColor(hsv)
      setHue(hsv.hue())
    }
  }, { defer: true }))

  createEffect(on(color, () => props.change?.(color()), { defer: true }))

  return (
    <ColorPickerPanelContext.Provider value={{
      color,
      setColor,
      hue,
      setHue,
    }}>
      {props.children}
    </ColorPickerPanelContext.Provider>
  )
}