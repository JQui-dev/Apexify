import React from 'react'

import { useCalendar } from '../hooks/useCalendar'

import Races from '../components/Races'
import Loader from '../components/Loader'

import './Calendar.scss'

function Calendar () {
  const { races, fetchCalendar, loading } = useCalendar()

  const handleSubmit = e => {
    e.preventDefault()
    const newYear = e.target[0].value
    const intYear = parseInt(newYear)

    const thisYear = new Date().getFullYear()

    if (intYear >= 1950 && intYear <= thisYear) {
      if (newYear === 'current') {
        fetchCalendar({ year: thisYear })
      }
      fetchCalendar({ year: newYear })
    }
    e.target[0].value = ''
  }

  if (loading) {
    return <Loader what='Races' />
  }

  return (
    <div className='Calendar'>
      <h1>{races[0]?.season}</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input type='text' required placeholder='2021, 2007, 1987...' />
        <button type='submit'>Search</button>
      </form>
      <Races races={races} />
    </div>
  )
}

export default Calendar
