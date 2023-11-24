import { SpLink } from '@spectre-ui/core'

export const Links = () => {

  return (
    <div class='p-5'>
      <h1>Inputs</h1>

      <h2>基础用法</h2>
      <div class=' mb-4'>
        <SpLink>Link</SpLink>
        <SpLink class='ml-3' color='primary'>Link</SpLink>
        <SpLink class='ml-3' color='success'>Link</SpLink>
        <SpLink class='ml-3' color='warn'>Link</SpLink>
        <SpLink class='ml-3' color='danger'>Link</SpLink>
      </div>

      <div class=' mb-4'>
        <SpLink>Link</SpLink>
        <SpLink class='ml-3' underline='always' color='primary'>Link</SpLink>
        <SpLink class='ml-3' underline='always' color='success'>Link</SpLink>
        <SpLink class='ml-3' underline='always' color='warn'>Link</SpLink>
        <SpLink class='ml-3' underline='always' color='danger'>Link</SpLink>
      </div>
    </div>
  )
}