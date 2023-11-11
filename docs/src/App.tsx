import { SpCheckbox, SpConfigProvider, SpButton, SpTag, SpPagination, SpAlert, SpBadge, SpLink, SpDraggable, SpInput } from '@spectre-ui/core'
import '@spectre-ui/core/styles.css'

function App() {
  function change(value: boolean) {
    console.log(value)
  }
  return (
    <div class=' bg-[#1a1a1a] text-white top-0 right-0 bottom-0 left-0 absolute'>
      Hello
      <SpConfigProvider>
        <div class='flex w-100px justify-between items-end'>
          <SpButton size='small'>Button</SpButton>
          <SpButton size='medium'>Button</SpButton>
          <SpButton type='text' color='primary'>Button</SpButton>
          <SpButton size='large'>Button</SpButton>
        </div>
        <div class='flex w-100px justify-between items-end'>
          <SpCheckbox size='small'></SpCheckbox>
          <SpCheckbox size='medium'></SpCheckbox>
          <SpCheckbox indeterminate change={change}></SpCheckbox>
          <SpCheckbox size='large'></SpCheckbox>
        </div>
        <div class='flex w-200px justify-between items-end'>
          <SpTag size='small' round closable>超小标签</SpTag>
          <SpTag round size='medium' closable>Tag</SpTag>
          <SpTag closable round>Tag</SpTag>
          <SpTag size='large' round color='danger' closable>Tag</SpTag>
        </div>
        <div>
          <SpPagination total={100}></SpPagination>
        </div>
        <div>
          <SpAlert icon title='info alert' description='info alert desc' light></SpAlert>
        </div>
      </SpConfigProvider>
      <SpBadge value={99}>
        <SpButton>Button</SpButton>
      </SpBadge>
      <div>
        <SpLink href='' underline='always'>Link</SpLink>
      </div>

      <div class='w-200px'>
        <SpInput></SpInput>
      </div>
      <div class=' relative w-300px h-300px bg-[var(--bg-brand-light-default)]'>
        <SpDraggable>
          <div class='w-100px h-100px bg-[var(--bg-brand-default)]'></div>
        </SpDraggable>
      </div>
    </div>
  )
}

export default App
