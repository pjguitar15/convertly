'use client'

import { useState, useRef, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { animate, motion, AnimatePresence } from 'framer-motion'

type Testimonial = {
  quote: string
  author: string
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote:
        '“The website seems to be really good, I immediately get what I need, and it is really easy to use!”',
      author: '— Jason Teves, Graphic Designer',
    },
    {
      quote:
        '“Convert Like A Pro helps me handle quick unit and currency conversions without distractions. It’s clean, reliable, and just works.”',
      author: '— Philson S., Sound Engineer',
    },
    {
      quote:
        '“As someone who constantly converts weights for my workouts and gym equipment inventory, this app is a total game-changer. No pop-ups, no bloat—just fast, accurate conversions. I especially appreciate that it runs smoothly even on mobile, which is perfect when Im on the gym floor or updating macros on the fly.”',
      author: '— Oliver Pasinio, Gym Owner & Online Entrepreneur',
    },
    // Add more to test scrolling
  ]

  const MAX_LENGTH = 140
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)
  const [centered, setCentered] = useState(false)

  // Update nav buttons & center state
  const updateButtons = () => {
    const el = scrollRef.current
    if (el) {
      const { scrollLeft, scrollWidth, clientWidth } = el
      const overflow = scrollWidth - clientWidth
      setShowLeft(scrollLeft > 0)
      setShowRight(scrollLeft + clientWidth < scrollWidth - 1)
      setCentered(overflow <= 0)
    }
  }

  useEffect(() => {
    const el = scrollRef.current
    if (el) {
      el.addEventListener('scroll', updateButtons)
      updateButtons()
    }
    window.addEventListener('resize', updateButtons)
    return () => {
      el?.removeEventListener('scroll', updateButtons)
      window.removeEventListener('resize', updateButtons)
    }
  }, [])

  // Smooth scroll with snap temporarily disabled
  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return

    const card = el.querySelector('div > div') as HTMLElement
    const cardWidth = card?.clientWidth || 300
    const gap = 24 // gap-6 ~ 1.5rem in px
    const scrollAmount = cardWidth + gap

    const start = el.scrollLeft
    const end =
      direction === 'left' ? start - scrollAmount : start + scrollAmount

    // Temporarily disable snap for smooth
    el.style.scrollSnapType = 'none'
    animate(start, end, {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
      onUpdate(value) {
        el.scrollLeft = value
      },
      onComplete() {
        el.style.scrollSnapType = '' // restore snap
      },
    })
  }

  return (
    <section className='py-24 px-4 relative'>
      <h2 className='text-3xl md:text-4xl font-bold text-center mb-16 text-stone-900'>
        💬 What Our Users Say
      </h2>

      <div className='relative'>
        {/* Left Button */}
        {showLeft && (
          <button
            onClick={() => scroll('left')}
            className='hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full border p-2 z-10 hover:bg-stone-100 transition cursor-pointer'
          >
            <FaChevronLeft className='text-stone-700' />
          </button>
        )}

        {/* Scrollable Container with hidden scrollbar + snap + auto center */}
        <div
          ref={scrollRef}
          className={`overflow-x-auto px-8 hide-scrollbar snap-x snap-mandatory ${
            centered ? 'flex justify-center' : ''
          }`}
        >
          <div
            className={`flex ${
              centered ? 'justify-center' : ''
            } gap-6 md:gap-4 min-w-max pb-2`}
          >
            {testimonials.map((t, i) => (
              <div key={i} className='snap-start'>
                <TestimonialCard testimonial={t} maxLength={MAX_LENGTH} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        {showRight && (
          <button
            onClick={() => scroll('right')}
            className='hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full border p-2 z-10 hover:bg-stone-100 transition cursor-pointer'
          >
            <FaChevronRight className='text-stone-700' />
          </button>
        )}
      </div>
    </section>
  )
}

function TestimonialCard({
  testimonial,
  maxLength,
}: {
  testimonial: Testimonial
  maxLength: number
}) {
  const [expanded, setExpanded] = useState(false)

  const isLong = testimonial.quote.length > maxLength
  const previewText = testimonial.quote.slice(0, maxLength)
  const restText = testimonial.quote.slice(maxLength)

  return (
    <div className='bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 self-start min-h-[300px] flex-shrink-0 w-80 md:w-96'>
      <p className='text-lg italic text-stone-700 mb-4'>
        {previewText}
        <AnimatePresence>
          {expanded && (
            <motion.span
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {restText}
            </motion.span>
          )}
          {isLong && !expanded && '...'}
        </AnimatePresence>
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className='text-stone-500 underline text-sm mb-4 cursor-pointer transition-colors hover:text-stone-700'
        >
          {expanded ? 'Hide' : 'See more'}
        </button>
      )}
      <p className='font-semibold text-stone-900'>{testimonial.author}</p>
    </div>
  )
}
