import { useEffect, useState } from 'react'

export const useStanding = ({ year, stand, pos }) => {
  const [standingArray, setStandingArray] = useState()

  useEffect(() => {
    const what = stand === 'team' ? 'constructorStandings' : 'driverStandings'

    const fetchIt = async () => {
      try {
        const res = await fetch(
          `https://ergast.com/api/f1/${year}/${what}${pos && `/${pos}`}.json`
        )
        if (res.ok) {
          const resJson = await res.json()
          const listPath = resJson.MRData.StandingsTable.StandingsLists[0]
          if (stand === 'driver') {
            setStandingArray(listPath.DriverStandings)
          } else if (stand === 'team') {
            setStandingArray(listPath.ConstructorStandings)
          }
        } else {
          console.error('Error fetching')
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchIt()
  }, [year, stand])

  return { standingArray }
}
