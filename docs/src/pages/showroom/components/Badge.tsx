import { SpBadge, SpButton } from '@spectres/ui'

export const BadgeUsage = () => {
  return (
    <div class='p-10px'>
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