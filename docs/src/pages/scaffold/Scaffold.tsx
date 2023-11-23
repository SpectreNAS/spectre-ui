import { Github } from '@/components/icon/Github'
import { Ghost } from '@/components/icon/Ghost'
import { Menu } from '@/components/icon/Menu'
import { ThemeSwitch } from '@/components/theme-switch'
import { Outlet } from '@solidjs/router'
import { SpIconButton, SpScrollArea } from '@spectre-ui/core'
import { SlideBar } from './SlideBar'
import { useNavigate } from '@solidjs/router'

export const Scaffold = () => {
  const navigate = useNavigate()

  return (
    <div class='h-full w-full flex flex-col'>
      <div class='flex h-64px box-border w-full border-b border-b-solid border-b-[var(--border-common-default)] flex-shrink-0'>
        <div class='flex px-5 items-center h-full flex-shrink-0'>
          <Ghost class='text-32px cursor-pointer' onClick={() => navigate('/')}></Ghost>
          <SpIconButton class='xl:hidden!' size='large' type='text'>
            <Menu />
          </SpIconButton>
        </div>
        <div class='flex items-center w-full h-full px-5'>
          <div class='ml-auto flex'>
            <ThemeSwitch />
          </div>
          <div class=' h-6 ml-3 border-l border-l-solid border-[var(--border-common-default)]'></div>
          <a href='https://github.com/spectrenas/spectre-ui' target='_blank'>
            <SpIconButton size='large' type='text'>
              <Github />
            </SpIconButton>
          </a>
        </div>
      </div>
      <div class='flex h-full'>
        <div class='w-300px <xl:hidden h-full'>
          <SlideBar />
        </div>
        <div class='absolute xl:left-300px left-0 right-0 top-64px bottom-0'>
          <SpScrollArea>
            <Outlet />
          </SpScrollArea>
        </div>
      </div>
    </div>
  )
}