import { SpDraggable } from '@spectres/ui'

import { Anchor } from '@/components/anchor'
import { Card } from '@/components/card'
import { ComponentPageLayout } from '@/components/layouts'

export const Draggable = () => {

  return (
    <ComponentPageLayout>
      <h1>Draggable</h1>

      <Anchor href='#basic-usage'>基础用法</Anchor>
      <Card>
        <div class=' mb-4 relative h-200px'>
          <SpDraggable>
            <div class='w-50px h-50px bg-[var(--bg-brand-default)]'></div>
          </SpDraggable>
        </div>
      </Card>
    </ComponentPageLayout>
  )
}