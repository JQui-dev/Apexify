/* eslint-disable indent */
import './ResultTable.scss'

import { Link } from 'react-router-dom'

function ResultTable ({ results }) {
  return (
    <section className='Results'>
      <div className='titles'>
        <div className='main'>
          <h6>POS</h6>
          <h4>DRIVER</h4>
        </div>
        <h5>STATUS</h5>
      </div>

      <div className='drivers'>
        {results.map((driver, key) => (
          <div className='driver' key={`${key}${driver.code}`}>
            <div className='main'>
              <h4>{driver.position}</h4>
              <Link to={`/driver/${driver.id}`}>
                <div className='name wideName'>
                  <h3>{driver.givenName}</h3>
                  <h2>{driver.familyName}</h2>
                </div>
                <h2 className='name mobileName'>{driver.code}</h2>
              </Link>
            </div>
            <h5>{driver.state}</h5>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ResultTable
