import { Router, Route, Routes, hashIntegration } from '@solidjs/router'
import { lazy, For } from 'solid-js'

import { componentsRoutes } from './components-routes'
import { guidesRoutes } from './guides.routes'
import Home from '../pages/home'

const Scaffold = lazy(() => import('../pages/scaffold'))
const NotFound = lazy(() => import('../pages/notFound'))

export const RouteConfig = () => {
  return (
    <Router source={hashIntegration()}>
      <Routes>
        <Route path='/' component={Home}>
        </Route>
        <Route path='/:lang' component={Scaffold}>
          <Route path='guides'>
            <For each={guidesRoutes}>
              {
                (item) => <Route path={item.path} component={item.component}></Route>
              }
            </For>
            <Route path='*' component={NotFound}></Route>
          </Route>
          <Route path='components'>
            <For each={componentsRoutes}>
              {
                (item) => <Route path={item.path} component={item.component}></Route>
              }
            </For>
            <Route path='*' component={NotFound}></Route>
          </Route>
        </Route>

      </Routes>
    </Router>
  )
}