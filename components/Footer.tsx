import Link from 'next/link'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='bg-stone-200 text-stone-700 text-sm mt-20'>
      <div className='max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Logo & Description */}
        <div>
          <h2 className='text-xl font-semibold mb-2'>Convert Like a Pro</h2>
          <p className='text-stone-600'>
            Your all-in-one unit converter tool. Accurate, fast, and built for
            every need.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className='text-lg font-semibold mb-3'>Quick Links</h3>
          <ul className='space-y-2'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/#features'>Features</Link>
            </li>
            <li>
              <Link href='/conversion-formulas'>Conversion Formulas</Link>
            </li>
            <li>
              <Link href='/live-exchange-rates'>Live Exchange Rates</Link>
            </li>
            <li>
              <Link href='/support'>Support</Link>
            </li>
          </ul>
        </div>

        {/* Legal / Contact / Social */}
        <div>
          <h3 className='text-lg font-semibold mb-3'>Stay Connected</h3>
          <p>
            Email:{' '}
            <a href='mailto:philcobsuzuki@gmail.com' className='underline'>
              philcobsuzuki@gmail.com
            </a>
          </p>
          <p className='mt-2'>Follow me on social media</p>
          <div className='flex gap-4 mt-2'>
            <Link
              href='https://www.youtube.com/@philcobjosol'
              className='flex items-center gap-1 hover:underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaYoutube className='text-lg' />
              <span>Youtube</span>
            </Link>
            <Link
              href='https://github.com/pjguitar15'
              className='flex items-center gap-1 hover:underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub className='text-lg' />
              <span>GitHub</span>
            </Link>
            <Link
              href='https://www.linkedin.com/in/philcob-suzuki-josol-446241300/'
              className='flex items-center gap-1 hover:underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin className='text-lg' />
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-stone-300 py-4 text-center text-xs text-stone-500'>
        &copy; {new Date().getFullYear()} Convert Like A Pro. All rights
        reserved. | Developed by Philcob
      </div>
    </footer>
  )
}
