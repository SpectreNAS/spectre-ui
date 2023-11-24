import { SpButton, SpBadge } from '@spectre-ui/core'

export const Badges = () => {

  return (
    <div class='p-5'>
      <h1>Badge</h1>

      <h2>基础用法</h2>
      <div class=' mb-4'>
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
      </div>
      <div class=' mb-4'>
        <SpBadge light value={10}>
          <SpButton>Badge</SpButton>
        </SpBadge>
        <SpBadge class='ml-5' color='success' light value={10}>
          <SpButton>Badge</SpButton>
        </SpBadge>
        <SpBadge class='ml-5' color='warn' light value={10}>
          <SpButton>Badge</SpButton>
        </SpBadge>
        <SpBadge class='ml-5' color='danger' light value={10}>
          <SpButton>Badge</SpButton>
        </SpBadge>
      </div>
      <div class=' mb-4'>
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
      </div>
    </div>
  )
}