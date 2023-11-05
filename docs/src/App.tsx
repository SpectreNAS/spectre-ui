import { SpCheckbox, SpConfigProvider } from '@spectre-ui/core'
import '@spectre-ui/core/styles.css'

function App() {

  return (
    <div class=' bg-black top-0 right-0 bottom-0 left-0 absolute'>
      <SpConfigProvider>
        <SpCheckbox></SpCheckbox>
      </SpConfigProvider>

    </div>
  )
}

export default App
