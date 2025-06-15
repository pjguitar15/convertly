'use client'

type BMIFormProps = {
  weight: string // ✅ string, not number
  height: string // ✅ string, not number
  age: string // ✅ string, not number
  gender: 'male' | 'female'
  setWeight: (v: string) => void // ✅ accepts string now
  setHeight: (v: string) => void // ✅ accepts string now
  setAge: (v: string) => void // ✅ accepts string now
  setGender: (v: 'male' | 'female') => void
}

export default function BMIForm({
  weight,
  height,
  age,
  gender,
  setWeight,
  setHeight,
  setAge,
  setGender,
}: BMIFormProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
      <div>
        <label className='block mb-1 text-sm text-stone-600 font-medium'>
          Height (cm):
        </label>
        <input
          value={height} // ✅ stays string
          onChange={(e) => setHeight(e.target.value)} // ✅ pass raw string
          type='number'
          placeholder='Enter your height in cm'
          className='p-3 rounded outline-none text-center text-lg bg-stone-200 text-stone-900 w-full'
        />
      </div>

      <div>
        <label className='block mb-1 text-sm text-stone-600 font-medium'>
          Weight (kg):
        </label>
        <input
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          type='number'
          placeholder='Enter your weight in kg'
          className='p-3 rounded outline-none text-center text-lg bg-stone-200 text-stone-900 w-full'
        />
      </div>

      <div>
        <label className='block mb-1 text-sm text-stone-600 font-medium'>
          Age:
        </label>
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type='number'
          placeholder='Enter your age'
          className='p-3 rounded outline-none text-center text-lg bg-stone-200 text-stone-900 w-full'
        />
      </div>

      <div>
        <label className='block mb-1 text-sm text-stone-600 font-medium'>
          Gender:
        </label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value as 'male' | 'female')}
          className='p-3 rounded outline-none text-center text-lg bg-stone-200 text-stone-900 w-full'
        >
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
      </div>
    </div>
  )
}
