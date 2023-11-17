import { SpAlert } from '@spectre-ui/core'

export const AlertUsage = () => {
  return (
    <div class='p-10px'>
      <div class=' mb-4'>
        <SpAlert title='Alert Title'></SpAlert>
      </div>
      <div class=' mb-4'>
        <SpAlert title='Alert Title' color='success'></SpAlert>
      </div>
      <div class=' mb-4'>
        <SpAlert title='Alert Title' color='warn'></SpAlert>
      </div>
      <div class=' mb-4'>
        <SpAlert title='Alert Title' color='danger'></SpAlert>
      </div>
      <div class=' mb-4'>
        <SpAlert title='Alert Title' light></SpAlert>
      </div>
      <div class=' mb-4'>
        <SpAlert title='Alert Title' color='success' light></SpAlert>
      </div>
      <div class=' mb-4'>
        <SpAlert title='Alert Title' color='warn' light></SpAlert>
      </div>
      <div class=' mb-4'>
        <SpAlert title='Alert Title' color='danger' light></SpAlert>
      </div>
    </div>
  )
}