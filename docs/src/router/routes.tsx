import { Router, Route, Routes } from '@solidjs/router'
import { lazy } from 'solid-js'
import Home from '../pages/home'

const Scaffold = lazy(() => import('../pages/scaffold'))
const NotFound = lazy(() => import('../pages/notFound'))
const GettingStarted = lazy(() => import('../pages/getting-started'))
const Alerts = lazy(() => import('../pages/alerts'))
const Buttons = lazy(() => import('../pages/buttons'))
const Lists = lazy(() => import('../pages/lists'))

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
            <Route path='alerts' component={Alerts}>
            </Route>
            <Route path='buttons' component={Buttons}>
            </Route>
            <Route path='lists' component={Lists}>
            </Route>
          </Route>
          <Route path='*' component={NotFound}></Route>
        </Route>
      </Routes>
    </Router>
  )
}