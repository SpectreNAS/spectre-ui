import { SpPagination, SpPaginationJumper } from '@spectres/ui'

import { Anchor } from '@/components/anchor'
import { Card } from '@/components/card'
import { ComponentPageLayout } from '@/components/layouts'

export const Pagination = () => {

  return (
    <ComponentPageLayout>
      <h1>Pagination</h1>

      <Anchor href='#basic-usage'>基础用法</Anchor>
      <Card>
        <SpPagination total={100}></SpPagination>
      </Card>

      <Anchor href='#basic-usage'>上下页按钮</Anchor>
      <Card>
        <SpPagination total={100} prev next></SpPagination>
      </Card>

      <Anchor href='#basic-usage'>文字按钮</Anchor>
      <Card>
        <SpPagination type='text' total={100} prev next></SpPagination>
      </Card>

      <Anchor href='#basic-usage'>跳转输入框</Anchor>
      <Card>
        <SpPagination total={30} prev next>
          <SpPaginationJumper />
        </SpPagination>
      </Card>
    </ComponentPageLayout>
  )
}