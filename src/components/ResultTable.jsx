/* eslint-disable indent */
import './ResultTable.scss'

import { Link } from 'react-router-dom'

function ResultTable ({ results }) {
  return (
    <section className='Results'>
      <div className='titles'>
        <h6>POS</h6>
        <h4>DRIVER</h4>
        <h5>TIME</h5>
      </div>

      <div className='drivers'>
        {results.map((driver, key) => (
          <div className='driver' key={`${key}${driver.code}`}>
            <h2 className='position'>{driver.position}</h2>
            <Link to={`/driver/${driver.id}`}>
              <div className='name wideName'>
                <h3>{driver.givenName}</h3>
                <h2>{driver.familyName}</h2>
              </div>
              <h2 className='name mobileName'>{driver.code}</h2>
            </Link>
            <h2 className='state'>{driver.state}</h2>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ResultTable
