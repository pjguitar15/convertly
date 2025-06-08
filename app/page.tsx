'use client'
import CenterItems from '@/components/CenterItems'
import PrimaryButton from '@/components/PrimaryButton'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <CenterItems>
      <div className='text-center lg:max-w-[800px] flex flex-col gap-7'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-6xl text-white'>Convert Like A Pro</h1>
          <p className='text-white text-xl font-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            mollitia rerum totam, inventore architecto laboriosam cum sapiente
          </p>
        </div>
        <PrimaryButton
          text='Start Converting Now'
          onClick={() => router.push('/convert/length')}
        />
      </div>
    </CenterItems>
  )
}
