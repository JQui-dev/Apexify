import { useEffect, useState } from 'react'

import { fetchAny } from '../services/fetchAny'

export function useNextRace () {
  const [nextValid, setNextValid] = useState({})

  useEffect(() => {
    fetchNextValid()
  }, [])

  const fetchNextValid = async () => {
    const next = await fetchAny({ param: 'current/next' })
    const nextPath = next.RaceTable?.Races[0]
    const mapped = {
      season: nextPath.season,
      round: nextPath.round
    }
    setNextValid(mapped)
  }

  return { nextValid }
}
