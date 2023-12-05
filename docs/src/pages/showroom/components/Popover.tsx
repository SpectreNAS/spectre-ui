import { SpPopover, SpButton } from '@spectres/ui'

export const PopoverUsage = () => {
  const content = () => <div class='p-4'>Title</div>
  return (
    <div class='p-10px'>
      <div class='mb-4'>
        <SpPopover class='ml-3' renderContent={content()}>
          <SpButton>Hover</SpButton>
        </SpPopover>
        <SpPopover class='ml-3' trigger='click' renderContent={content()}>
          <SpButton>Click</SpButton>
        </SpPopover>
        <SpPopover class='ml-3' trigger='contextmenu' renderContent={content()}>
          <SpButton>Contextmenu</SpButton>
        </SpPopover>
      </div>
    </div>
  )
}