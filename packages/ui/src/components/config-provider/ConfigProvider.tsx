import { createContext, useContext, createEffect, mergeProps } from 'solid-js'

import { ConfigProviderProps, ConfigProviderValue } from './config-provider.props'
import { getSystemTheme, getRootStyleRule, setRootStyleRule } from '../../theme'
import { ComponentSize } from '../../types'

const ConfigProviderContext = createContext<ConfigProviderValue>()

export const useConfigProvider = () => useContext(ConfigProviderContext)

export const ConfigProvider = (propsRaw: ConfigProviderProps) => {
  const props = mergeProps({}, propsRaw)

  const rootStyleRule = getRootStyleRule()

  createEffect(() => {
    if (rootStyleRule) {
      setRootStyleRule(rootStyleRule, getSystemTheme(props.themeType))
    }
  })

  createEffect(() => {
    if (rootStyleRule && props.customTheme) {
      setRootStyleRule(rootStyleRule, props.customTheme)
    }
  })

  const providerValue: ConfigProviderValue = {
    size: props.size as ComponentSize
  }

  return (
    <ConfigProviderContext.Provider value={providerValue}>
      {props.children}
    </ConfigProviderContext.Provider>
  )
}
