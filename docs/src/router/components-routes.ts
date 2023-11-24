import { lazy } from 'solid-js'

export const componentsRoutes = [
  {
    title: 'Alerts',
    path: '/alerts',
    component: lazy(() => import('../pages/alerts')),
  },
  {
    title: 'Badges',
    path: '/badges',
  },
  {
    title: 'Buttons',
    path: '/buttons',
    component: lazy(() => import('../pages/buttons')),
  },
  {
    title: 'Links',
    path: '/links',
  },
  {
    title: 'Tags',
    path: '/tags',
  },

  {
    title: 'Checkboxes',
    path: '/checkboxes',
  },
  {
    title: 'Radios',
    path: '/radios',
  },
  {
    title: 'Inputs',
    path: '/inputs',
  },
  {
    title: 'InputNumbers',
    path: '/inputNumbers',
  },
  {
    title: 'Selects',
    path: '/selects',
  },
  {
    title: 'CascadeSelects',
    path: '/cascadeSelect',
  },
  {
    title: 'Switches',
    path: '/switches',
  },
  {
    title: 'Sliders',
    path: '/sliders',
  },
  {
    title: 'DateTimePickers',
    path: '/dateTimePickers',
  },
  {
    title: 'TimePickers',
    path: '/timePickers',
  },
  {
    title: 'ColorPickers',
    path: '/colorPickers',
  },
  {
    title: 'Transfers',
    path: '/transfers',
  },
  {
    title: 'Uploader',
    path: '/uploader',
  },
  {
    title: 'Forms',
    path: '/forms',
  },
  {
    title: 'ScrollAreas',
    path: '/scrollAreas',
  },
  {
    title: 'VirtualScrollAreas',
    path: '/virtualScrollAreas',
  },
  {
    title: 'Table',
    path: '/tables',
  },
  {
    title: 'Pagination',
    path: '/pagination',
  },
  {
    title: 'Lists',
    path: '/lists',
  },
  {
    title: 'Tabs',
    path: '/tabs',
  },
  {
    title: 'Breadcrumbs',
    path: '/breadcrumbs',
  },
  {
    title: 'ContextMenus',
    path: '/contextMenus',
  },
  {
    title: 'DropdownMenus',
    path: '/dropdownMenus',
  },
  {
    title: 'Dialogs',
    path: '/dialogs',
  },
  {
    title: 'Drawers',
    path: '/drawers',
  },
  {
    title: 'Messages',
    path: '/messages',
  },
  {
    title: 'Notifications',
    path: '/notifications',
  },
  {
    title: 'Popovers',
    path: '/popovers',
  },
  {
    title: 'Tooltips',
    path: '/tooltips',
  },
  {
    title: 'Loadings',
    path: '/loadings',
  },
  {
    title: 'Progresses',
    path: '/progresses',
  },
  {
    title: 'Calendar',
    path: '/calendars',
  },
  {
    title: 'Brushes',
    path: '/brushes',
  },
  {
    title: 'Draggable',
    path: '/draggable',
  },
  {
    title: 'Resizable',
    path: '/resizable',
  }
]