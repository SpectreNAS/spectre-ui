import { SpSwitch } from '@spectre-ui/core'
import { SunLinear } from '../icon/SunLinear'
import { MoonLinear } from '../icon/MoonLinear'
import * as globalStore from '../../store/global'
import styles from './theme-switch.module.css'

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