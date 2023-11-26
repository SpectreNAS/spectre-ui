import { SpCheckbox } from '@spectre-ui/core'
import { ComponentPageLayout } from '@/components/layouts'
import { Anchor } from '@/components/anchor'
import { Card } from '@/components/card'

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
    </ComponentPageLayout>
  )
}