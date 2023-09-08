import { useParams } from 'react-router-dom'

import { FaLocationDot } from 'react-icons/fa6'

import Loader from './../components/Loader'
import { useResults } from '../hooks/useResults'
import ResultTable from '../components/ResultTable'

import './Race.scss'

function Race () {
  const { year, round } = useParams()
  const { race, loading, error } = useResults({ year, round })

  if (loading) return <Loader what='Race' />

  if (error) return <h2>Not raced yet</h2>

  return (
    <div className='Race'>
      <main>
        <div className='info'>
          <h1>{year}</h1>
          <h2>Round {round}</h2>
          <h3>{race.name}</h3>
          <h4>
            <FaLocationDot />
            {race.circuitLocation}
          </h4>
        </div>
        <img src={`/assets/map/${race.circuitID}.avif`} alt='' />
      </main>
      <ResultTable results={race.results} />
    </div>
  )
}

export default Race
