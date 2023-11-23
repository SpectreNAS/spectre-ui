import { SpList, SpListGroup, SpListItem } from '@spectre-ui/core'

export const Lists = () => {

  return (
    <div class='p-5'>
      <h1>Lists</h1>

      <div>
        <SpList>
          <SpListItem>One</SpListItem>
          <SpListGroup title='Group One'>
            <SpListItem>One</SpListItem>
            <SpListItem>One</SpListItem>
          </SpListGroup>
          <SpListItem>Two</SpListItem>
        </SpList>
      </div>
    </div>
  )
}