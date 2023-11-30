import { SpColorPickerPanel, SpColorSaturation, SpColorHue, SpColorAlpha, SpSliderArea } from '@spectre-ui/core'
import { ComponentPageLayout } from '@/components/layouts'
import { Anchor } from '@/components/anchor'
import { Card } from '@/components/card'

export const ColorPickers = () => {

  return (
    <ComponentPageLayout>
      <h1>ColorPickers</h1>

      <Anchor href='#basic-usage'>基础用法</Anchor>
      <Card>
        <SpSliderArea width={300} height={200}>
          <div class='w-12px h-12px absolute bg-blue-400 -left-6px -top-6px'></div>
        </SpSliderArea>
        <div class=' mb-4 relative'>
          <SpColorPickerPanel>
            <SpColorSaturation />
            <SpColorHue />

            <SpColorAlpha />
            <div class='flex'>
              <SpColorHue vertical />
              <SpColorAlpha vertical />
            </div>
          </SpColorPickerPanel>
        </div>
      </Card>
    </ComponentPageLayout>
  )
}