import { SpPagination, SpPaginationJumper } from '@spectres/ui'

export const PaginationUsage = () => {
  return (
    <div class='p-10px'>
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