import { createEffect, mergeProps } from 'solid-js'
import { ConfigProviderProps } from './config-provider.props'
import { getSystemTheme, getRootStyleRule, setRootStyleRule } from '../../theme'

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

  return (
    <>
      {props.children}
    </>
  )
}
