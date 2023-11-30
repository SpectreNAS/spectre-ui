export class Brush {

  //选择区域的x轴位置
  private _x = 0

  //选择区域的y轴位置
  private _y = 0

  //选择区域的宽度
  private _width = 0

  //选择区域的高度
  private _height = 0

  //选择区域的原点x轴位置
  private _startX = 0

  //选择区域的原点y轴位置
  private _startY = 0

  get x() {
    return this._x
  }

  get y() {
    return this._y
  }

  get width() {
    return this._width
  }

  get height() {
    return this._height
  }

  start(xy?: number): this

  start(x?: number, y?: number): this

  start(x?: number, y?: number): this {
    if (x !== undefined) {
      this._startX = x
    }
    if (y !== undefined) {
      this._startY = y
    } else if (x !== undefined) {
      this._startY = x
    }
    return this
  }

  move(xy?: number): this

  move(x?: number, y?: number): this

  move(x?: number, y?: number): this {
    if (x !== undefined) {
      this._brushX(x)
    }
    if (y !== undefined) {
      this._brushY(y)
    } else if (x !== undefined) {
      this._brushY(x)
    }
    return this
  }

  private _brushX(x: number) {
    if (x >= this._startX) {
      this._x = this._startX
      this._width = x - this._startX
    } else {
      this._x = x
      this._width = this._startX - x
    }
  }

  private _brushY(y: number) {
    if (y >= this._startY) {
      this._y = this._startY
      this._height = y - this._startY
    } else {
      this._y = y
      this._height = this._startY - y
    }
  }
}
