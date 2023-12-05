import { SpVirtualScrollArea, SpVirtualList } from '@spectre-ui/core'

import { Anchor } from '@/components/anchor'
import { Card } from '@/components/card'
import { ComponentPageLayout } from '@/components/layouts'

export const VirtualScrollAreas = () => {
  const items = Array.from({ length: 1000000 }).map((_, index) => ({ key: `${index + 1}`, height: 80 }))

  return (
    <ComponentPageLayout>
      <h1>Virtual ScrollAreas</h1>

      <Anchor href='#basic-usage'>基础用法</Anchor>
      <Card>
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
      </Card>
    </ComponentPageLayout>
  )
}