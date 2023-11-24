import { Router, Route, Routes, useRoutes } from '@solidjs/router'
import { lazy, For } from 'solid-js'
import Home from '../pages/home'
import { componentsRoutes } from './components-routes'

const Scaffold = lazy(() => import('../pages/scaffold'))
const NotFound = lazy(() => import('../pages/notFound'))
const GettingStarted = lazy(() => import('../pages/getting-started'))

export const RouteConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' component={Home}>
        </Route>
        <Route path='/' component={Scaffold}>
          <Route path='guides' component={GettingStarted}>
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