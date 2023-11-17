import { SpSwitch } from '@spectre-ui/core'

export const SwitchUsage = () => {
  return (
    <div class='p-10px'>
      <div class=' mb-4'>
        <SpSwitch size='small'></SpSwitch>
        <SpSwitch class='ml-3' size='medium'></SpSwitch>
        <SpSwitch class='ml-3'></SpSwitch>
        <SpSwitch class='ml-3' size='large'></SpSwitch>
      </div>
    </div>
  )
}