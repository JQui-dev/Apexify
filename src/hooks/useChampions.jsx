import { useEffect, useState } from 'react'

export const useChampions = ({ page }) => {
  const [champs, setChamps] = useState([])

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const res = await fetch(
          `http://ergast.com/api/f1/driverstandings/1/drivers.json?limit=30&offset=${
            page * 30
          }`
        )
        if (res.ok) {
          const resJson = await res.json()
          setChamps(resJson.MRData.DriverTable.Drivers)
        } else {
          console.error('Error')
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchChampions()
  }, [page])

  return { champs }
}
