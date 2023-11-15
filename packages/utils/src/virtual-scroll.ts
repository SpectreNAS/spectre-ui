
export interface VirtualScrollItem {
  index: number
  y: number
  height: number
}

export interface VirtualScrollOptions {
  items: number[]
  viewHeight: number
  scrollTop?: number
  buffer?: number
}

export class VirtualScroll {

  constructor(options: VirtualScrollOptions) {
    this.setScrollTop(options.scrollTop ?? 0)
    this.setViewHeight(options.viewHeight)
    this.setBuffer(options.buffer ?? 0)
    this._items = this._generateItems(options.items)
    const lastItem = this.getLastItem()
    if (lastItem) {
      this._totalHeight = lastItem.y + lastItem.height
    }
  }

  //缓存数量
  private _buffer = 10

  //可见区域高度
  private _viewHeight = 0

  //总高度
  private _totalHeight = 0

  //滚动方向 大于0为向下滚动，小于0为向上滚动
  private _scrollDirection = 0

  //滚动距离
  private _scrollTop = 0

  private _startIndex = 0

  private _endIndex = 0

  //所有items
  private _items: VirtualScrollItem[] = []
  
  //前置缓存items
  private _beforeBufferItems: VirtualScrollItem[] = []

  //后置缓存items
  private _afterBufferItems: VirtualScrollItem[] = []

  get buffer(): number {
    return this._buffer
  }

  get viewHeight(): number {
    return this._viewHeight
  }

  get totalHeight(): number {
    return this._totalHeight
  }

  get scrollTop(): number {
    return this._scrollTop
  }

  get startIndex(): number {
    return this._startIndex
  }

  get endIndex(): number {
    return this._endIndex
  }

  getFirstItem(): VirtualScrollItem | undefined {
    if (this._items.length > 0) {
      return this._items[0]
    }
    return
  }

  getLastItem(): VirtualScrollItem | undefined {
    if (this._items.length > 0) {
      return this._items[this._items.length - 1]
    }
    return 
  }

  get items(): VirtualScrollItem[] {
    return this._items
  }

  get virtualItems(): VirtualScrollItem[] {
    return this._createVirtualItems()
  }

  setBuffer(value: number): this {
    if (value < 0) {
      return this
    }
    this._buffer = value
    return this
  }

  setViewHeight(value: number): this { 
    if (value < 0) {
      return this
    }
    this._viewHeight = value
    return this
  }

  setScrollTop(value: number): this {
    if (value < 0) {
      return this
    }
    this._scrollDirection = value - this._scrollTop
    this._scrollTop = value
    return this
  }

  private _isRenderBeforeBufferItems() {
    if (this._beforeBufferItems.length > 0) {
      const item = this._beforeBufferItems[0]
      if (item.y + item.height > this._scrollTop) {
        return true
      }
    }
    return false
  }

  private _isRenderAfterBufferItems() {
    if (this._afterBufferItems.length > 0) {
      const item = this._afterBufferItems[this._afterBufferItems.length - 1]
      if (item.y < this._scrollTop + this._viewHeight) {
        return true
      } 
    }
    return false
  }

  private _createVirtualItems() {
    this._startIndex = this.findStartIndex(0, this._items.length - 1)
    if (this._startIndex === -1) return []
    const viewItems = this._generateViewItems(this._startIndex)
    this._endIndex = this._startIndex + viewItems.length - 1
    if (this._scrollDirection > 0) {
      if (this._isRenderAfterBufferItems()) {
        this._afterBufferItems = this._generateAfterBufferItems(this._endIndex)
      } 
    } else {
      if (this._isRenderBeforeBufferItems()) {
        this._beforeBufferItems = this._generateBeforeBufferItems(this._startIndex)
      }
    }
    return [...this._beforeBufferItems, ...viewItems, ...this._afterBufferItems]
  }

  private _generateItems(items: number[]): VirtualScrollItem[] {
    let totalHeight = 0
    const vItems: VirtualScrollItem[] = []
    for (let i = 0;i < items.length;i++) {
      const height = items[i]
      this._items.push({ index: i, height, y: totalHeight })
      totalHeight += height
    }
    return vItems
  }

  /**
   * 生成前置缓冲items
   * @param startIndex 开始索引
   * @returns
   */
  private _generateBeforeBufferItems(startIndex: number): VirtualScrollItem[] {
    if (startIndex > 0) {
      const startBuffer = startIndex - this._buffer
      return this._items.slice(startBuffer < 0 ? 0 : startBuffer, startIndex)
    }
    return []
  }

  /**
   * 生成后置缓冲items
   * @param endIndex 结束索引
   * @returns
   */
  private _generateAfterBufferItems(endIndex: number): VirtualScrollItem[] {
    if (endIndex < this._items.length - 1) {
      const bufferStartIndex = endIndex + 1
      const bufferEndIndex = bufferStartIndex + this._buffer
      return this._items.slice(bufferStartIndex, bufferEndIndex)
    }
    return []
  }

  private _generateViewItems(startIndex: number): VirtualScrollItem[] {
    const items: VirtualScrollItem[] = []
    for (let i = startIndex; i < this._items.length; i++) {
      const item = this._items[i]
      items.push(item)
      if (item.y + item.height >= this._scrollTop + this._viewHeight) {
        break
      }
    }
    return items
  }

  /**
   *在items里面找到可见区域第一个item，使用二分查找
   * @param items 需要查找的items
   * @param startIndex 查找范围开始索引
   * @param endIndex 查找范围的结束索引
   * @param scrollTop y轴滚动距离
   * @returns 返回一个索引，找不到返回-1
   */
  private findStartIndex(startIndex: number, endIndex: number): number {
    if (startIndex > endIndex) {
      return -1
    }
    const middleIndex = Math.floor((startIndex + endIndex) / 2)
    const middleItem = this._items[middleIndex]
    const viewSum = this._scrollTop + this._viewHeight
    const middleItemSum = middleItem.y + middleItem.height
    if (
      viewSum < middleItem.y ||
      (middleItem.y > this._scrollTop && viewSum >= middleItemSum) ||
      (middleItem.y > this._scrollTop && middleItemSum > viewSum)
    ) {
      return this.findStartIndex(startIndex, middleIndex - 1)
    }
    if (this._scrollTop >= middleItemSum) {
      return this.findStartIndex(middleIndex + 1, endIndex)
    }
    if (middleItem.y <= this._scrollTop && middleItemSum > this.scrollTop) {
      return middleIndex
    }
    return -1
  }
}