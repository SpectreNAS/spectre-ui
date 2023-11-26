import { JSX } from 'solid-js'

export interface AnchorProps {
  children: JSX.Element
  href: string
}

export const Anchor = (props: AnchorProps) => {

  return (
    <h2 class='mt-9 mb-5'>
      {props.children}
      <a href={props.href}></a>
    </h2>
  )
}