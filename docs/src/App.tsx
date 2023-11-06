import { SpCheckbox, SpConfigProvider, SpButton, SpTag } from '@spectre-ui/core'
import '@spectre-ui/core/styles.css'

function App() {
  function change(value: boolean) {
    console.log(value)
  }
  return (
    <div class=' bg-black top-0 right-0 bottom-0 left-0 absolute'>
      <SpConfigProvider>
        <div class='flex w-100px justify-between items-end'>
          <SpButton size='small'></SpButton>
          <SpButton size='medium'></SpButton>
          <SpButton></SpButton>
          <SpButton size='large'></SpButton>
        </div>
        <div class='flex w-100px justify-between items-end'>
          <SpCheckbox size='small'></SpCheckbox>
          <SpCheckbox size='medium'></SpCheckbox>
          <SpCheckbox indeterminate change={change}></SpCheckbox>
          <SpCheckbox size='large'></SpCheckbox>
        </div>
        <div class='flex w-200px justify-between items-end'>
          <SpTag size='small'>Tag</SpTag>
          <SpTag size='medium'>Tag</SpTag>
          <SpTag type='light'>Tag</SpTag>
          <SpTag size='large'>Tag</SpTag>
        </div>
      </SpConfigProvider>

    </div>
  )
}

export default App
