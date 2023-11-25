import { lazy } from 'solid-js'

export const guidesRoutes = [
  {
    title: 'Getting Started',
    path: '/getting-started',
    component: lazy(() => import('../pages/getting-started')),
  },
]