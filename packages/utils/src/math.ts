import { Point } from './types'

export function getDistance(source: Point, target: Point) {
  const dx = source.x - target.x
  const dy = source.y - target.y

  return Math.sqrt(dx * dx + dy * dy)
}