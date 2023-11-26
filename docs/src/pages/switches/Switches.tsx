import { SpSwitch } from '@spectre-ui/core'
import { ComponentPageLayout } from '@/components/layouts'
import { Anchor } from '@/components/anchor'
import { Card } from '@/components/card'

export const Switches = () => {

  return (
    <ComponentPageLayout>
      <h1>Switches</h1>

      <Anchor href='#basic-usage'>基础用法</Anchor>
      <Card>
        <SpSwitch></SpSwitch>
      </Card>

      <Anchor href='#size'>尺寸</Anchor>
      <Card>
        <SpSwitch size='large'></SpSwitch>
        <SpSwitch class='ml-3'></SpSwitch>
        <SpSwitch class='ml-3' size='medium'></SpSwitch>
        <SpSwitch class='ml-3' size='small'></SpSwitch>
      </Card>
    </ComponentPageLayout>
  )
}