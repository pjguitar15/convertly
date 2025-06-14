'use client'

type BMIExtraInfoProps = {
  normalWeightRange: string
  calories: number | null
}

export default function BMIExtraInfo({
  normalWeightRange,
  calories,
}: BMIExtraInfoProps) {
  return (
    <div className='mt-4 text-sm text-stone-700 space-y-2 text-center'>
      <p>
        ✅ Healthy weight range for your height:{' '}
        <strong>{normalWeightRange}</strong>
      </p>
      {calories && (
        <>
          <p>
            🍽️ Estimated daily calories to maintain weight:{' '}
            <strong>{Math.round(calories)} kcal</strong>
          </p>
          <p>
            🍱 Suggested per meal (3 meals):{' '}
            <strong>{Math.round(calories / 3)} kcal</strong>
          </p>
        </>
      )}
    </div>
  )
}
