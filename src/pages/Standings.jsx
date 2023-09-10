/* eslint-disable multiline-ternary */
import { useParams, Link } from 'react-router-dom'

import StandTable from './../components/StandTable'
import Loader from './../components/Loader'

import { useStandings } from './../hooks/useStandings'

import './Standings.scss'

function Standings () {
  const { stand } = useParams()
  const { standings, loading, fetchStand } = useStandings()

  if (loading) return <Loader />

  return (
    <div className='Standings'>
      <header>
        <Link
          onClick={() =>
            fetchStand({
              type: 'drivers',
              stand: 'current/driverStandings'
            })}
          to='/standings/drivers'
          className={`${stand === 'drivers' && stand} link`}
        >
          Drivers'
        </Link>
        <Link
          onClick={() =>
            fetchStand({
              type: 'constructors',
              stand: 'current/constructorStandings'
            })}
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
