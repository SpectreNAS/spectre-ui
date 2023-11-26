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

      <Anchor href='#group'>分组</Anchor>
      <Card>
        <SpList>
          <SpListItem>One</SpListItem>
          <SpListGroup title='Two'>
            <SpListItem>Two-1</SpListItem>
            <SpListItem>Two-2</SpListItem>
            <SpListItem>Two-3</SpListItem>
          </SpListGroup>
          <SpListGroup title='Three'>
            <SpListItem>Three-1</SpListItem>
            <SpListItem>Three-2</SpListItem>
            <SpListItem>Three-3</SpListItem>
          </SpListGroup>
          <SpListItem>Four</SpListItem>
        </SpList>
      </Card>
    </ComponentPageLayout>
  )
}