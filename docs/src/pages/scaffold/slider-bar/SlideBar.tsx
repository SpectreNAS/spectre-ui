import { useNavigate, useLocation } from '@solidjs/router'
import { SpScrollArea, SpList } from '@spectres/ui'

import { useI18nContext, Dictionary } from '@/components/i18n'
import { TagOutline } from '@/components/icon/TagOutline'
import { componentsRoutes } from '@/router/components-routes'
import { guidesRoutes } from '@/router/guides.routes'
import * as globalStore from '@/store/global'

interface SlideBarProps {
  selectItem?: (key: string) => void
}

export const SlideBar = (props: SlideBarProps) => {

  const { t } = useI18nContext()!

  const navigate = useNavigate()
  const location = useLocation()

  const navMenus = [
    {
      title: 'guides',
      children: guidesRoutes.map(item => ({ title: item.title, value: `guides${item.path}` }))
    },
    {
      title: 'components',
      children: componentsRoutes.map(item => ({ title: item.title, value: `components${item.path}` }))
    }
  ]

  function onSelectItem(value: string) {
    navigate(value)
    props.selectItem?.(value)
  }

  return (
    <>
      <SpScrollArea>
        <SpList
          items={navMenus}
          activeItem={location.pathname}
          selectItem={onSelectItem}
          renderItem={(item) => <div>{t(item.title as (keyof Dictionary))}</div>}
        />
      </SpScrollArea>
      <div class='flex flex-shrink-0 p-2 h-7 border-t border-t-solid border-[var(--border-common-default)]'>
        <div class='flex items-center ml-auto'>
          <TagOutline></TagOutline>
          <span class=' ml-1 text-sm'>
            {globalStore.store.version}
          </span>
        </div>
      </div>
    </>
  )
}