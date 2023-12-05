import { For } from 'solid-js'

import { AlertUsage } from './components/Alert'
import { BadgeUsage } from './components/Badge'
import { ButtonUsage } from './components/Button'
import { CheckboxUsage } from './components/Checkbox'
import { DraggableUsage } from './components/Draggable'
import { InputUsage } from './components/Input'
import { InputNumberUsage } from './components/InputNumber'
import { LinkUsage } from './components/Link'
import { PaginationUsage } from './components/Pagination'
import { PopoverUsage } from './components/Popover'
import { ProgressUsage } from './components/Progress'
import { SwitchUsage } from './components/Switch'
import { TagUsage } from './components/Tag'
import { TimePickerUsage } from './components/TimePicker'

export const Showroom = () => {
  const components = [
    <AlertUsage />,
    <ButtonUsage />,
    <BadgeUsage />,
    <LinkUsage />,
    <TagUsage />,
    <InputUsage />,
    <InputNumberUsage />,
    <TimePickerUsage />,
    <PopoverUsage />,
    <CheckboxUsage />,
    <SwitchUsage />,
    <PaginationUsage />,
    <ProgressUsage />,
    <DraggableUsage />,
  ]
  return (
    <div>
      <For each={components}>
        {
          (component) => {

            return (
              <div class=' inline-block  2xl:w-[25%] xl:w-[33%] lg:w-[50%] w-100%'>
                {component}
              </div>
            )
          }
        }
      </For>
    </div>
  )
}