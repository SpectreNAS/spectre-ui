import { SpInputNumber } from '@spectre-ui/core'
import { ComponentPageLayout } from '@/components/layouts'
import { Anchor } from '@/components/anchor'
import { Card } from '@/components/card'

export const InputNumbers = () => {

  return (
    <ComponentPageLayout>
      <h1>Input Numbers</h1>

      <Anchor href='#basic-usage'>基础用法</Anchor>
      <Card>
        <SpInputNumber></SpInputNumber>
      </Card>

      <Anchor href='#basic-usage'>带步骤按钮</Anchor>
      <Card>
        <SpInputNumber showStep></SpInputNumber>
      </Card>
    </ComponentPageLayout>
  )
}