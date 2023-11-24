import { SpPagination, SpPaginationJumper } from '@spectre-ui/core'

export const Pagination = () => {

  return (
    <div class='p-5'>
      <h1>Pagination</h1>

      <h2>基础用法</h2>
      <div class=' mb-4'>
        <SpPagination total={100}></SpPagination>
      </div>
      <div class=' mb-4'>
        <SpPagination total={100} prev next></SpPagination>
      </div>
      <div class=' mb-4'>
        <SpPagination type='text' total={100} prev next></SpPagination>
      </div>
      <div class=' mb-4'>
        <SpPagination total={30} prev next>
          <SpPaginationJumper />
        </SpPagination>
      </div>
    </div>
  )
}