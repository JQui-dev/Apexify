import { useEffect, useState } from 'react'

export const useCalendar = ({ year }) => {
  const [races, setRaces] = useState([])

  useEffect(() => {
    const fetchCalendar = async () => {
      try {
        const res = await fetch(`https://ergast.com/api/f1/${year}.json`)
        if (res.ok) {
          const resJson = await res.json()
          setRaces(resJson.MRData.RaceTable.Races)
        } else {
          console.error('Error')
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchCalendar()
  }, [year])

  return { races }
}
