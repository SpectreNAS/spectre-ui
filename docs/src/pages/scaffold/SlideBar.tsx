import { useNavigate, useLocation } from '@solidjs/router'
import { SpScrollArea, SpList } from '@spectres/ui'

import { TagOutline } from '@/components/icon/TagOutline'
import * as globalStore from '@/store/global'

interface SlideBarProps {
  selectItem?: (key: string) => void
}

export const SlideBar = (props: SlideBarProps) => {
  const navigate = useNavigate()
  const location = useLocation()

  function onSelectItem(value: string) {
    navigate(value)
    props.selectItem?.(value)
  }

  return (
    <>
      <SpScrollArea>
        <SpList items={globalStore.store.navMenus} activeItem={location.pathname} selectItem={onSelectItem} />
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