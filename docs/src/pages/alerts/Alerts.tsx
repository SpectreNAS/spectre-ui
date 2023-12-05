import { SpAlert } from '@spectres/ui'

import { Anchor } from '@/components/anchor'
import { Card } from '@/components/card'
import { ComponentPageLayout } from '@/components/layouts'

export const Alerts = () => {

  return (
    <ComponentPageLayout>
      <h1>Alerts</h1>

      <Anchor href='#basic-usage'>基础用法</Anchor>
      <Card>
        <SpAlert class=' mb-4' title='Alert Title'></SpAlert>
        <SpAlert class=' mb-4' title='Alert Title' color='success'></SpAlert>
        <SpAlert class=' mb-4' title='Alert Title' color='warn'></SpAlert>
        <SpAlert class=' mb-4' title='Alert Title' color='danger'></SpAlert>
      </Card>

      <Anchor href='#center'>主题</Anchor>
      <p>提供light主题</p>
      <Card>
        <SpAlert class=' mb-4' title='Alert Title' light></SpAlert>
        <SpAlert class=' mb-4' title='Alert Title' light color='success'></SpAlert>
        <SpAlert class=' mb-4' title='Alert Title' light color='warn'></SpAlert>
        <SpAlert class=' mb-4' title='Alert Title' light color='danger'></SpAlert>
      </Card>

      <Anchor href='#center'>居中</Anchor>
      <Card>
        <SpAlert class=' mb-4' title='Alert Title' center></SpAlert>
      </Card>

      <Anchor href='#closable'>带关闭按钮</Anchor>
      <Card>
        <SpAlert class=' mb-4' title='Alert Title' closable></SpAlert>
      </Card>

      <Anchor href='#description'>带描述</Anchor>
      <Card>
        <SpAlert class=' mb-4' title='Alert Title' description='The contents of the alert'></SpAlert>
      </Card>
    </ComponentPageLayout>
  )
}