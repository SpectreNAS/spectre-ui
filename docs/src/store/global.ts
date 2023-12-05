import { getSystemThemeType, SystemThemeType } from '@spectres/ui'
import { createStore } from 'solid-js/store'

const [store, setStore] = createStore({ 
  themeType: getSystemThemeType(), 
  version: '0.0.1',
})

export { store }

export function setThemeType(value: SystemThemeType) {
  setStore('themeType', value)
}

