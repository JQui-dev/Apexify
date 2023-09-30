import { useEffect, useState } from 'react'
import { fetchAny } from './../services/fetchAny'
import { positionFormat } from './../services/formatData'

export function useDriver ({ driver }) {
  const [loading, setLoading] = useState(true)
  const [driverInfo, setDriverInfo] = useState({})
  const [driverResults, setDriverResults] = useState([])

  useEffect(() => {
    fetchDriver({ driver })
    fetchDriverResults({ driver })
  }, [])

  const fetchDriver = async ({ driver }) => {
    try {
      setLoading(true)
      const info = await fetchDriverInfo({ driver })
      const seasons = await fetchDriverResults({ driver })
      setDriverInfo(info)
      setDriverResults(seasons)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchDriverInfo = async ({ driver }) => {
    try {
      const data = await fetchAny({ param: `drivers/${driver}` })
      const driverPath = data.DriverTable.Drivers[0]
      const newData = {
        id: driverPath.driverId,
        code: driverPath.code,
        dateOfBirth: driverPath.dateOfBirth,
        name: `${driverPath.givenName} ${driverPath.familyName}`,
        nationality: driverPath.nationality.toUpperCase(),
        number: driverPath.permanentNumber
      }
      return newData
    } catch (error) {
      console.error(error)
    }
  }

  const fetchDriverResults = async ({ driver }) => {
    try {
      const data = await fetchAny({
        param: `drivers/${driver}/driverStandings`
      })
      const resultsPath = data.StandingsTable.StandingsLists
      const mappedSeasons = await resultsPath?.map(season => ({
        season: season.season,
        points: season.DriverStandings[0]?.points,
        position: positionFormat({
          position: season.DriverStandings[0]?.position
        }),
        wins: season.DriverStandings[0]?.wins,
        constructors: season.DriverStandings[0]?.Constructors.map(
          constructor => ({
            id: constructor.constructorId,
            name: constructor.name
          })
        )
      }))
      return mappedSeasons
    } catch (error) {
      console.error(error)
    }
  }

  return { driverInfo, driverResults, loading }
}
