import { useParams } from 'react-router-dom'

import { useDriver } from '../hooks/useDriver'

import Loader from './../components/Loader'

import './Driver.scss'

function Driver () {
  const { driver } = useParams()
  const { driverInfo, driverResults, loading } = useDriver({ driver })

  if (loading) return <Loader />

  return (
    <div className='Driver'>
      <header className='driverInfo'>
        <div className='name'>
          <h2>{driverInfo.number}</h2>
          <h1>{driverInfo.name}</h1>
        </div>
        <h3>{driverInfo.nationality}</h3>
        <h4>{driverInfo.dateOfBirth}</h4>
      </header>

      <section className='driverResults'>
        {driverResults.map(year => (
          <div
            className={`${year.position === '1st' && 'champ'} season`}
            key={year.season}
          >
            <h2 className='year'>{year.season}</h2>
            <h3>{year.position}</h3>
            <h4>{year.points}</h4>
            <div className='constructors'>
              {year.constructors.map(constructor => (
                <h5 key={constructor.id}>{constructor.name}</h5>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Driver
