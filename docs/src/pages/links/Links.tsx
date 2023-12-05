import { SpLink } from '@spectre-ui/core'

import { Anchor } from '@/components/anchor'
import { Card } from '@/components/card'
import { ComponentPageLayout } from '@/components/layouts'

export const Links = () => {

  return (
    <ComponentPageLayout>
      <h1>Links</h1>

      <Anchor href='#basic-usage'>基础用法</Anchor>
      <Card>
        <SpLink>Link</SpLink>
        <SpLink class='ml-3' color='primary'>Link</SpLink>
        <SpLink class='ml-3' color='success'>Link</SpLink>
        <SpLink class='ml-3' color='warn'>Link</SpLink>
        <SpLink class='ml-3' color='danger'>Link</SpLink>
      </Card>

      <Anchor href='#underline'>一直显示下划线</Anchor>
      <Card>
        <SpLink underline='always'>Link</SpLink>
        <SpLink class='ml-3' underline='always' color='primary'>Link</SpLink>
        <SpLink class='ml-3' underline='always' color='success'>Link</SpLink>
        <SpLink class='ml-3' underline='always' color='warn'>Link</SpLink>
        <SpLink class='ml-3' underline='always' color='danger'>Link</SpLink>
      </Card>

      <Anchor href='#underline'>不显示下划线</Anchor>
      <Card>
        <SpLink underline={false}>Link</SpLink>
        <SpLink class='ml-3' underline={false} color='primary'>Link</SpLink>
        <SpLink class='ml-3' underline={false} color='success'>Link</SpLink>
        <SpLink class='ml-3' underline={false} color='warn'>Link</SpLink>
        <SpLink class='ml-3' underline={false} color='danger'>Link</SpLink>
      </Card>
    </ComponentPageLayout>
  )
}