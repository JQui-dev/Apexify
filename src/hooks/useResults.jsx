import { useEffect, useState } from 'react'

import { fetchAny } from '../services/fetchAny'

export function useResults ({ year, round }) {
  const [error, setError] = useState(false)
  const [race, setRace] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRace({ param: `${year}/${round}/results` })
  }, [])

  const fetchRace = async ({ param }) => {
    try {
      setError(false)
      setLoading(true)
      const data = await fetchAny({ param })
      const dataPath = data?.RaceTable?.Races[0]
      if (dataPath === undefined) {
        setError(true)
        return setLoading(false)
      }
      const currentYear = new Date().getFullYear().toString()

      const newData = {
        current: dataPath?.season === currentYear && true,
        name: dataPath?.raceName,
        season: dataPath?.season,
        round: dataPath?.round,
        circuit: dataPath?.Circuit?.circuitName,
        circuitID: dataPath?.Circuit?.circuitId,
        city: dataPath?.Circuit?.Location?.locality,
        country: dataPath?.Circuit?.Location?.country,
        location: `${dataPath?.Circuit?.Location?.locality}, ${dataPath?.Circuit?.Location?.country}`,
        results: dataPath?.Results?.map(res => ({
          position: res.position,
          grid: res.grid,
          points: res.points,
          status: res.status,
          laps: res.laps,
          time: res.Time?.time,
          timeMillis: res.Time?.millis,
          FLRank: res.FastestLap?.rank,
          FLLap: res.FastestLap?.lap,
          FLTime: res.FastestLap?.Time?.time,
          FLAvSpeed: res.FastestLap?.AverageSpeed?.speed,
          FLAvSpeedUnit: res.FastestLap?.AverageSpeed?.unit,
          id: res.Driver?.driverId,
          code: res.Driver?.code,
          fullName: `${res.Driver?.givenName} ${res.Driver?.familyName}`,
          shortName: `${res.Driver?.givenName.charAt(0)}. ${
            res.Driver?.familyName
          }`,
          givenName: res.Driver?.givenName,
          familyName: res.Driver?.familyName,
          constructorID: res.Constructor?.constructorId,
          constructorName: res.Constructor?.name,
          state: res.Time?.time || res.status
        }))
      }
      setRace(newData)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  return { race, loading, error }
}
