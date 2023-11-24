import { SpPopover, SpButton } from '@spectre-ui/core'

export const Popovers = () => {
  const content = () => <div class='p-4'>Title</div>
  return (
    <div class='p-5'>
      <h1>Progresses</h1>

      <h2>基础用法</h2>
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