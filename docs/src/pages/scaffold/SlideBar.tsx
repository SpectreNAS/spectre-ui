import { TagOutline } from '@/components/icon/TagOutline'
import * as globalStore from '@/store/global'

export const SlideBar = () => {

  return (
    <div class='flex flex-col h-full border-r border-r-solid border-[var(--border-common-default)]'>
      <div class='h-full'></div>
      <div class='flex flex-shrink-0 p-2 h-7 border-t border-t-solid border-[var(--border-common-default)]'>
        <div class='flex items-center ml-auto'>
          <TagOutline></TagOutline>
          <span class=' ml-1 text-sm'>
            {globalStore.store.version}
          </span>
        </div>
      </div>
    </div>
  )
}