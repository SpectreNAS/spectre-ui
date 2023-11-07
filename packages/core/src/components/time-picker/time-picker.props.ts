import { ComponentProps, ValueChanged } from '../../types'
import { ConfigType, Dayjs } from 'dayjs'

export interface TimePickerPanelProps extends ComponentProps<HTMLDivElement> {
  value?: ConfigType
  HH: boolean
  MM: boolean
  SS: boolean
  change?: ValueChanged<Dayjs>
}

export interface TimePickerProps extends TimePickerPanelProps {
  disabled?: boolean
}