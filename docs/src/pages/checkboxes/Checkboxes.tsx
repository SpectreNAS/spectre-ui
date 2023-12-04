import { SpCheckbox } from '@spectre-ui/core'

import { Anchor } from '@/components/anchor'
import { Card } from '@/components/card'
import { ComponentPageLayout } from '@/components/layouts'

export const Checkboxes = () => {

  return (
    <ComponentPageLayout>
      <h1>Checkboxes</h1>

      <Anchor href='#basic-usage'>基础用法</Anchor>
      <Card>
        <SpCheckbox></SpCheckbox>
      </Card>

      <Anchor href='#indeterminate'>不确定状态</Anchor>
      <Card>
        <SpCheckbox indeterminate></SpCheckbox>
      </Card>

      <Anchor href='#sizes'>尺寸</Anchor>
      <Card>
        <div>
          <SpCheckbox size='small'></SpCheckbox>
          <SpCheckbox class='ml-3' size='medium'></SpCheckbox>
          <SpCheckbox class='ml-3'></SpCheckbox>
          <SpCheckbox class='ml-3' size='large'></SpCheckbox>
        </div>
        <div>
          <SpCheckbox size='small' indeterminate></SpCheckbox>
          <SpCheckbox class='ml-3' indeterminate size='medium'></SpCheckbox>
          <SpCheckbox class='ml-3' indeterminate></SpCheckbox>
          <SpCheckbox class='ml-3' indeterminate size='large'></SpCheckbox>
        </div>

      </Card>
    </ComponentPageLayout>
  )
}