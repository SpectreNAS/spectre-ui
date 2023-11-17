import { createSignal, createEffect, on, Show, For } from 'solid-js'
import { PaginationProps, generateProps } from './pagination.props'
import { SpButton, SpIconButton } from '../button'
import { MoreFilled } from '../icon/more-filled'
import { ChevronLeftFilled } from '../icon/chevron-left-filled'
import { ChevronRightFilled } from '../icon/chevron-right-filled'
import { mergeClasses } from '../../utils'

interface Pager {
  page?: number
  isQuickPrev?: boolean
  isQuickNext?: boolean
}

export const Pagination = (propsRaw: PaginationProps) => {

  const [eventHandlers, props] = generateProps(propsRaw)

  const [pagers, setPagers] = createSignal<Pager[]>([])
  const [currentPage, setCurrentPage] = createSignal(1)
  const [totalPage, setTotalPage] = createSignal(1)
  let maxPager = 0

  const showPagination = () => !(props.hideOnSinglePage && totalPage() === 1)

  const paginationClasses = () => mergeClasses([
    'sp-pagination',
    props.class ?? '',
  ])

  const paginationBtnClasses = (index: number) => mergeClasses([
    'sp-pagination-btn',
    currentPage() === index ? 'active' : ''
  ])

  createEffect(() => {
    if (props.total <= 0) {
      return
    }
    setTotalPage(getTotalPage(props.total, props.pageSize))
  })

  createEffect(on(
    [totalPage, () => props.maxPager],
    () => {
      const _totalPage = totalPage()
      maxPager = props.maxPager > _totalPage ? _totalPage : props.maxPager
      setCurrentPage(props.currentPage)
    },
  ))

  createEffect(on(
    currentPage,
    (v) => {
      setPagers(generatePagers(v, maxPager, totalPage()))
    },
  ))

  const PrevPage = () => typeof props.prev === 'boolean' ? <ChevronLeftFilled /> : props.prev
  const NextPage = () => typeof props.next === 'boolean' ? <ChevronRightFilled /> : props.next
  const QuickPrePage = () => props.quickPrev ? props.quickPrev : <MoreFilled />
  const QuickNextPage = () => props.quickNext ? props.quickNext : <MoreFilled />
  const Pager = (item: { page: number, }) => props.page ? props.page(item.page) : item.page

  function onPrevPage() {
    setCurrentPage(value => getPrevPage(value))
  }

  function onNextPage() {
    setCurrentPage(value => getNextPage(value, totalPage()))
  }

  function onQuickPrePage() {
    setCurrentPage(value => getQuickPrevPage(value, maxPager))
  }

  function onQuickNextPage() {
    setCurrentPage(value => getQuickNextPage(value, totalPage(), maxPager))
  }

  function onCurrentPage(page: number) {
    setCurrentPage(page)
  }

  return (
    <Show when={showPagination()}>
      <div
        class={paginationClasses()}
        classList={props.classList}
        style={props.style}
        ref={props.ref}
        {...eventHandlers}
      >
        <Show when={props.prev}>
          <SpIconButton
            class='sp-pagination-btn'
            color={props.color}
            type={props.type}
            size={props.size}
            round={props.round}
            onClick={onPrevPage}
          >
            <PrevPage />
          </SpIconButton>
        </Show>
        <For each={pagers()}>
          {
            (item) => {
              if (item.isQuickPrev) {
                return (
                  <SpIconButton
                    class='sp-pagination-btn'
                    type={props.type}
                    color={props.color}
                    size={props.size}
                    round={props.round}
                    onClick={onQuickPrePage}
                  >
                    <QuickPrePage />
                  </SpIconButton>
                )
              }
              if (item.isQuickNext) {
                return (
                  <SpIconButton class='sp-pagination-btn'
                    type={props.type}
                    color={props.color}
                    size={props.size}
                    round={props.round}
                    onClick={onQuickNextPage}
                  >
                    <QuickNextPage />
                  </SpIconButton>
                )
              }
              if (item.page !== undefined) {
                return (
                  <SpButton
                    class={paginationBtnClasses(item.page)}
                    type={props.type} color={props.color}
                    size={props.size} round={props.round}
                    onClick={[onCurrentPage, item.page]}
                  >
                    <Pager page={item.page} />
                  </SpButton>
                )
              }
            }
          }
        </For>
        <Show when={props.next}>
          <SpIconButton
            class='sp-pagination-btn'
            type={props.type}
            color={props.color}
            size={props.size}
            round={props.round}
            onClick={onNextPage}
          >
            <NextPage />
          </SpIconButton>
        </Show>
        {props.children}
      </div>
    </Show>
  )
}

function getTotalPage(total: number, pageSize: number) {
  return Math.ceil(total / pageSize)
}

/**
 * 生成页码
 * 
 * @param currentPage 
 * @param maxPager 
 * @param totalPage 
 * @returns 
 */
function generatePagers(currentPage: number, maxPager: number, totalPage: number): Pager[] {
  const pagers: Pager[] = [{ page: 1 }]
  const half = Math.floor((maxPager - 2) / 2)
  if (currentPage + half < maxPager) {
    for (let i = 2; i < maxPager; i++) {
      pagers.push({ page: i })
    }
    if (totalPage > maxPager) {
      pagers.push({ isQuickNext: true })
    }
  } else if (currentPage - half > totalPage - (maxPager - 1)) {
    if (totalPage - maxPager > 0) {
      pagers.push({ isQuickPrev: true })
    }
    for (let i = totalPage - (maxPager - 2); i < totalPage; i++) {
      pagers.push({ page: i })
    }
  } else if (totalPage > 1) {
    pagers.push({ isQuickPrev: true })
    for (let i = currentPage - half; i <= currentPage + half; i++) {
      pagers.push({ page: i })
    }
    pagers.push({ isQuickNext: true })
  }
  if (totalPage > 1) {
    pagers.push({ page: totalPage })
  }
  return pagers
}

/**
 * 获取上一页，超出返回第一页
 * 
 * @param currentPage 当前页
 * @returns 
 */
function getPrevPage(currentPage: number): number {
  const prevPage = currentPage - 1
  return prevPage < 1 ? 1 : prevPage
}

/**
 * 获取下一页，超出返回最后一页
 * 
 * @param currentPage 当前页
 * @param totalPage 总页数
 * @returns 
 */
function getNextPage(currentPage: number, totalPage: number): number {
  const nextPage = currentPage + 1
  return nextPage > totalPage ? totalPage : nextPage
}

/**
 * 获取快进页，超出返回第一页
 * 
 * @param currentPage 当前页
 * @param maxPager 最大页码数量
 * @returns 
 */
function getQuickPrevPage(currentPage: number, maxPager: number): number {
  const prevPage = currentPage - (maxPager - 2)
  return prevPage < 1 ? 1 : prevPage
}

/**
 * 获取快退页，超出返回最后一页
 * 
 * @param currentPage 当前页
 * @param totalPage 总页数
 * @param maxPager 最大页码数量
 * @returns 
 */
function getQuickNextPage(currentPage: number, totalPage: number, maxPager: number): number {
  const nextPage = currentPage + (maxPager - 2)
  return nextPage > totalPage ? totalPage : nextPage
}