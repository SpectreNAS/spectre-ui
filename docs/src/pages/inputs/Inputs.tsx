import { SpInput } from '@spectre-ui/core'
import { ComponentPageLayout } from '@/components/layouts'
import { Anchor } from '@/components/anchor'
import { Card } from '@/components/card'

export const Inputs = () => {

  return (
    <ComponentPageLayout>
      <h1>Inputs</h1>

      <Anchor href='#basic-usage'>基础用法</Anchor>
      <Card>
        <SpInput></SpInput>
      </Card>
    </ComponentPageLayout>
  )
}