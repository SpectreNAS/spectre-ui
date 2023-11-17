import { SpPagination } from '@spectre-ui/core'

export const PaginationUsage = () => {
  return (
    <div class='p-10px'>
      <div class=' mb-4'>
        <SpPagination total={100}></SpPagination>
      </div>
      <div class=' mb-4'>
        <SpPagination total={100} prev next></SpPagination>
      </div>
    </div>
  )
}