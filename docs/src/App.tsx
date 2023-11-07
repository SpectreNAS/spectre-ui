import { SpCheckbox, SpConfigProvider, SpButton, SpTag } from '@spectre-ui/core'
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
      </SpConfigProvider>

    </div>
  )
}

export default App
