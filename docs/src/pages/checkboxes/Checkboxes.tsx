import { SpCheckbox } from '@spectre-ui/core'

export const Checkboxes = () => {

  return (
    <div class='p-5'>
      <h1>Checkboxes</h1>

      <h2>基础用法</h2>
      <div class=' mb-4'>
        <SpCheckbox></SpCheckbox>
      </div>
      <div class=' mb-4'>
        <SpCheckbox size='small'></SpCheckbox>
        <SpCheckbox class='ml-3' size='medium'></SpCheckbox>
        <SpCheckbox class='ml-3' value={true}></SpCheckbox>
        <SpCheckbox class='ml-3' size='large' value={true}></SpCheckbox>
      </div>
      <div class=' mb-4'>
        <SpCheckbox indeterminate></SpCheckbox>
      </div>
    </div>
  )
}