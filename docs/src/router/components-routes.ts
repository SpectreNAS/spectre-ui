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
    component: lazy(() => import('../pages/badges')),
  },
  {
    title: 'Buttons',
    path: '/buttons',
    component: lazy(() => import('../pages/buttons')),
  },
  {
    title: 'Links',
    path: '/links',
    component: lazy(() => import('../pages/links')),
  },
  {
    title: 'Tags',
    path: '/tags',
    component: lazy(() => import('../pages/tags')),
  },

  {
    title: 'Checkboxes',
    path: '/checkboxes',
    component: lazy(() => import('../pages/checkboxes')),
  },
  {
    title: 'Radios',
    path: '/radios',
  },
  {
    title: 'Inputs',
    path: '/inputs',
    component: lazy(() => import('../pages/inputs')),
  },
  {
    title: 'InputNumbers',
    path: '/inputNumbers',
    component: lazy(() => import('../pages/input-numbers')),
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
    component: lazy(() => import('../pages/switches')),
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
    component: lazy(() => import('../pages/time-pickers')),
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
    component: lazy(() => import('../pages/pagination')),
  },
  {
    title: 'Lists',
    path: '/lists',
    component: lazy(() => import('../pages/lists')),
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
    component: lazy(() => import('../pages/popovers')),
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
    component: lazy(() => import('../pages/progresses')),
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
    component: lazy(() => import('../pages/draggable')),
  },
  {
    title: 'Resizable',
    path: '/resizable',
  }
]