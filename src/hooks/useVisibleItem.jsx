import { useEffect, useState } from 'react'

export default function useVisibleItem ({ races }) {
  const [visible, setVisible] = useState({})

  const handleInfo = id => {
    // Toggle the visibility of sessions for the race with the given cID
    setVisible(prevState => ({
      ...prevState,
      [id]: !prevState[id] || false
    }))
  }

  useEffect(() => {
    setVisible({})
  }, [races])

  return { visible, handleInfo }
}
