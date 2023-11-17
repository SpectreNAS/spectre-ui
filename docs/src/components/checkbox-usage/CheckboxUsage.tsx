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
        <SpCheckbox class='ml-3'></SpCheckbox>
        <SpCheckbox class='ml-3' size='large'></SpCheckbox>
      </div>
    </div>
  )
}