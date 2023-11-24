import { SpAlert } from '@spectre-ui/core'

export const Alerts = () => {

  return (
    <div class='p-5'>
      <h1>Buttons</h1>

      <h2>基础用法</h2>
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