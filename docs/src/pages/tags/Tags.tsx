import { SpTag } from '@spectre-ui/core'

export const Tags = () => {

  return (
    <div class='p-5'>
      <h1>Switches</h1>

      <h2>基础用法</h2>
      <div class=' mb-4'>
        <SpTag>Tag</SpTag>
        <SpTag class='ml-3' color='primary'>Tag</SpTag>
        <SpTag class='ml-3' color='success'>Tag</SpTag>
        <SpTag class='ml-3' color='warn'>Tag</SpTag>
        <SpTag class='ml-3' color='danger'>Tag</SpTag>
      </div>
      <div class=' mb-4'>
        <SpTag>Tag</SpTag>
        <SpTag class='ml-3' type='fill' color='primary'>Tag</SpTag>
        <SpTag class='ml-3' type='fill' color='success'>Tag</SpTag>
        <SpTag class='ml-3' type='fill' color='warn'>Tag</SpTag>
        <SpTag class='ml-3' type='fill' color='danger'>Tag</SpTag>
      </div>
      <div class=' mb-4'>
        <SpTag>Tag</SpTag>
        <SpTag class='ml-3' type='bordered' color='primary'>Tag</SpTag>
        <SpTag class='ml-3' type='bordered' color='success'>Tag</SpTag>
        <SpTag class='ml-3' type='bordered' color='warn'>Tag</SpTag>
        <SpTag class='ml-3' type='bordered' color='danger'>Tag</SpTag>
      </div>
    </div>
  )
}