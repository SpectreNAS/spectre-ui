import { SpSwitch, getSystemThemeType } from '@spectre-ui/core'
import { SunLinear } from '../icon/SunLinear'
import { MoonLinear } from '../icon/MoonLinear'
import { globalStore, setIsDark } from '../../store/global'
import styles from './theme-switch.module.css'

export const ThemeSwitch = () => {
  const themeType = getSystemThemeType()
  if (themeType === 'dark') {
    setIsDark(true)
  }

  function change(value: boolean) {
    setIsDark(value)
  }

  return (
    <SpSwitch
      class={`ml-auto ${styles.themeSwitch}`}
      size='large'
      renderOff={<SunLinear />}
      renderOn={<MoonLinear />}
      value={globalStore.isDark}
      change={change}
    />
  )
}