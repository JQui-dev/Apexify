import { Link } from 'react-router-dom'
import { useChampions } from '../hooks/useChampions'
import './style/Champions.scss'

function Champions () {
  const { champs } = useChampions({ page: 0 })
  const { champs: champs1 } = useChampions({ page: 1 })

  return (
    <div className='Champions'>
      <div className='table'>
        {champs?.map(c => (
          <div className='row' key={c.driverId}>
            <Link to={`/driver/${c.driverId}`}>
              <h2>
                {c.givenName} {c.familyName}
              </h2>
            </Link>
            <h3>{c.nationality}</h3>
          </div>
        ))}
        {champs1?.map(c => (
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
