import { SpButton } from '@spectre-ui/core'

export const ButtonUsage = () => {
  return (
    <div class='p-10px'>
      <div class=' mb-4'>
        <SpButton>Button</SpButton>
        <SpButton class='ml-3' color='primary'>Button</SpButton>
        <SpButton class='ml-3' color='success'>Button</SpButton>
        <SpButton class='ml-3' color='warn'>Button</SpButton>
        <SpButton class='ml-3' color='danger'>Button</SpButton>
      </div>
      <div class='mb-4'>
        <SpButton type='light'>Button</SpButton>
        <SpButton class='ml-3' type='light' color='primary'>Button</SpButton>
        <SpButton class='ml-3' type='light' color='success'>Button</SpButton>
        <SpButton class='ml-3' type='light' color='warn'>Button</SpButton>
        <SpButton class='ml-3' type='light' color='danger'>Button</SpButton>
      </div>
      <div class='mb-4'>
        <SpButton type='text'>Button</SpButton>
        <SpButton class='ml-3' type='text' color='primary'>Button</SpButton>
        <SpButton class='ml-3' type='text' color='success'>Button</SpButton>
        <SpButton class='ml-3' type='text' color='warn'>Button</SpButton>
        <SpButton class='ml-3' type='text' color='danger'>Button</SpButton>
      </div>
      <div class='mb-4'>
        <SpButton round>Button</SpButton>
        <SpButton class='ml-3' round color='primary'>Button</SpButton>
        <SpButton class='ml-3' round color='success'>Button</SpButton>
        <SpButton class='ml-3' round color='warn'>Button</SpButton>
        <SpButton class='ml-3' round color='danger'>Button</SpButton>
      </div>
      <div class='mb-4'>
        <SpButton size='small'>Button</SpButton>
        <SpButton class='ml-3' size='medium'>Button</SpButton>
        <SpButton class='ml-3'>Button</SpButton>
        <SpButton class='ml-3' size='large'>Button</SpButton>
      </div>

    </div>
  )
}