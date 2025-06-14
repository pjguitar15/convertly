'use client'
import { useEffect, useState } from 'react'

interface ExchangeRateResponse {
  status_code: number
  data: {
    base: string
    target: string
    mid: number
    unit: number
    timestamp: string
  }
}

export function useCurrencyConverter(
  fromCurrency: string,
  toCurrency: string,
  amount: number | null,
) {
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!fromCurrency || !toCurrency || amount === null || isNaN(amount)) return

    const fetchConversion = async () => {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `https://hexarate.paikama.co/api/rates/latest/${fromCurrency}?target=${toCurrency}`,
        )
        if (!res.ok) throw new Error('Failed to fetch exchange rate')
        const json: ExchangeRateResponse = await res.json()

        const rate = json.data.mid
        setConvertedAmount(amount * rate)
        localStorage.setItem('fromCurrency', fromCurrency)
        localStorage.setItem('toCurrency', toCurrency)
        localStorage.setItem('amount', String(amount))
      } catch (err) {
        console.error('error', err)
        setError('Conversion is not available for these currencies.')
        setConvertedAmount(null)
      } finally {
        setLoading(false)
      }
    }

    fetchConversion()
  }, [fromCurrency, toCurrency, amount])

  return { convertedAmount, loading, error }
}
