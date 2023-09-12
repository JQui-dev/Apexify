import { useEffect, useState } from 'react'

import { fetchAny } from './../services/fetchAny'

export function useCHampions () {
  const [champs, setChamps] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchChampions()
  }, [])

  const fetchChampions = async () => {
    try {
      setLoading(true)
      const data = await fetchAny({ param: 'driverstandings/1/drivers' })
      const mappedChamps = await data?.DriverTable?.Drivers?.map(champ => ({
        id: champ.driverId,
        fullName: `${champ.givenName} ${champ.familyName}`
      }))

      // Sort the names from A -> Z
      const sortedChamps = await mappedChamps.sort((a, b) => {
        if (a.fullName < b.fullName) return -1
        if (a.fullName > b.fullName) return 1
        return 0
      })

      setChamps(sortedChamps)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  return { champs, loading }
}
