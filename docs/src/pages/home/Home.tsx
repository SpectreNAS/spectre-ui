import { Ghost } from '@/components/icon/Ghost'
import { useNavigate } from '@solidjs/router'

export const Home = () => {
  const navigate = useNavigate()

  return (
    <div class='w-full h-full flex justify-center items-center'>
      <Ghost class='text-200px cursor-pointer hover:text-[var(--text-brand-hover)] active:text-[var(--text-brand-active)]' onClick={() => navigate('/guides')}></Ghost>
    </div>
  )
}