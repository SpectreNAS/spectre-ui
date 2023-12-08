import { SpDatePanel, SpDateRangePanel } from '@spectres/ui'

import { Anchor } from '@/components/anchor'
import { Card } from '@/components/card'
import { ComponentPageLayout } from '@/components/layouts'

export const DatePanel = () => {

  return (
    <ComponentPageLayout>
      <h1>Date Panel</h1>

      <Anchor href='#range'>日期范围</Anchor>
      <Card>
        <div class='mb-4'>
          <SpDateRangePanel></SpDateRangePanel>
        </div>
      </Card>

      <Anchor href='#basic-usage'>基础用法</Anchor>
      <Card>
        <div class='mb-4'>
          <SpDatePanel></SpDatePanel>
        </div>
      </Card>

      <Anchor href='#multiple'>多选</Anchor>
      <Card>
        <div class='mb-4'>
          <SpDatePanel multiple></SpDatePanel>
        </div>
      </Card>
    </ComponentPageLayout>
  )
}