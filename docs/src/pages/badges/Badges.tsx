import { SpButton, SpBadge } from '@spectre-ui/core'

import { Anchor } from '@/components/anchor'
import { Card } from '@/components/card'
import { ComponentPageLayout } from '@/components/layouts'

export const Badges = () => {

  return (
    <ComponentPageLayout>
      <h1>Badge</h1>
      <Anchor href='#basic-usage'>基础用法</Anchor>
      <Card>
        <SpBadge value={10}>
          <SpButton>Badge</SpButton>
        </SpBadge>
        <SpBadge class='ml-5' color='success' value={10}>
          <SpButton>Badge</SpButton>
        </SpBadge>
        <SpBadge class='ml-5' color='warn' value={10}>
          <SpButton>Badge</SpButton>
        </SpBadge>
        <SpBadge class='ml-5' color='danger' value={10}>
          <SpButton>Badge</SpButton>
        </SpBadge>
      </Card>
      <Anchor href='#max'>最大值</Anchor>
      <Card>
        <SpBadge max={99} value={200}>
          <SpButton>Badge</SpButton>
        </SpBadge>
        <SpBadge class='ml-5' color='danger' max={20} value={200}>
          <SpButton>Badge</SpButton>
        </SpBadge>
      </Card>
      <Anchor href='#custom'>自定义内容</Anchor>
      <Card>
        <SpBadge color='danger' value='new'>
          <SpButton>Badge</SpButton>
        </SpBadge>
      </Card>
      <Anchor href='#dot'>一个点</Anchor>
      <Card>
        <SpBadge dot value={10}>
          <SpButton>Badge</SpButton>
        </SpBadge>
        <SpBadge class='ml-5' color='success' dot value={10}>
          <SpButton>Badge</SpButton>
        </SpBadge>
        <SpBadge class='ml-5' color='warn' dot value={10}>
          <SpButton>Badge</SpButton>
        </SpBadge>
        <SpBadge class='ml-5' color='danger' dot value={10}>
          <SpButton>Badge</SpButton>
        </SpBadge>
      </Card>
    </ComponentPageLayout>
  )
}