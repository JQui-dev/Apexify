export const timeFormat = ({ timeToFormat }) => {
  const parsedTime = new Date(`1970-01-01T${timeToFormat}`)

  const hours = parsedTime.getHours()
  const minutes = parsedTime.getMinutes()

  if (!isNaN(hours) && !isNaN(minutes)) {
    const newTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`

    return newTime
  }
}

export const positionFormat = ({ position }) => {
  if (
    position.endsWith('11') ||
    position.endsWith('12') ||
    position.endsWith('13')
  ) {
    return `${position}th`
  }

  if (position.endsWith('1')) {
    return `${position}st`
  } else if (position.endsWith('2')) {
    return `${position}nd`
  } else if (position.endsWith('3')) {
    return `${position}rd`
  }
  return `${position}th`
}
