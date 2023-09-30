export const dateFormat = ({ dateToFormat }) => {
  const date = new Date(dateToFormat)

  const month = date.getMonth() + 1 // Months are zero-based
  const day = date.getDate()

  const newDate = `${month} / ${day}`

  return newDate
}

export const timeFormat = ({ timeToFormat }) => {
  const parsedTime = new Date(`1970-01-01T${timeToFormat}`)

  const hours = parsedTime.getHours()
  const minutes = parsedTime.getMinutes()

  if (!isNaN(hours) && !isNaN(minutes)) {
    const newTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`

    return newTime
  }
}
