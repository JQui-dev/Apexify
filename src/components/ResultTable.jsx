/* eslint-disable indent */
import './ResultTable.scss'

function ResultTable ({ results }) {
  return (
    <section className='Results'>
      {results.map((driver, key) => (
        <div className='driver' key={key}>
          <div className='name'>
            <h3 className='pos'>{driver.position}</h3>
            <h3 className='name'>{driver.givenName} {driver.familyName}</h3>
          </div>
          <h4>
            {driver.status === 'Finished'
              ? driver.time
              : driver.notFinished !== ''
              ? driver.notFinished
              : driver.status}
          </h4>
          <h5>{driver.points}</h5>
        </div>
      ))}
    </section>
  )
}

export default ResultTable
