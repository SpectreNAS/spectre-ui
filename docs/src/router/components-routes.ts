import { lazy } from 'solid-js'

export const componentsRoutes = [
  {
    title: 'alert',
    path: '/alerts',
    component: lazy(() => import('../pages/alerts')),
  },
  {
    title: 'badge',
    path: '/badges',
    component: lazy(() => import('../pages/badges')),
  },
  {
    title: 'button',
    path: '/buttons',
    component: lazy(() => import('../pages/buttons')),
  },
  {
    title: 'link',
    path: '/links',
    component: lazy(() => import('../pages/links')),
  },
  {
    title: 'tag',
    path: '/tags',
    component: lazy(() => import('../pages/tags')),
  },

  {
    title: 'checkbox',
    path: '/checkboxes',
    component: lazy(() => import('../pages/checkboxes')),
  },
  {
    title: 'radio',
    path: '/radios',
  },
  {
    title: 'input',
    path: '/inputs',
    component: lazy(() => import('../pages/inputs')),
  },
  {
    title: 'inputNumber',
    path: '/inputNumbers',
    component: lazy(() => import('../pages/input-numbers')),
  },
  {
    title: 'select',
    path: '/selects',
  },
  {
    title: 'cascadeSelect',
    path: '/cascadeSelect',
    component: lazy(() => import('../pages/cascade-selects'))
  },
  {
    title: 'switch',
    path: '/switches',
    component: lazy(() => import('../pages/switches')),
  },
  {
    title: 'slider',
    path: '/sliders',
  },
  {
    title: 'datePanel',
    path: '/datePanel',
    component: lazy(() => import('../pages/date-panel'))
  },
  {
    title: 'dateTimePicker',
    path: '/dateTimePickers',
  },
  {
    title: 'timePicker',
    path: '/timePickers',
    component: lazy(() => import('../pages/time-pickers')),
  },
  {
    title: 'colorPicker',
    path: '/colorPickers',
    component: lazy(() => import('../pages/color-pickers')),
  },
  {
    title: 'transfer',
    path: '/transfers',
  },
  {
    title: 'uploader',
    path: '/uploader',
  },
  {
    title: 'form',
    path: '/forms',
  },
  {
    title: 'scrollArea',
    path: '/scrollAreas',
  },
  {
    title: 'virtualScrollArea',
    path: '/virtualScrollAreas',
    component: lazy(() => import('../pages/virtual-scroll-areas')),
  },
  {
    title: 'table',
    path: '/tables',
  },
  {
    title: 'pagination',
    path: '/pagination',
    component: lazy(() => import('../pages/pagination')),
  },
  {
    title: 'list',
    path: '/lists',
    component: lazy(() => import('../pages/lists')),
  },
  {
    title: 'tab',
    path: '/tabs',
  },
  {
    title: 'breadcrumb',
    path: '/breadcrumbs',
  },
  {
    title: 'contextMenu',
    path: '/contextMenus',
  },
  {
    title: 'dropdownMenu',
    path: '/dropdownMenus',
  },
  {
    title: 'dialog',
    path: '/dialogs',
  },
  {
    title: 'drawer',
    path: '/drawers',
  },
  {
    title: 'message',
    path: '/messages',
  },
  {
    title: 'notification',
    path: '/notifications',
  },
  {
    title: 'popover',
    path: '/popovers',
    component: lazy(() => import('../pages/popovers')),
  },
  {
    title: 'tooltip',
    path: '/tooltips',
  },
  {
    title: 'loading',
    path: '/loadings',
  },
  {
    title: 'progress',
    path: '/progresses',
    component: lazy(() => import('../pages/progresses')),
  },
  {
    title: 'calendar',
    path: '/calendars',
  },
  {
    title: 'brush',
    path: '/brushes',
  },
  {
    title: 'draggable',
    path: '/draggable',
    component: lazy(() => import('../pages/draggable')),
  },
  {
    title: 'resizable',
    path: '/resizable',
  }
]