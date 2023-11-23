import { createStore } from 'solid-js/store'
import { getSystemThemeType, SystemThemeType } from '@spectre-ui/core'
const [store, setStore] = createStore({ themeType: getSystemThemeType(), version: '0.0.1' })

export { store }

export function setThemeType(value: SystemThemeType) {
  setStore('themeType', value)
}

