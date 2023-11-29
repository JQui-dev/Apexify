// MODULES
import { useState } from 'react'
import { useCalendar } from '../hooks/useCalendar'
import { FaSearch } from 'react-icons/fa'

// COMPONENTS
import Races from '../components/Races'
import Loader from '../components/Loader'

// STYLE
import './Calendar.scss'

function Calendar () {
  const [year, setYear] = useState()
  const { races, loading } = useCalendar({ year, setYear })

  const handleSubmit = e => {
    e.preventDefault()
    const inputYear = parseInt(e.target[0].value)
    const thisYear = new Date().getFullYear()

    // Check the range of the year to fetch the calendar
    inputYear >= 1950 && inputYear <= thisYear && setYear(inputYear)
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
      <Races races={races} />
    </div>
  )
}

export default Calendar
