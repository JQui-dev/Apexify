import { useParams } from 'react-router-dom'

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
      <h1>{year}</h1>
      <h2>{round}</h2>
      <h3>{race.name}</h3>
      <ResultTable results={race.results} />
    </div>
  )
}

export default Race
