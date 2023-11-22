import { SpInput } from '../input'
import { SpPopover } from '../popover'
import { TimePickerPanel } from './TimePickerPanel'

export const TimePicker = () => {

  return (
    <SpPopover renderContent={<TimePickerPanel />}>
      <SpInput></SpInput>
    </SpPopover>
  )
}