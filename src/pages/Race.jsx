/* eslint-disable multiline-ternary */
import { useParams } from 'react-router-dom'

import { FaLocationDot } from 'react-icons/fa6'

import Loader from './../components/Loader'
import { useResults } from '../hooks/useResults'
import ResultTable from '../components/ResultTable'

import { useFutureRace } from '../hooks/useFutureRace'
import Counter from '../components/Counter'

import './Race.scss'

function Race () {
  const { year, round } = useParams()

  const { race, loading, error } = useResults({ year, round })
  const { futureRace } = useFutureRace({ year, round })

  if (loading) return <Loader />

  return (
    <div className={`Race ${error && 'NotRacedYet'}`}>
      <main>
        <div className='info'>
          <h1>{year}</h1>
          <h2>Round {round}</h2>
          <h3>{race.name || futureRace.name}</h3>
          <h4>
            <FaLocationDot />
            {race.circuitLocation || futureRace.circuitLocation}
          </h4>
        </div>
        {
          // If it's not the current year it doesnt show the map image
          (race?.current || futureRace?.current) && (
            <img
              src={`/assets/map/${
                race?.circuitID || futureRace?.circuitID
              }.avif`}
              alt={`${race?.name || futureRace?.name} map`}
            />
          )
        }
      </main>
      {error ? (
        <Counter date={futureRace?.date} time={futureRace?.time} />
      ) : (
        <ResultTable results={race.results} />
      )}
    </div>
  )
}

export default Race
