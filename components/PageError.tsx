'use client'
import CenterItems from './CenterItems'
import { AiOutlineWarning } from 'react-icons/ai'
import PrimaryButton from './PrimaryButton'
import { useRouter } from 'next/navigation'

const PageError = ({ category }: { category: string }) => {
  const router = useRouter()
  return (
    <CenterItems className='text-white flex flex-col gap-4'>
      <h1 className='text-4xl flex items-center gap-2 font-semibold'>
        <AiOutlineWarning className='text-5xl inline-block' />
        Page Error
      </h1>
      <div className='text-gray-300 flex flex-col justify-center items-center gap-2'>
        <p>
          We could not find the page for{' '}
          <span className='bg-gray-900 py-1 px-2 rounded text-gray-300'>
            /{category}
          </span>
          .
        </p>
        <p>
          Please check the URL and try again, or navigate to a different
          section.
        </p>
      </div>
      <PrimaryButton
        text='Go back'
        onClick={() => router.push('/convert/length')}
      />
    </CenterItems>
  )
}

export default PageError
