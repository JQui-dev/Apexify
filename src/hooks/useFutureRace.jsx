import { useEffect, useState } from 'react'

import { fetchAny } from '../services/fetchAny'

export function useFutureRace ({ year, round}) {
  // FETCH THE RACE WITH THE PARAMS
  const [futureRace, setFutureRace] = useState({})

  useEffect(() => {
    fetchFutureRace({ year, round })
  }, [year, round])

  const fetchFutureRace = async ({ year, round }) => {
    const data = await fetchAny({ param: `${year}/${round}` })
    setFutureRace(data.Races[0])
  }

  return { futureRace }
}
