import React, { useState } from 'react'

import { useCalendar } from '../hooks/useCalendar'

import Races from '../components/Races'

import './Calendar.scss'

function Calendar () {
  const [year, setYear] = useState('2023')
  const { races } = useCalendar({ year })

  const handleSubmit = e => {
    e.preventDefault()
    const newYear = e.target[0].value
    const intYear = parseInt(newYear)
    if (intYear >= 1950 && intYear <= 2023) {
      setYear(newYear)
    }
    e.target[0].value = ''
  }

  return (
    <div className='Calendar'>
      <h1>{year} CALENDAR</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input type='text' required placeholder='2021, 2007, 1987...' />
        <button type='submit'>Search</button>
      </form>
      <Races races={races} />
    </div>
  )
}

export default Calendar
