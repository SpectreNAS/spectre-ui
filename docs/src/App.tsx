import { SpConfigProvider } from '@spectre-ui/core'
import '@spectre-ui/core/styles.css'
import * as globalStore from './store/global'
import { RouteConfig } from './router'

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
