import { useEffect, useState } from 'react'

import { fetchAny } from '../services/fetchAny'

export function useFutureRace ({ year, round }) {
  // FETCH THE RACE WITH THE PARAMS
  const [futureRace, setFutureRace] = useState({})

  useEffect(() => {
    fetchFutureRace({ year, round })
  }, [year, round])

  const fetchFutureRace = async ({ year, round }) => {
    const data = await fetchAny({ param: `${year}/${round}` })
    const currentYear = new Date().getFullYear().toString()
    const path = data.RaceTable.Races[0]
    const newData = {
      current: path?.season === currentYear && true,
      name: path.raceName,
      circuitID: path.Circuit.circuitId,
      circuitLocation: `${path.Circuit.Location.locality}, ${path.Circuit.Location.country}`,
      date: path.date,
      time: path.time
    }
    setFutureRace(newData)
  }

  return { futureRace }
}
