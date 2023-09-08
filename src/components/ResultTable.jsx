/* eslint-disable indent */
import './ResultTable.scss'

function ResultTable ({ results }) {
  return (
    <section className='Results'>
      <div className='titles'>
        <h2>Drivers</h2>
        <h2 className='teamTitle'>Team</h2>
        <h2>Time</h2>
      </div>
      {results.map((driver, key) => (
        <div className='driver' key={key}>
          <div className='name'>
            <h3 className='pos'>{driver.position}</h3>
            <h3 className='driverName'>
              {driver?.givenName} {driver.familyName}
            </h3>
            <h3 className='driverNameMobile'>
              {driver?.givenName?.charAt(0)}. {driver.familyName}
            </h3>
          </div>
          <h4 className='constructor'>{driver.constructorName}</h4>
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