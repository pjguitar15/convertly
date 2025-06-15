'use client'

import { useState, useEffect } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import BMIForm from './BMIForm'
import BMIStatus from './BMIStatus'
import BMIExtraInfo from './BMIExtraInfo'
import PageTransition from '../PageTransition'

export default function BMICalculator() {
  // ✅ Use string for input-friendly handling
  const [weight, setWeight] = useState<string>('0')
  const [height, setHeight] = useState<string>('0')
  const [age, setAge] = useState<string>('25')
  const [gender, setGender] = useState<'male' | 'female'>('male')
  const [bmi, setBmi] = useState<number | null>(null)
  const [category, setCategory] = useState<string>('')
  const [emoji, setEmoji] = useState<string>('')
  const [normalWeightRange, setNormalWeightRange] = useState<string>('')
  const [calories, setCalories] = useState<number | null>(null)
  const [status, setStatus] = useState<
    'idle' | 'analyzing' | 'generating' | 'done'
  >('idle')

  useEffect(() => {
    // ✅ Parse once at top
    const weightNumber = Number(weight)
    const heightNumber = Number(height)
    const ageNumber = Number(age)

    if (weightNumber > 0 && heightNumber > 0 && ageNumber > 0) {
      setStatus('analyzing')
      setBmi(null)
      setCategory('')
      setEmoji('')
      setNormalWeightRange('')
      setCalories(null)

      const analyzingDuration = Math.floor(Math.random() * 800) + 700
      const generatingDuration = Math.floor(Math.random() * 800) + 700

      const analyzingTimer = setTimeout(() => {
        setStatus('generating')
      }, analyzingDuration)

      const generatingTimer = setTimeout(() => {
        const heightInMeters = heightNumber / 100
        const calculatedBMI = weightNumber / (heightInMeters * heightInMeters)
        setBmi(calculatedBMI)

        if (calculatedBMI < 18.5) {
          setCategory('Underweight')
          setEmoji('🍃')
        } else if (calculatedBMI < 24.9) {
          setCategory('Normal weight')
          setEmoji('✅')
        } else if (calculatedBMI < 29.9) {
          setCategory('Overweight')
          setEmoji('⚠️')
        } else {
          setCategory('Obesity')
          setEmoji('🚨')
        }

        const minNormalWeight = 18.5 * (heightInMeters * heightInMeters)
        const maxNormalWeight = 24.9 * (heightInMeters * heightInMeters)
        setNormalWeightRange(
          `${minNormalWeight.toFixed(1)} kg – ${maxNormalWeight.toFixed(1)} kg`,
        )

        // ✅ Mifflin-St Jeor for BMR:
        const bmr =
          10 * weightNumber +
          6.25 * heightNumber -
          5 * ageNumber +
          (gender === 'male' ? 5 : -161)
        const estimatedCalories = bmr * 1.2
        setCalories(estimatedCalories)

        setStatus('done')
      }, analyzingDuration + generatingDuration)

      return () => {
        clearTimeout(analyzingTimer)
        clearTimeout(generatingTimer)
      }
    } else {
      setStatus('idle')
      setBmi(null)
      setCategory('')
      setEmoji('')
      setNormalWeightRange('')
      setCalories(null)
    }
  }, [weight, height, age, gender])

  return (
    <main className='bg-white border border-stone-100 shadow rounded-xl p-8 md:p-14 mx-auto w-full max-w-3xl'>
      <PageTransition>
        <h1 className='text-2xl lg:text-3xl font-bold mb-8 text-center flex justify-center items-center gap-2 text-stone-900'>
          <AiOutlineHeart className='text-5xl md:text-3xl' />
          BMI Calculator
        </h1>

        <div className='flex flex-col gap-4'>
          <BMIForm
            weight={weight}
            height={height}
            age={age}
            gender={gender}
            setWeight={setWeight}
            setHeight={setHeight}
            setAge={setAge}
            setGender={setGender}
          />
          <BMIStatus
            status={status}
            bmi={bmi}
            category={category}
            emoji={emoji}
          />
          {status === 'done' && bmi !== null && (
            <BMIExtraInfo
              normalWeightRange={normalWeightRange}
              calories={calories}
            />
          )}
        </div>
      </PageTransition>
    </main>
  )
}
