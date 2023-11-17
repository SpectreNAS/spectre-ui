import type { JSX } from 'solid-js'

export function SunLinear(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}><g fill='none' stroke='currentColor' stroke-width='1.5'><circle cx='12' cy='12' r='6'></circle><path stroke-linecap='round' d='M12 2v1m0 18v1m10-10h-1M3 12H2m17.07-7.07l-.392.393M5.322 18.678l-.393.393m14.141-.001l-.392-.393M5.322 5.322l-.393-.393'></path></g></svg>
  )
}

