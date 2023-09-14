/* eslint-disable multiline-ternary */
import { useParams, Link } from 'react-router-dom'

import StandTable from './../components/StandTable'
import Loader from './../components/Loader'

import { useState } from 'react'
import { useStandings } from './../hooks/useStandings'

import './Standings.scss'

function Standings () {
  const { stand } = useParams()
  const [data, setData] = useState({})
  const { standings, loading } = useStandings({
    type: data.type,
    standing: data.stand
  })

  const handleClick = value => {
    if (value) return setData({ type: 'drivers', stand: 'current/driverStandings' })
    return setData({ type: 'constructors', stand: 'current/constructorStandings' })
  }

  if (loading) return <Loader />

  return (
    <div className='Standings'>
      <header>
        <Link
          onClick={() => handleClick(true)}
          to='/standings/drivers'
          className={`${stand === 'drivers' && stand} link`}
        >
          Drivers'
        </Link>
        <Link
          onClick={() => handleClick(false)}
          to='/standings/constructors'
          className={`${stand === 'constructors' && stand} link`}
        >
          Constructors'
        </Link>
      </header>
      <main>
        {stand === 'drivers' ? (
          <StandTable type='drivers' standings={standings} />
        ) : (
          <StandTable type='constructors' standings={standings} />
        )}
      </main>
    </div>
  )
}

export default Standings
