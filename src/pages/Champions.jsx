import { Link } from 'react-router-dom'
import { useChampions } from '../hooks/useChampions'
import './style/Champions.scss'
import { useEffect, useState } from 'react'

function Champions () {
  const { champs } = useChampions({ page: 0 })
  const { champs: champs1 } = useChampions({ page: 1 })
  const [fullChamps, setFullChamps] = useState([])

  useEffect(() => {
    setFullChamps([...champs, ...champs1])
  }, [champs, champs1])

  return (
    <div className='Champions'>
      <div className='info'>
        <h1>There are {fullChamps.length} Champions!</h1>
        <h3>Each one with an exciting story behind</h3>
      </div>
      <div className='table'>
        {fullChamps?.map(c => (
          <div className='row' key={c.driverId}>
            <Link to={`/driver/${c.driverId}`}>
              <h2>
                {c.givenName} {c.familyName}
              </h2>
            </Link>
            <h3>{c.nationality}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Champions
