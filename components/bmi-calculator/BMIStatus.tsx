'use client'

type BMIStatusProps = {
  status: 'idle' | 'analyzing' | 'generating' | 'done'
  bmi: number | null
  category: string
  emoji: string
}

const categoryColors = {
  Underweight: 'bg-yellow-100 border-yellow-300 text-yellow-800',
  'Normal weight': 'bg-green-100 border-green-300 text-green-800',
  Overweight: 'bg-orange-100 border-orange-300 text-orange-800',
  Obesity: 'bg-red-100 border-red-300 text-red-800',
}

export default function BMIStatus({
  status,
  bmi,
  category,
  emoji,
}: BMIStatusProps) {
  const alertStyle =
    status === 'done'
      ? categoryColors[category as keyof typeof categoryColors] || ''
      : ''

  return (
    <div
      className={`mt-6 p-6 rounded-lg text-center transition ${
        status === 'done' ? `border ${alertStyle}` : ''
      }`}
    >
      {status === 'idle' && (
        <p className='text-xl font-medium'>
          Enter your weight and height to calculate BMI.
        </p>
      )}
      {status === 'analyzing' && (
        <p className='text-xl font-medium animate-pulse'>🔍 Analyzing...</p>
      )}
      {status === 'generating' && (
        <p className='text-xl font-medium animate-pulse'>
          ⏳ Generating results...
        </p>
      )}
      {status === 'done' && bmi !== null && (
        <>
          <p className='text-2xl font-bold'>
            {emoji} Your BMI: {bmi.toFixed(1)}
          </p>
          <p className='text-lg font-medium'>{category}</p>
        </>
      )}
    </div>
  )
}
