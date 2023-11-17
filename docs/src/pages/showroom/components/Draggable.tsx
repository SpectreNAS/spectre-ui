import { SpDraggable } from '@spectre-ui/core'

export const DraggableUsage = () => {
  return (
    <div class='p-10px'>
      <div class=' mb-4 relative h-200px'>
        <SpDraggable>
          <div class='w-50px h-50px bg-[var(--bg-brand-default)]'></div>
        </SpDraggable>
      </div>
    </div>
  )
}