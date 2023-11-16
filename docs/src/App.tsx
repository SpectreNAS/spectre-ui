import {
  SpCheckbox, SpConfigProvider, SpButton, SpTag,
  SpPagination, SpAlert, SpBadge, SpLink,
  SpInput, SpInputNumber, SpProgress,
  SpVirtualScrollArea, SpVirtualList
} from '@spectre-ui/core'
import '@spectre-ui/core/styles.css'

function App() {
  const items = () => Array.from({ length: 1000000 }).map((_, index) => ({ key: `${index + 1}`, height: 80 }))

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
          <SpCheckbox indeterminate></SpCheckbox>
          <SpCheckbox size='large'></SpCheckbox>
        </div>
        <div class='flex w-200px justify-between items-end'>
          <SpTag size='small' round closable>超小标签</SpTag>
          <SpTag round size='medium' closable>Tag</SpTag>
          <SpTag closable round>Tag</SpTag>
          <SpTag size='large' round color='danger' closable>Tag</SpTag>
        </div>
        <div>
          <SpPagination total={100}></SpPagination>
        </div>
        <div>
          <SpAlert icon title='info alert' description='info alert desc' light></SpAlert>
        </div>
      </SpConfigProvider>
      <SpBadge value={99}>
        <SpButton>Button</SpButton>
      </SpBadge>
      <div>
        <SpLink href='' underline='always'>Link</SpLink>
      </div>

      <div class='w-200px my-2'>
        <SpInput value={'123'} clearable></SpInput>
      </div>
      <div class='my-2'>
        <SpProgress class='w-150px' size='small' percentage={10} />
      </div>
      <div class='my-2'>
        <SpProgress class='w-200px' color='primary' size='medium' percentage={30} />
      </div>
      <div class='my-2'>
        <SpProgress class='w-220px' color='success' percentage={50} />
      </div>
      <div class='my-2'>
        <SpProgress class='w-240px' color='warn' size='large' percentage={70} />
      </div>
      <div class='my-2'>
        <SpProgress class='w-260px' color='danger' percentage={90} />
      </div>
      <div class='w-200px my-2'>
        <SpInputNumber showStep={true} min={0}></SpInputNumber>
      </div>
      <SpVirtualScrollArea class='my-2 w-300px h-300px'>
        <SpVirtualList items={items()}></SpVirtualList>
      </SpVirtualScrollArea>
      {/* <SpScrollArea class='my-2 w-300px h-300px' scrollX={100}>
        <div class='w-2000px h-2000px '>
          <div>aaaaaaaaaaaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaaaaaaaaaaa</div>
          <div>aaaaaaaaaaaaaaaaaaaaaaaaaa</div>
        </div>
      </SpScrollArea> */}

    </div>
  )
}

export default App
