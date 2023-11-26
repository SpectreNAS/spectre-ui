import { SpList, SpListGroup, SpListItem } from '@spectre-ui/core'
import { ComponentPageLayout } from '@/components/layouts'
import { Anchor } from '@/components/anchor'
import { Card } from '@/components/card'

export const Lists = () => {

  return (
    <ComponentPageLayout>
      <h1>Lists</h1>

      <Anchor href='#basic-usage'>基础用法</Anchor>
      <Card>
        <SpList>
          <SpListItem>One</SpListItem>
          <SpListItem>Two</SpListItem>
          <SpListItem>Three</SpListItem>
          <SpListItem>Four</SpListItem>
        </SpList>
      </Card>
    </ComponentPageLayout>
  )
}