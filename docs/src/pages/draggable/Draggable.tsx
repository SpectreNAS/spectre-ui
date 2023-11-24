import { SpDraggable } from '@spectre-ui/core'

export const Draggable = () => {

  return (
    <div class='p-5'>
      <h1>Draggable</h1>

      <h2>基础用法</h2>
      <div class=' mb-4 relative h-200px'>
        <SpDraggable>
          <div class='w-50px h-50px bg-[var(--bg-brand-default)]'></div>
        </SpDraggable>
      </div>
    </div>
  )
}