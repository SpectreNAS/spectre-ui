import { SpScrollArea, SpList, SpListGroup, SpListItem } from '@spectre-ui/core'
import { TagOutline } from '@/components/icon/TagOutline'
import * as globalStore from '@/store/global'
import { useNavigate } from '@solidjs/router'

export const SlideBar = () => {
  const navigate = useNavigate()
  return (
    <>
      <SpScrollArea>
        <SpList>
          <SpListGroup title='Components'>
            <SpListItem>Alerts</SpListItem>
            <SpListItem>Badges</SpListItem>
            <SpListItem>Buttons</SpListItem>
            <SpListItem>Links</SpListItem>
            <SpListItem>Tags</SpListItem>

            <SpListItem>Checkbox</SpListItem>
            <SpListItem>Radio</SpListItem>
            <SpListItem>Input</SpListItem>
            <SpListItem>InputNumber</SpListItem>
            <SpListItem>Select</SpListItem>
            <SpListItem>CascadeSelect</SpListItem>
            <SpListItem>Switch</SpListItem>
            <SpListItem>Slider</SpListItem>
            <SpListItem>DateTimePicker</SpListItem>
            <SpListItem>TimePicker</SpListItem>
            <SpListItem>ColorPicker</SpListItem>
            <SpListItem>Transfer</SpListItem>
            <SpListItem>Uploader</SpListItem>
            <SpListItem>Form</SpListItem>

            <SpListItem>ScrollArea</SpListItem>
            <SpListItem>VirtualScrollArea</SpListItem>

            <SpListItem>Table</SpListItem>
            <SpListItem>Pagination</SpListItem>

            <SpListItem>List</SpListItem>
            <SpListItem>Tabs</SpListItem>
            <SpListItem>Breadcrumb</SpListItem>

            <SpListItem>ContextMenu</SpListItem>
            <SpListItem>DropdownMenu</SpListItem>

            <SpListItem>Dialog</SpListItem>
            <SpListItem>Drawer</SpListItem>
            <SpListItem>Message</SpListItem>
            <SpListItem>Notification</SpListItem>
            <SpListItem>Popover</SpListItem>
            <SpListItem>Tooltip</SpListItem>

            <SpListItem>Loading</SpListItem>
            <SpListItem>Progress</SpListItem>

            <SpListItem>Calendar</SpListItem>
            <SpListItem>Brush</SpListItem>
            <SpListItem>Draggable</SpListItem>
            <SpListItem>Resizable</SpListItem>
          </SpListGroup>
        </SpList>
      </SpScrollArea>
      <div class='flex flex-shrink-0 p-2 h-7 border-t border-t-solid border-[var(--border-common-default)]'>
        <div class='flex items-center ml-auto'>
          <TagOutline></TagOutline>
          <span class=' ml-1 text-sm'>
            {globalStore.store.version}
          </span>
        </div>
      </div>
    </>
  )
}