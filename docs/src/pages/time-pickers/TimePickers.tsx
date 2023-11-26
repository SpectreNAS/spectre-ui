import { SpTimePicker } from '@spectre-ui/core'
import { ComponentPageLayout } from '@/components/layouts'
import { Anchor } from '@/components/anchor'
import { Card } from '@/components/card'

export const TimePickers = () => {

  return (
    <ComponentPageLayout>
      <h1>Time Pickers</h1>

      <Anchor href='#basic-usage'>基础用法</Anchor>
      <Card>
        <SpTimePicker />
      </Card>
    </ComponentPageLayout>
  )
}