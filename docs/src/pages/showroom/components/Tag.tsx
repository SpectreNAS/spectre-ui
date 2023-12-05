import { SpTag } from '@spectres/ui'

export const TagUsage = () => {

  return (
    <div class='p-10px'>
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