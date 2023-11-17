import { SpCheckbox } from '@spectre-ui/core'

export const CheckboxUsage = () => {
  return (
    <div class='p-10px'>
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