import { getSystemThemeType, SystemThemeType } from '@spectres/ui'
import { createStore } from 'solid-js/store'

import { componentsRoutes } from '@/router/components-routes'
import { guidesRoutes } from '@/router/guides.routes'

const [store, setStore] = createStore({ 
  themeType: getSystemThemeType(), 
  version: '0.0.1',
  navMenus: [
    {
      title: 'Guides',
      children: guidesRoutes.map(item => ({ title: item.title, value: `/guides${item.path}` }))
    },
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

