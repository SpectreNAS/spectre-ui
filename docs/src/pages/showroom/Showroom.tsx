import { For } from 'solid-js'
import { AlertUsage } from './components/Alert'
import { BadgeUsage } from './components/Badge'
import { ButtonUsage } from './components/Button'
import { LinkUsage } from './components/Link'
import { TagUsage } from './components/Tag'
import { InputUsage } from './components/Input'
import { InputNumberUsage } from './components/InputNumber'
import { TimePickerUsage } from './components/TimePicker'
import { CheckboxUsage } from './components/Checkbox'
import { SwitchUsage } from './components/Switch'
import { PaginationUsage } from './components/Pagination'
import { ProgressUsage } from './components/Progress'
import { DraggableUsage } from './components/Draggable'
import { PopoverUsage } from './components/Popover'

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