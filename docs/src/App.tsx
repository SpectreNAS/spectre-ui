import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import { SpButton } from '@spectre-ui/core'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <div>Hello {count()}

      <SpButton></SpButton>
    </div>
  )
}

export default App
