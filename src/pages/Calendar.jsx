// MODULES
import { useState } from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS
import ChampCard from '../components/ChampCard'
import NavYear from '../components/NavYear'

// HOOKS
import { useStanding } from '../hooks/useStanding'
import { useCalendar } from '../hooks/useCalendar'

// SERVICES
import { getYears } from '../services/getYears'

// STYLE
import './style/Calendar.scss'
import { IoMdReturnRight } from 'react-icons/io'

function Calendar () {
  const [year, setYear] = useState('2023')
  const { years } = getYears()
  const { standingArray: cDriver } = useStanding({
    year,
    stand: 'driver',
    pos: '1'
  })
  const { standingArray: cTeam } = useStanding({
    year,
    stand: 'team',
    pos: '1'
  })
  const { races } = useCalendar({ year })

  if (races && cDriver && cTeam) {
    return (
      <div className='Calendar'>
        <NavYear years={years} year={year} setYear={setYear} />
        <div className='right'>
          <div className='champsWrap'>
            <div className='champs'>
              <ChampCard title='Driver' champ={cDriver[0]} year={year} />
              {
                // Team info only available for 1958+
                parseInt(year) >= 1958 && (
                  <ChampCard title='Constructor' champ={cTeam[0]} year={year} />
                )
              }
            </div>
            <Link to={`/${year}/driver/standing`} className='fStand'>
              <IoMdReturnRight />
              <h4>Full Standings</h4>
            </Link>
          </div>
          <div className='races'>
            {races.map(r => (
              <div className='race' key={`${r.year}_${r.round}`}>
                <h3>
                  {r.round}. {(r?.raceName).replace('Grand Prix', 'GP')}
                </h3>
                <h4>
                  {r.date.split('-')[2]}/{r.date.split('-')[1]}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Calendar
