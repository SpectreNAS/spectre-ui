import { SpInputNumber } from '@spectre-ui/core'

export const InputNumberUsage = () => {
  return (
    <div class='p-10px'>
      <div class='mb-4'>
        <SpInputNumber></SpInputNumber>
      </div>
      <div class='mb-4'>
        <SpInputNumber showStep></SpInputNumber>
      </div>
    </div>
  )
}