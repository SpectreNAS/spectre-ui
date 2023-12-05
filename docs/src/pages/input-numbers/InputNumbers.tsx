import { SpInputNumber } from '@spectres/ui'

import { Anchor } from '@/components/anchor'
import { Card } from '@/components/card'
import { ComponentPageLayout } from '@/components/layouts'

export const InputNumbers = () => {

  return (
    <ComponentPageLayout>
      <h1>Input Numbers</h1>

      <Anchor href='#basic-usage'>基础用法</Anchor>
      <Card>
        <SpInputNumber></SpInputNumber>
      </Card>

      <Anchor href='#step'>带步骤按钮</Anchor>
      <Card>
        <SpInputNumber showStep></SpInputNumber>
      </Card>

      <Anchor href='#size'>尺寸</Anchor>
      <Card>
        <div class='flex items-end'>
          <div>
            <SpInputNumber size='small' showStep></SpInputNumber>
          </div>
          <div class='ml-3'>
            <SpInputNumber size='medium' showStep></SpInputNumber>
          </div>
          <div class='ml-3'>
            <SpInputNumber showStep></SpInputNumber>
          </div>
          <div class='ml-3'>
            <SpInputNumber size='large' showStep></SpInputNumber>
          </div>
        </div>
      </Card>
    </ComponentPageLayout>
  )
}