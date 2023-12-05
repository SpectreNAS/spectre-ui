import { SpProgress } from '@spectres/ui'

export const ProgressUsage = () => {
  return (
    <div class='p-10px'>
      <div class='mb-4'>
        <SpProgress percentage={20}></SpProgress>
        <SpProgress class='mt-4' percentage={30} color='primary'></SpProgress>
        <SpProgress class='mt-4' percentage={50} color='success'></SpProgress>
        <SpProgress class='mt-4' percentage={70} color='warn'></SpProgress>
        <SpProgress class='mt-4' percentage={70} color='danger'></SpProgress>
      </div>

      <div class='mb-4'>
        <SpProgress percentage={20} size='small'></SpProgress>
        <SpProgress class='mt-4' percentage={30} color='primary' size='medium'></SpProgress>
        <SpProgress class='mt-4' percentage={50} color='success'></SpProgress>
        <SpProgress class='mt-4' percentage={70} color='warn' size='large'></SpProgress>
      </div>
    </div>
  )
}