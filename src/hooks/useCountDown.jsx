import { useEffect, useState } from 'react'

export function useCountDown ({ date, time }) {
  const [cd, setCd] = useState({ days: 0, hours: 0, minutes: 0 })
  const [countdownReady, setCountdownReady] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const target = new Date(`${date}T${time}`).getTime()
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        clearInterval(intervalId)
        setCd({ days: 0, hours: 0, minutes: 0 })
        setCountdownReady(true)
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / (1000 * 60)) % 60)
        setCd({ days, hours, minutes })
        setCountdownReady(false)
      }
    }, 1000)

    return () => clearInterval(intervalId)
  }, [date, time])

  return { cd, countdownReady }
}
