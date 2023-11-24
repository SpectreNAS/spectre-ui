import { createStore } from 'solid-js/store'
import { getSystemThemeType, SystemThemeType } from '@spectre-ui/core'
const [store, setStore] = createStore({ 
  themeType: getSystemThemeType(), 
  version: '0.0.1',
  navMenus: [
    {
      title: 'Components',
      children: [
        {
          title: 'Alerts',
          value: '/components/alerts'
        },
        {
          title: 'Badges',
          value: '/components/badges',
        },
        {
          title: 'Buttons',
          value: '/components/buttons',
        },
        {
          title: 'Links',
          value: '/components/links',
        },
        {
          title: 'Tags',
          value: '/components/tags',
        },

        {
          title: 'Checkboxes',
          value: '/components/checkboxes',
        },
        {
          title: 'Radios',
          value: '/components/radios',
        },
        {
          title: 'Inputs',
          value: '/components/inputs',
        },
        {
          title: 'InputNumbers',
          value: '/components/inputNumbers',
        },
        {
          title: 'Selects',
          value: '/components/selects',
        },
        {
          title: 'CascadeSelects',
          value: '/components/cascadeSelect',
        },
        {
          title: 'Switches',
          value: '/components/switches',
        },
        {
          title: 'Sliders',
          value: '/components/sliders',
        },
        {
          title: 'DateTimePickers',
          value: '/components/dateTimePickers',
        },
        {
          title: 'TimePickers',
          value: '/components/timePickers',
        },
        {
          title: 'ColorPickers',
          value: '/components/colorPickers',
        },
        {
          title: 'Transfers',
          value: '/components/transfers',
        },
        {
          title: 'Uploader',
          value: '/components/uploader',
        },
        {
          title: 'Forms',
          value: '/components/forms',
        },
        {
          title: 'ScrollAreas',
          value: '/components/scrollAreas',
        },
        {
          title: 'VirtualScrollAreas',
          value: '/components/virtualScrollAreas',
        },
        {
          title: 'Table',
          value: '/components/tables',
        },
        {
          title: 'Pagination',
          value: '/components/pagination',
        },
        {
          title: 'Lists',
          value: '/components/lists',
        },
        {
          title: 'Tabs',
          value: '/components/tabs',
        },
        {
          title: 'Breadcrumbs',
          value: '/components/breadcrumbs',
        },
        {
          title: 'ContextMenus',
          value: '/components/contextMenus',
        },
        {
          title: 'DropdownMenus',
          value: '/components/dropdownMenus',
        },
        {
          title: 'Dialogs',
          value: '/components/dialogs',
        },
        {
          title: 'Drawers',
          value: '/components/drawers',
        },
        {
          title: 'Messages',
          value: '/components/messages',
        },
        {
          title: 'Notifications',
          value: '/components/notifications',
        },
        {
          title: 'Popovers',
          value: '/components/popovers',
        },
        {
          title: 'Tooltips',
          value: '/components/tooltips',
        },
        {
          title: 'Loadings',
          value: '/components/loadings',
        },
        {
          title: 'Progresses',
          value: '/components/progresses',
        },
        {
          title: 'Calendar',
          value: '/components/calendars',
        },
        {
          title: 'Brushes',
          value: '/components/brushes',
        },
        {
          title: 'Draggable',
          value: '/components/draggable',
        },
        {
          title: 'Resizable',
          value: '/components/resizable',
        }
      ]
    }
  ] 
})

export { store }

export function setThemeType(value: SystemThemeType) {
  setStore('themeType', value)
}

