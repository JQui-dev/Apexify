export const currentYear = ({ year }) => {
  const currentYear = new Date().getFullYear().toString()
  if (currentYear === year) {
    return true
  }
  return false
}
