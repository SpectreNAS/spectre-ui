import { JSX } from 'solid-js'

export interface ComponentPageLayoutProps {
  children?: JSX.Element
  right?: JSX.Element
}

export const ComponentPageLayout = (props: ComponentPageLayoutProps) => {

  return (
    <div class='p-5 flex'>
      <div class='w-full'>
        {props.children}
      </div>
      <div class='flex-shrink-0 w-64'>
        {props.right}
      </div>
    </div>
  )
}