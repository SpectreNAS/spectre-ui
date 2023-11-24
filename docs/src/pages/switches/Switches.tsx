import { SpSwitch } from '@spectre-ui/core'

export const Switches = () => {

  return (
    <div class='p-5'>
      <h1>Switches</h1>

      <h2>基础用法</h2>
      <div class=' mb-4'>
        <SpSwitch size='small'></SpSwitch>
        <SpSwitch class='ml-3' size='medium'></SpSwitch>
        <SpSwitch class='ml-3'></SpSwitch>
        <SpSwitch class='ml-3' size='large'></SpSwitch>
      </div>
    </div>
  )
}