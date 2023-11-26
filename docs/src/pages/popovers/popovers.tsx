import { SpPopover, SpButton } from '@spectre-ui/core'
import { ComponentPageLayout } from '@/components/layouts'
import { Anchor } from '@/components/anchor'
import { Card } from '@/components/card'

export const Popovers = () => {
  const content = () => <div class='p-4'>Title</div>
  return (
    <ComponentPageLayout>
      <h1>Popovers</h1>

      <Anchor href='#basic-usage'>基础用法</Anchor>
      <Card>
        <SpPopover class='ml-3' renderContent={content()}>
          <SpButton>Hover</SpButton>
        </SpPopover>
        <SpPopover class='ml-3' trigger='click' renderContent={content()}>
          <SpButton>Click</SpButton>
        </SpPopover>
        <SpPopover class='ml-3' trigger='contextmenu' renderContent={content()}>
          <SpButton>Contextmenu</SpButton>
        </SpPopover>
        <SpPopover class='ml-3' trigger='focus' renderContent={content()}>
          <SpButton>Focus</SpButton>
        </SpPopover>
      </Card>
    </ComponentPageLayout>
  )
}