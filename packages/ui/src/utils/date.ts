import dayjs from 'dayjs'

export function getDateKey(date: dayjs.Dayjs): string {
  return `${date.year()}-${date.month()}-${date.date()}`
}