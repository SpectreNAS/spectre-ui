import { createStore } from 'solid-js/store'

const [store, setStore] = createStore({ isDark: false })

export const globalStore = store

export const themeType = () => globalStore.isDark ? 'dark' : 'light'

export function setIsDark(value: boolean) {
  setStore('isDark', value)
}

