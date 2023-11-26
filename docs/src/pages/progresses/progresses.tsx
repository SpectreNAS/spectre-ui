import { SpProgress } from '@spectre-ui/core'
import { ComponentPageLayout } from '@/components/layouts'
import { Anchor } from '@/components/anchor'
import { Card } from '@/components/card'

export const Progresses = () => {

  return (
    <ComponentPageLayout>
      <h1>Progresses</h1>

      <Anchor href='#basic-usage'>基础用法</Anchor>
      <Card>
        <SpProgress percentage={20}></SpProgress>
        <SpProgress class='mt-4' percentage={30} color='primary'></SpProgress>
        <SpProgress class='mt-4' percentage={50} color='success'></SpProgress>
        <SpProgress class='mt-4' percentage={70} color='warn'></SpProgress>
        <SpProgress class='mt-4' percentage={70} color='danger'></SpProgress>
      </Card>

      <Anchor href='#size'>尺寸</Anchor>
      <Card>
        <SpProgress percentage={20} size='small'></SpProgress>
        <SpProgress class='mt-4' percentage={30} color='primary' size='medium'></SpProgress>
        <SpProgress class='mt-4' percentage={50} color='success'></SpProgress>
        <SpProgress class='mt-4' percentage={70} color='warn' size='large'></SpProgress>
      </Card>
    </ComponentPageLayout>
  )
}