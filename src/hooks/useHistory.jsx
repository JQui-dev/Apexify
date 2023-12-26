import { useEffect, useState } from 'react'

export function useHistory ({ type, id }) {
  const [info, setInfo] = useState([])

  useEffect(() => {
    if (type === 'driver') {
      fetchDriver({ id })
    } else if (type === 'team') {
      fetchTeam({ id })
    }
  }, [type, id])

  const fetchDriver = async ({ id }) => {
    try {
      const res = await fetch(
        `https://ergast.com/api/f1/drivers/${id}/driverStandings.json`
      )
      if (res.ok) {
        const jsonRes = await res.json()
        setInfo(jsonRes.MRData.StandingsTable.StandingsLists)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const fetchTeam = async ({ id }) => {
    try {
      const res = await fetch(
        `https://ergast.com/api/f1/constructors/${id}/constructorStandings.json`
      )
      if (res.ok) {
        const jsonRes = await res.json()
        setInfo(jsonRes.MRData.StandingsTable.StandingsLists)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return { info }
}
