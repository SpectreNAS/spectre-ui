import { SpConfigProvider } from '@spectres/ui'

import { RouteConfig } from './router'
import * as globalStore from './store/global'
import { I18n } from '@/components/i18n'

import '@spectres/ui/styles.css'

function App() {
  return (
    <I18n>
      <SpConfigProvider themeType={globalStore.store.themeType}>
        <div class='h-screen w-screen'>
          <RouteConfig />
        </div>
      </SpConfigProvider>
    </I18n>
  )
}

export default App
