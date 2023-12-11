// MODULES
import { useState } from 'react'

// COMPONENTS
import ChampCard from '../components/ChampCard'
import NavYear from '../components/NavYear'

// HOOKS
import { useChamp } from '../hooks/useChamp'
import { useCalendar } from '../hooks/useCalendar'

// SERVICES
import { getYears } from '../services/getYears'

// STYLE
import './style/Calendar.scss'

function Calendar () {
  const [year, setYear] = useState('2023')
  const { years } = getYears()
  const { champ: cDriver } = useChamp({ year, stand: 'driver' })
  const { champ: cTeam } = useChamp({ year, stand: 'team' })
  const { races } = useCalendar({ year })

  if (races && cDriver && cTeam) {
    return (
      <div className='Calendar'>
        <NavYear years={years} year={year} setYear={setYear} />
        <div className='right'>
          {cDriver && cTeam && (
            <div className='champs'>
              <ChampCard title='Driver' champ={cDriver} year={year} />
              <ChampCard title='Constructor' champ={cTeam} year={year} />
            </div>
          )}
          <div className='races'>
            {races &&
              races.map(r => (
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
