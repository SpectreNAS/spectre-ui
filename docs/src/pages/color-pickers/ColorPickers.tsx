import { SpColorPickerPreset } from '@spectre-ui/core'
import { ComponentPageLayout } from '@/components/layouts'
import { Anchor } from '@/components/anchor'
import { Card } from '@/components/card'

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