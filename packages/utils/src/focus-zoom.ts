export class FocusZoom {

  //缩放x轴位置
  private _x = 0

  //缩放y轴位置
  private _y = 0

  //x轴缩放大小
  private _zoomX = 1

  //y轴缩放大小
  private _zoomY = 1

  //缩放x轴偏移
  private _offsetX = 0

  //缩放y轴偏移
  private _offsetY = 0

  get offsetX() {
    return this._offsetX
  }

  get offsetY() {
    return this._offsetY
  }

  setPosition(xy?: number): this

  setPosition(x?: number, y?: number): this

  setPosition(x?: number, y?: number): this {
    if (x !== undefined) {
      this._x = x
    }
    if (y !== undefined) {
      this._y = y
    } else if (x !== undefined) {
      this._y = x
    }
    return this
  }

  setZoom(xy?: number): this

  setZoom(x?: number, y?: number): this

  setZoom(x?: number, y?: number): this {
    if (x !== undefined && x > 0) {
      this._offsetX = this._calcOffsetX(x)
      this._zoomX = x
    }
    if (y !== undefined && y > 0) {
      this._offsetY = this._calcOffsetY(y)
      this._zoomY = y
    } else if (x !== undefined && x > 0) {
      this._offsetY = this._calcOffsetY(x)
      this._zoomY = x
    }
    return this
  }

  private _calcOffsetX(zoomX: number): number {
    return calcCameraFocusZoomX(this._zoomX, zoomX, this._offsetX, this._x)
  }

  private _calcOffsetY(zoomY: number): number {
    return calcCameraFocusZoomX(this._zoomY, zoomY, this._offsetY, this._y)
  }
}

function calcCameraFocusZoomX(sourceX: number, targetX: number, offsetX: number, pointerX: number) {
  return targetX / sourceX * (pointerX + offsetX) - pointerX
}
