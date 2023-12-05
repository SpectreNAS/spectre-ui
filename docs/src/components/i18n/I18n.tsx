import * as i18n from '@solid-primitives/i18n'
import { FlowProps, createContext, useContext, createResource, createSignal, Accessor, Setter } from 'solid-js'

import type * as en from '@/i18n/en'

export type Locale = 'en' | 'zh'

export type RawDictionary = typeof en.dict

export type Dictionary = i18n.Flatten<RawDictionary>

export interface I18nProviderValue {
  t: i18n.NullableTranslator<Dictionary>
  locale: Accessor<Locale>
  setLocale: Setter<Locale>
}

async function fetchDictionary(locale: Locale): Promise<Dictionary> {
  const dict: RawDictionary = (await import(`../../i18n/${locale}.ts`)).dict
  return i18n.flatten(dict)
}

const I18nContext = createContext<I18nProviderValue>()

export const useI18nContext = () => useContext(I18nContext)

export const I18n = (props: FlowProps) => {

  const [locale, setLocale] = createSignal<Locale>('en')

  const [dict] = createResource(locale, fetchDictionary)

  const t = i18n.translator(dict)

  return (
    <I18nContext.Provider value={{
      locale,
      setLocale,
      t
    }}>
      {props.children}
    </I18nContext.Provider>
  )
}