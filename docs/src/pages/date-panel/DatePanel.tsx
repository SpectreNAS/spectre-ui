import { SpDatePanel, SpDateRangeContext, SpDateRangeStart, SpDateRangeEnd, SpDateRange } from '@spectres/ui'

import { Anchor } from '@/components/anchor'
import { Card } from '@/components/card'
import { ComponentPageLayout } from '@/components/layouts'

export const DatePanel = () => {

  return (
    <ComponentPageLayout>
      <h1>Date Panel</h1>
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
      <Anchor href='#small-range'>小型日期范围</Anchor>
      <Card>
        <div class='mb-4'>
          <SpDateRangeContext>
            <SpDateRange />
          </SpDateRangeContext>
        </div>
      </Card>
      <Anchor href='#range'>日期范围</Anchor>
      <Card>
        <div class='mb-4'>
          <SpDateRangeContext>
            <div class='flex flex-wrap'>
              <SpDateRangeStart />
              <SpDateRangeEnd />
            </div>
          </SpDateRangeContext>
        </div>
      </Card>
    </ComponentPageLayout>
  )
}