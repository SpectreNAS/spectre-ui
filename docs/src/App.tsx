import { SpConfigProvider } from '@spectre-ui/core'

import '@spectre-ui/core/styles.css'
import { RouteConfig } from './router'
import * as globalStore from './store/global'

function App() {
  return (
    <SpConfigProvider themeType={globalStore.store.themeType}>
      <div class='h-screen w-screen'>
        <RouteConfig />
      </div>
    </SpConfigProvider>
  )
}

export default App
