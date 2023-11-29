// MODULES
import { useParams } from 'react-router-dom'

// PAGES
import Error from './../pages/Error'

// COMPONENTS
import Loader from './../components/Loader'
import ResultTable from './../components/ResultTable'

// HOOKS
import { useResults } from '../hooks/useResults'

// STYLE
import './Race.scss'
import { FaLocationDot } from 'react-icons/fa6'
import { useState } from 'react'

function Race () {
  const { year, round } = useParams()
  const { race, loading, error } = useResults({ year, round })
  const [map, setMap] = useState(false)

  if (loading) return <Loader />
  if (error) return <Error />

  return (
    <div className={`Race ${map && 'dontScroll'}`}>
      <section className='raceInfo'>
        <div className='main'>
          <h2>{race.season}</h2>
          <h1>{race.name}</h1>
          <h5 className='location'>
            <FaLocationDot />
            {race.location}
          </h5>
        </div>
        {race.current && (
          <div
            className={`map ${map && 'big'}`}
            onClick={() => setMap(!map)}
          >
            <img src={`/assets/map/${race.circuitID}.avif`} />
            <h4>{race.circuit}</h4>
          </div>
        )}
      </section>
      <div className='results'>
        <ResultTable results={race.results} />
      </div>
    </div>
  )
}

export default Race
