import { useEffect, useState } from 'react'

export const useChamp = ({ year, stand }) => {
  const [champ, setChamp] = useState()

  useEffect(() => {
    const what = stand === 'team' ? 'constructorStandings' : 'driverStandings'

    const fetchIt = async () => {
      try {
        const res = await fetch(
          `https://ergast.com/api/f1/${year}/${what}/1.json`
        )
        if (res.ok) {
          const resJson = await res.json()
          const listPath = resJson.MRData.StandingsTable.StandingsLists[0]
          if (stand === 'driver') {
            setChamp(listPath.DriverStandings[0])
          } else if (stand === 'team') {
            setChamp(listPath.ConstructorStandings[0])
          }
        } else {
          console.error('Error fetching')
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchIt()
  }, [year])

  return { champ }
}
