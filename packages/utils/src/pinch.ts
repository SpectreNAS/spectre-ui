import { getDistance } from './math'
import { Point } from './types'

export class Pinch {

  private _firstPoint: Point = { x: 0, y: 0 }

  private _secondPoint: Point = { x: 0, y: 0 }

  private _firstDistance = 0

  private _firstZoom = 1

  //缩放值：根据初始的两个点和移动后的两个点计算比例得出缩放值
  zoom = 1

  start(first: Point, second: Point): this {
    this._firstPoint = first
    this._secondPoint = second
    this._firstZoom = this.zoom
    this._firstDistance = getDistance(this._firstPoint, this._secondPoint)
    return this
  }

  move(first: Point, second: Point): this {
    const secondDistance = getDistance(first, second)
    this.zoom = Math.round((secondDistance * (this._firstZoom / this._firstDistance)) * 100) / 100
    return this
  }
}