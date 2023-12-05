import { lazy } from 'solid-js'

export const guidesRoutes = [
  {
    title: 'gettingStarted',
    path: '/getting-started',
    component: lazy(() => import('../pages/getting-started')),
  },
]