import { SpColorPickerPreset } from '@spectres/ui'

import { Anchor } from '@/components/anchor'
import { Card } from '@/components/card'
import { ComponentPageLayout } from '@/components/layouts'

export const ColorPickers = () => {

  return (
    <ComponentPageLayout>
      <h1>ColorPickers</h1>

      <Anchor href='#basic-usage'>基础用法</Anchor>
      <Card>
        <SpColorPickerPreset />
      </Card>
    </ComponentPageLayout>
  )
}