import dayjs from 'dayjs'

export function getDateKey(date: dayjs.Dayjs): string {
  return `${date.year()}-${date.month()}-${date.date()}`
}

export function getClampDate(date: dayjs.Dayjs, min?: dayjs.Dayjs, max?: dayjs.Dayjs, unit?: dayjs.OpUnitType): dayjs.Dayjs {
  if (min !== undefined && date.isBefore(min, unit)) {
    return min
  }
  if (max !== undefined && date.isAfter(max, unit)) {
    return max
  }
  return date
}