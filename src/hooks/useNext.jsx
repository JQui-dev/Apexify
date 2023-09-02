import { useState, useEffect } from 'react'

import { fetchAny } from '../services/fetchAny'

export function useNext ({ link }) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})

  useEffect(() => {
    fetchNext({ param: link })
  }, [link])

  const fetchNext = async ({ param }) => {
    try {
      const newData = await fetchAny({ param })
      setData(newData)
      setLoading(false)
    } catch (error) {
      console.log('Error useNext')
    }
  }

  return { loading, data }
}
