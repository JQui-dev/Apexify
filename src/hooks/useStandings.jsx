import { useEffect, useState } from 'react'

import { fetchAny } from './../services/fetchAny'

export function useStandings () {
  const [standings, setStandings] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStand({
      type: 'drivers',
      stand: 'current/driverStandings'
    })
  }, [])

  const fetchStand = async ({ type, stand }) => {
    try {
      setLoading(true)
      const data = await fetchAny({ param: stand })
      const path = data.StandingsTable.StandingsLists[0]
      if (type === 'drivers') {
        const drivers = path.DriverStandings
        const driversMapped = drivers.map(res => ({
          position: res.position,
          points: res.points,
          wins: res.wins,

          id: res.Driver.driverId,
          name: `${res.Driver.givenName} ${res.Driver.familyName}`,
          team: res.Constructors[0].name,
          teamId: res.Constructors[0].constructorId,
          code: res.Driver.code,
          givenName: res.Driver.givenName,
          familyName: res.Driver.familyName
        }))
        setStandings(driversMapped)
      } else if (type === 'constructors') {
        const constructors = path.ConstructorStandings
        const constructorsMapped = constructors.map(res => ({
          position: res?.position,
          points: res?.points,
          wins: res?.wins,

          name: res?.Constructor.name,
          id: res?.Constructor.constructorId
        }))
        setStandings(constructorsMapped)
      }
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  return { standings, loading, fetchStand }
}
