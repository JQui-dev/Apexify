import { useEffect, useState } from 'react'

export function useTeam ({ teamId }) {
  const [teamInfo, setTeamInfo] = useState([])

  useEffect(() => {
    fetchTeam({ teamId })
  }, [teamId])

  const fetchTeam = async ({ teamId }) => {
    try {
      const res = await fetch(
        `https://ergast.com/api/f1/constructors/${teamId}/constructorStandings.json`
      )
      if (res.ok) {
        const jsonRes = await res.json()
        setTeamInfo(jsonRes.MRData.StandingsTable.StandingsLists)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return { teamInfo }
}
