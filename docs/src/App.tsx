import { SpConfigProvider, SpScrollArea } from '@spectre-ui/core'
import '@spectre-ui/core/styles.css'
import { ThemeSwitch } from './components/theme-switch'
import { AlertUsage } from './components/alert-usage'
import { BadgeUsage } from './components/badge-usage'
import { ButtonUsage } from './components/button-usage'
import { CheckboxUsage } from './components/checkbox-usage'
import { PaginationUsage } from './components/pagination-usage'
import { themeType } from './store/global'

function App() {
  // const items = () => Array.from({ length: 1000000 }).map((_, index) => ({ key: `${index + 1}`, height: 80 }))

  return (
    <SpConfigProvider themeType={themeType()}>
      <div class='h-screen w-screen flex flex-col'>
        <div class='flex h-56px w-full py-2 border-b border-b-solid border-b-[var(--border-common-default)] flex-shrink-0'>
          <div class='w-256px h-full flex-shrink-0'></div>
          <div class='flex items-center w-full h-full px-40px'>
            <div class='ml-auto'><ThemeSwitch /></div>
          </div>
        </div>
        <SpScrollArea>
          <div class='flex'>
            <AlertUsage />

            <ButtonUsage />
            <CheckboxUsage />
            <BadgeUsage />
          </div>
          <div class='flex'>
            <PaginationUsage />
          </div>
        </SpScrollArea>
      </div>
    </SpConfigProvider>
  )
}

export default App
