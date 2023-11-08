import { useState } from 'react'
import { useCalendar } from '../hooks/useCalendar'
import { useNextRace } from '../hooks/useNextRace'

import { FaSearch } from 'react-icons/fa'

import Races from '../components/Races'
import Loader from '../components/Loader'

import './Calendar.scss'

function Calendar () {
  const [year, setYear] = useState()
  const { races, loading } = useCalendar({ year, setYear })
  const { nextValid } = useNextRace()

  const handleSubmit = e => {
    e.preventDefault()

    const newYear = e.target[0].value
    const intYear = parseInt(newYear)
    const thisYear = new Date().getFullYear()

    // FETCH FULL CALENDAR
    // Check the range of the year to fetch the calendar
    if (intYear >= 1950 && intYear <= thisYear) {
      if (newYear === 'current') return setYear(thisYear)
      return setYear(newYear)
    }
    e.target[0].value = ''
  }

  if (loading) return <Loader />

  return (
    <div className='Calendar'>
      <header>
        <section className='title'>
          <h1>{races[0]?.season}</h1>
          <h2>SEASON</h2>
        </section>
        <form onSubmit={e => handleSubmit(e)}>
          <input type='text' required placeholder='2021, 1950...' />
          <button type='submit' className='send'>
            <FaSearch />
          </button>
        </form>
      </header>
      <Races races={races} next={nextValid} />
    </div>
  )
}

export default Calendar
