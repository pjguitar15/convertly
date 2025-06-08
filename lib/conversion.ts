export function convert(
  category: string,
  from: string,
  to: string,
  value: number,
): number {
  const conversions: Record<string, Record<string, number>> = {
    length: {
      meters: 1,
      kilometers: 0.001,
      miles: 0.000621371,
      feet: 3.28084,
    },
    mass: {
      grams: 1,
      kilograms: 0.001,
      pounds: 0.00220462,
      ounces: 0.035274,
    },
    time: {
      seconds: 1,
      minutes: 1 / 60,
      hours: 1 / 3600,
      days: 1 / 86400,
    },
    area: {
      'square meters': 1,
      'square kilometers': 1e-6,
      'square miles': 3.861e-7,
      acres: 0.000247105,
    },
    volume: {
      liters: 1,
      milliliters: 1000,
      gallons: 0.264172,
      'cubic meters': 0.001,
    },
    speed: {
      'meters/second': 1,
      'kilometers/hour': 3.6,
      'miles/hour': 2.23694,
    },
    energy: {
      joules: 1,
      calories: 0.239006,
      kilojoules: 0.001,
      kilocalories: 0.000239006,
    },
    temperature: {}, // Handled separately
  }

  if (category === 'temperature') {
    if (from === 'celsius' && to === 'fahrenheit') return (value * 9) / 5 + 32
    if (from === 'fahrenheit' && to === 'celsius') return ((value - 32) * 5) / 9
    if (from === 'celsius' && to === 'kelvin') return value + 273.15
    if (from === 'kelvin' && to === 'celsius') return value - 273.15
    if (from === 'fahrenheit' && to === 'kelvin')
      return ((value - 32) * 5) / 9 + 273.15
    if (from === 'kelvin' && to === 'fahrenheit')
      return ((value - 273.15) * 9) / 5 + 32
    return value
  }

  const categoryConversions = conversions[category]
  if (
    !categoryConversions ||
    !categoryConversions[from] ||
    !categoryConversions[to]
  ) {
    console.warn(`Conversion not defined for ${category} from ${from} to ${to}`)
    return NaN
  }

  const base = value / categoryConversions[from]
  return base * categoryConversions[to]
}
