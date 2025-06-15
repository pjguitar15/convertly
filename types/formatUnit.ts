export const formatUnit = (unit: string, value: number) => {
  if (Number(value) === 1) {
    // Singular: remove trailing 's' if any
    return unit.endsWith('s') ? unit.slice(0, -1) : unit
  } else {
    // Plural: ensure trailing 's'
    return unit.endsWith('s') ? unit : unit + 's'
  }
}
