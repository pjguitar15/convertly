import { navbarLinks } from '@/constants/navbarLinks'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import Logo from './Logo'

export default function Footer() {
  const socialLinks = [
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@philcobjosol',
      icon: <FaYoutube className='text-lg' />,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/pjguitar15',
      icon: <FaGithub className='text-lg' />,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/philcob-suzuki-josol-446241300/',
      icon: <FaLinkedin className='text-lg' />,
    },
  ]

  return (
    <footer className='bg-stone-200 text-stone-700 text-sm mt-20'>
      <div className='max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Logo & Description */}
        <div>
          <Logo className='mb-5 max-w-[180px]' href='/' />
          <p className='text-stone-600'>
            Your all-in-one unit converter tool. Accurate, fast, and built for
            every need.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className='text-lg font-semibold mb-3'>Quick Links</h3>
          <ul className='space-y-2'>
            {navbarLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
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
          <div className='flex flex-wrap gap-4 mt-2'>
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className='flex items-center gap-1 hover:underline'
                target='_blank'
                rel='noopener noreferrer'
              >
                {social.icon}
                <span>{social.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-stone-300 py-4 text-center text-xs text-stone-500'>
        &copy; {new Date().getFullYear()} Convert Like A Pro. All rights
        reserved. | Developed by Philcob.
      </div>
    </footer>
  )
}
