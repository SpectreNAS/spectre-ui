import type { JSX } from 'solid-js'

export function Menu(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
      <path fill='currentColor' d='M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z' />
    </svg>
  )
}
