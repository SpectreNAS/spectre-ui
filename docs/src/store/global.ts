import { createStore } from 'solid-js/store'
import { getSystemThemeType, SystemThemeType } from '@spectre-ui/core'
import { componentsRoutes } from '@/router/components-routes'
const [store, setStore] = createStore({ 
  themeType: getSystemThemeType(), 
  version: '0.0.1',
  navMenus: [
    {
      title: 'Components',
      children: componentsRoutes.map(item => ({ title: item.title, value: `/components${item.path}` }))
    }
  ] 
})

export { store }

export function setThemeType(value: SystemThemeType) {
  setStore('themeType', value)
}

