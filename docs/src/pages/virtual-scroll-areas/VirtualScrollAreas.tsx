import { SpVirtualScrollArea, SpVirtualList } from '@spectre-ui/core'

export const VirtualScrollAreas = () => {
  const items = Array.from({ length: 1000000 }).map((_, index) => ({ key: `${index + 1}`, height: 80 }))

  return (
    <div class='p-5'>
      <h1>Virtual ScrollAreas</h1>

      <h2>基础用法</h2>
      <div class=' mb-4'>
        <SpVirtualScrollArea style='width:300px;height:300px;'>
          <SpVirtualList items={items}>
            {
              (item) => (
                <div class='h-full w-full py-2 box-border'>
                  <div class='h-full bg-[var(--bg-brand-light-default)] flex items-center justify-center'>{item.index}</div>
                </div>
              )
            }
          </SpVirtualList>
        </SpVirtualScrollArea>
      </div>
    </div>
  )
}