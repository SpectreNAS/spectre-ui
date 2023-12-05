import { useParams, useLocation, useNavigate } from '@solidjs/router'
import { SpButton } from '@spectres/ui'
import { createEffect } from 'solid-js'

import { useI18nContext } from '@/components/i18n'

export const LanguageSwitch = () => {

  const routeParams = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  const i18nContext = useI18nContext()!

  const text = () => i18nContext.locale() === 'en' ? 'English' : '中文'

  createEffect(() => {
    i18nContext.setLocale(routeParams.lang === 'en' ? 'en' : 'zh')
  })

  function switchLanguage() {
    const oldLocale = i18nContext.locale()
    const locale = i18nContext.setLocale(value => value === 'en' ? 'zh' : 'en')
    navigate(`${location.pathname.replace(oldLocale, locale)}${location.search}`)
  }
  return (
    <SpButton
      type='text'
      size='large'
      onClick={switchLanguage}
    >
      {text()}
    </SpButton>
  )
}