export function getYears () {
  const years = []
  const dateYear = new Date().getFullYear()

  for (let year = dateYear; year >= 1950; year--) {
    years.push(year.toString())
  }

  return { years }
}
