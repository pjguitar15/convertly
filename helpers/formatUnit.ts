export const formatUnit = (unit: string, value: number) => {
  // Units that don't pluralize (all lowercase for easy match)
  const noPlural = [
    'celsius',
    'fahrenheit',
    'kelvin',
    'kg',
    'g',
    'km',
    'm',
    'cm',
    'mm',
    'l',
    'ml',
    'hz',
    'm²',
    'm³',
    'percent',
    '°c',
    '°f',
  ]

  const normalizedUnit = unit.toLowerCase()

  // Don't pluralize if in the list
  if (noPlural.includes(normalizedUnit)) {
    return unit // preserve original casing for output
  }

  if (Number(value) === 1) {
    return unit.endsWith('s') && unit.length > 1 ? unit.slice(0, -1) : unit
  }

  return unit.endsWith('s') ? unit : unit + 's'
}
