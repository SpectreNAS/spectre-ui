import { FlowProps } from 'solid-js'

export type CardProps = FlowProps

export const Card = (props: CardProps) => {

  return (
    <div class='p-6 rounded border border-solid border-[var(--border-common-default)]'>{props.children}</div>
  )
}