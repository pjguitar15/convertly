export type Category =
  | 'length'
  | 'mass'
  | 'temperature'
  | 'time'
  | 'area'
  | 'volume'
  | 'speed'
  | 'energy'

export const categories: Record<Category, string[]> = {
  length: ['meters', 'kilometers', 'miles', 'feet'],
  mass: ['grams', 'kilograms', 'pounds', 'ounces'],
  temperature: ['celsius', 'fahrenheit', 'kelvin'],
  time: ['seconds', 'minutes', 'hours', 'days'],
  area: ['square meters', 'square kilometers', 'square miles', 'acres'],
  volume: ['liters', 'milliliters', 'gallons', 'cubic meters'],
  speed: ['meters/second', 'kilometers/hour', 'miles/hour'],
  energy: ['joules', 'calories', 'kilojoules', 'kilocalories'],
}
