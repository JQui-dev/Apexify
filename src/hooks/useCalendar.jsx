import { useEffect, useState } from 'react'

import { fetchAny } from './../services/fetchAny'

export function useCalendar () {
  const [loading, setLoading] = useState(true)
  const [races, setRaces] = useState([])

  useEffect(() => {
    fetchCalendar({ year: 'current' })
  }, [])

  const fetchCalendar = async ({ year }) => {
    try {
      setLoading(true)
      setRaces([]) // Reset to avoid overwrites
      const res = await fetchAny({ param: year })
      const newRaces = await res.Races
      const mappedRaces = await newRaces.map(race => {
        const sessionData = [
          {
            type: 'FP1',
            date: race?.FirstPractice?.date,
            time: race?.FirstPractice?.time
          },
          {
            type: 'FP2',
            date: race?.SecondPractice?.date,
            time: race?.SecondPractice?.time
          },
          {
            type: 'FP3',
            date: race?.ThirdPractice?.date,
            time: race?.ThirdPractice?.time
          },
          {
            type: 'Qualifying',
            date: race?.Qualifying?.date,
            time: race?.Qualifying?.time
          },
          {
            type: 'Sprint',
            date: race?.Sprint?.date,
            time: race?.Sprint?.time
          },
          {
            type: 'Race',
            date: race?.date,
            time: race?.time
          }
        ]

        // Filter out entries with invalid dates
        const validSessionData = sessionData.filter(item => {
          const dateA = new Date(item.date)
          return !isNaN(dateA)
        })

        // Sort the filtered sessionData array
        validSessionData.sort((a, b) => {
          const dateA = new Date(a.date)
          const dateB = new Date(b.date)
          return dateA - dateB
        })

        return {
          season: race.season,
          round: race.round,
          name: race.raceName,
          cID: race.Circuit.circuitId,
          cName: race.Circuit.circuitName,
          sessions: validSessionData
        }
      })
      setLoading(false)
      setRaces(mappedRaces)
    } catch (error) {
      setLoading(false)
      console.error('Error: ', error)
    }
  }

  return { races, fetchCalendar, loading }
}
