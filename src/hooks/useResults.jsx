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
      const dataPath = data?.Races[0]
      if (dataPath === undefined) {
        setError(true)
        return setLoading(false)
      }
      const newData = {
        name: dataPath?.raceName,
        circuit: dataPath?.Circuit?.circuitName,
        circuitID: dataPath?.Circuit?.circuitId,
        circuitLocation: `${dataPath?.Circuit?.Location?.locality}, ${dataPath?.Circuit?.Location?.country}`,
        results: dataPath?.Results?.map(res => ({
          notFinished:
            res.positionText === 'R' ? (res.laps > 0 ? 'DNF' : 'DNS') : '',
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
          driverID: res.Driver?.driverId,
          code: res.Driver?.code,
          givenName: res.Driver?.givenName,
          familyName: res.Driver?.familyName,
          constructorID: res.Constructor?.constructorId,
          constructorName: res.Constructor?.name
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
