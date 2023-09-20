import { useEffect, useState } from 'react'

import { fetchAny } from '../services/fetchAny'
import { currentYear } from '../services/currentYear'

export function useFutureRace ({ year, round }) {
  // FETCH THE RACE WITH THE PARAMS
  const [futureRace, setFutureRace] = useState({})

  useEffect(() => {
    fetchFutureRace({ year, round })
  }, [year, round])

  const fetchFutureRace = async ({ year, round }) => {
    const newData = await fetchRace({ year, round })
    setFutureRace(newData)
  }

  const fetchRace = async ({ year, round }) => {
    const data = await fetchAny({ param: `${year}/${round}` })
    const path = data.RaceTable.Races[0]
    const isCurrentyear = currentYear({ year: path?.season })
    const newData = {
      current: isCurrentyear,
      name: path.raceName,
      circuitID: path.Circuit.circuitId,
      circuitLocation: `${path.Circuit.Location.locality}, ${path.Circuit.Location.country}`,
      date: path.date,
      time: path.time
    }
    return newData
  }

  return { futureRace }
}
