import { SpSwitch } from '@spectres/ui'

import styles from './theme-switch.module.css'
import { MoonLinear } from '@/components/icon/MoonLinear'
import { SunLinear } from '@/components/icon/SunLinear'
import * as globalStore from '@/store/global'

export const ThemeSwitch = () => {

  function change(value: boolean) {
    globalStore.setThemeType(value ? 'dark' : 'light')
  }

  return (
    <SpSwitch
      class={`ml-auto ${styles.themeSwitch}`}
      size='large'
      renderOff={<SunLinear />}
      renderOn={<MoonLinear />}
      value={globalStore.store.themeType === 'dark'}
      change={change}
    />
  )
}