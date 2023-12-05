import { SpConfigProvider } from '@spectres/ui'

import '@spectres/ui/styles.css'
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
