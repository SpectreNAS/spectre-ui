import { SpButton, SpIconButton } from '@spectre-ui/core'
import { ComponentPageLayout } from '@/components/layouts'
import { Menu } from '@/components/icon/Menu'
import { Anchor } from '@/components/anchor'
import { Card } from '@/components/card'

export const Buttons = () => {

  return (
    <ComponentPageLayout>
      <h1>Buttons</h1>

      <Anchor href='#basic-usage'>基础用法</Anchor>
      <Card>
        <SpButton>Button</SpButton>
        <SpButton class='ml-3' color='primary'>Button</SpButton>
        <SpButton class='ml-3' color='success'>Button</SpButton>
        <SpButton class='ml-3' color='warn'>Button</SpButton>
        <SpButton class='ml-3' color='danger'>Button</SpButton>
      </Card>

      <Anchor href='#basic-usage'>文字按钮</Anchor>
      <Card>
        <SpButton type='text'>Button</SpButton>
        <SpButton class='ml-3' type='text' color='primary'>Button</SpButton>
        <SpButton class='ml-3' type='text' color='success'>Button</SpButton>
        <SpButton class='ml-3' type='text' color='warn'>Button</SpButton>
        <SpButton class='ml-3' type='text' color='danger'>Button</SpButton>
      </Card>

      <Anchor href='#sizes'>图标按钮</Anchor>
      <Card>
        <SpIconButton>
          <Menu></Menu>
        </SpIconButton>
      </Card>

      <Anchor href='#sizes'>按钮尺寸</Anchor>
      <Card>

        <SpButton size='large'>Button</SpButton>
        <SpButton class='ml-3'>Button</SpButton>
        <SpButton class='ml-3' size='medium'>Button</SpButton>
        <SpButton class='ml-3' size='small'>Button</SpButton>
      </Card>

    </ComponentPageLayout>
  )
}