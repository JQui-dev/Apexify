import { useCalendar } from '../hooks/useCalendar'
import { useNextRace } from '../hooks/useNextRace'

import Races from '../components/Races'
import Loader from '../components/Loader'

import './Calendar.scss'

function Calendar () {
  const { races, fetchCalendar, loading } = useCalendar()
  const { nextValid } = useNextRace()

  const handleSubmit = e => {
    e.preventDefault()

    const newYear = e.target[0].value
    const intYear = parseInt(newYear)
    const thisYear = new Date().getFullYear()

    // FETCH FULL CALENDAR
    // Check the range of the year to fetch the calendar
    if (intYear >= 1950 && intYear <= thisYear) {
      if (newYear === 'current') return fetchCalendar({ year: thisYear })
      return fetchCalendar({ year: newYear })
    }

    e.target[0].value = ''
  }

  if (loading) return <Loader what='Races' />

  return (
    <div className='Calendar'>
      <h1>{races[0]?.season}</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <input type='text' required placeholder='2021, 2007, 1987...' />
        <button type='submit'>Search</button>
      </form>
      <Races races={races} next={nextValid} />
    </div>
  )
}

export default Calendar
