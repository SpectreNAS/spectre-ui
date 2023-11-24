import { SpInputNumber } from '@spectre-ui/core'

export const InputNumbers = () => {

  return (
    <div class='p-5'>
      <h1>InputNumbers</h1>

      <h2>基础用法</h2>
      <div class='mb-4'>
        <SpInputNumber></SpInputNumber>
      </div>
      <div class='mb-4'>
        <SpInputNumber showStep></SpInputNumber>
      </div>
    </div>
  )
}