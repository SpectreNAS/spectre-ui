import { SpButton } from '@spectres/ui'

import { useI18nContext } from '@/components/i18n'

export const LanguageSwitch = () => {

  const i18nContext = useI18nContext()!

  const text = () => i18nContext.locale() === 'en' ? 'English' : '中文'

  function switchLanguage() {
    i18nContext.setLocale(value => value === 'en' ? 'zh' : 'en')
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