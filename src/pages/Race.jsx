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

function Race () {
  const { year, round } = useParams()
  const { race, loading, error } = useResults({ year, round })

  if (loading) return <Loader />
  if (error) return <Error />

  return (
    <div className='Race'>
      <section className='raceInfo'>
        <div className='main'>
          <h2>{race.season}</h2>
          <h1>{race.name}</h1>
          <h5 className='location'>
            <FaLocationDot />
            {race.location}
          </h5>
        </div>
        <div className='map'>
          <img src={`/assets/map/${race.circuitID}.avif`} alt='' />
        </div>
      </section>
      <div className='results'>
        <ResultTable results={race.results} />
      </div>
    </div>
  )
}

export default Race
