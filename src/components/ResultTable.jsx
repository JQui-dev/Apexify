/* eslint-disable indent */
import './ResultTable.scss'

import { Link } from 'react-router-dom'

function ResultTable ({ results }) {
  return (
    <section className='Results'>
      {results.map((driver, key) => (
        <div className='driver' key={key}>
          <div className='name'>
            <h3 className='pos'>{driver.position}</h3>
            <Link to={`/driver/${driver.id}`}>
              <h3 className='driverName'>
                {driver?.givenName} {driver.familyName}
              </h3>
              <h3 className='driverNameMobile'>
                {driver?.givenName?.charAt(0)}. {driver.familyName}
              </h3>
            </Link>
          </div>
          <div className='constructor'>
            <h4>{driver.constructorName}</h4>
          </div>
          <h5 className='time'>
            {driver.status === 'Finished'
              ? driver.time
              : driver.notFinished !== ''
              ? driver.notFinished
              : driver.status}
          </h5>
        </div>
      ))}
    </section>
  )
}

export default ResultTable
