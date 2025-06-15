'use client'

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        '“Finally, a converter that respects my privacy and works flawlessly every time. Clean interface and zero ads!”',
      author: '— Jane D., Freelance Designer',
    },
    {
      quote:
        '“I use it daily for my assignments and travel planning. Super accurate and no unnecessary clutter!”',
      author: '— Mark S., University Student',
    },
    {
      quote:
        '“Convert Like A Pro helps me handle quick unit and currency conversions without distractions. It’s clean, reliable, and just works.”',
      author: '— Philson S., Sound Engineer',
    },
  ]

  return (
    <section className='py-24 bg-stone-50'>
      <h2 className='text-3xl md:text-4xl font-bold text-center mb-16 text-stone-900'>
        💬 What Our Users Say
      </h2>
      <div className='max-w-4xl mx-auto grid gap-8 md:grid-cols-3 px-4'>
        {testimonials.map((t, i) => (
          <div
            key={i}
            className='bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300'
          >
            <p className='text-lg italic text-stone-700 mb-4'> {t.quote} </p>
            <p className='font-semibold text-stone-900'> {t.author} </p>
          </div>
        ))}
      </div>
    </section>
  )
}
