import { SpTag } from '@spectre-ui/core'
import { ComponentPageLayout } from '@/components/layouts'
import { Anchor } from '@/components/anchor'
import { Card } from '@/components/card'

export const Tags = () => {

  return (
    <ComponentPageLayout>
      <h1>Tags</h1>

      <Anchor href='#basic-usage'>基础用法</Anchor>
      <Card>
        <SpTag>Tag</SpTag>
        <SpTag class='ml-3' color='primary'>Tag</SpTag>
        <SpTag class='ml-3' color='success'>Tag</SpTag>
        <SpTag class='ml-3' color='warn'>Tag</SpTag>
        <SpTag class='ml-3' color='danger'>Tag</SpTag>
      </Card>
    </ComponentPageLayout>
  )
}