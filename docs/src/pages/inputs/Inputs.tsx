import { SpInput } from '@spectres/ui'

import { Anchor } from '@/components/anchor'
import { Card } from '@/components/card'
import { ComponentPageLayout } from '@/components/layouts'

export const Inputs = () => {

  return (
    <ComponentPageLayout>
      <h1>Inputs</h1>

      <Anchor href='#basic-usage'>基础用法</Anchor>
      <Card>
        <SpInput></SpInput>
      </Card>
      <Anchor href='#size'>尺寸</Anchor>
      <Card>
        <div class='flex items-end'>
          <div>
            <SpInput size='small'></SpInput>
          </div>
          <div class='ml-3'>
            <SpInput size='medium'></SpInput>
          </div>
          <div class='ml-3'>
            <SpInput></SpInput>
          </div>
          <div class='ml-3'>
            <SpInput size='large'></SpInput>
          </div>
        </div>
      </Card>
    </ComponentPageLayout>
  )
}