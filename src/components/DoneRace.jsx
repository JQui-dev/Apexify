import { Link } from 'react-router-dom'
import { useResults } from '../hooks/useResults'
import { BsArrowReturnRight } from 'react-icons/bs'
import './DoneRace.scss'

function DoneRace ({ info, children }) {
  const { race } = useResults({ year: info.season, round: info.round })

  return (
    <Link to={`/r/${race.season}/${race.round}`} className='DoneRace'>
      {children}
      <section className='podium'>
        {race?.results?.map(
          driver =>
            driver.position <= 3 && (
              <div key={driver.position} className='drivers'>
                <section className='driver'>
                  <h4>{driver.position}</h4>
                  <div className='name'>
                    <h4>{driver.givenName}</h4>
                    <h5>{driver.familyName}</h5>
                  </div>
                </section>
                <h6>{driver.time || driver.status}</h6>
              </div>
            )
        )}
      </section>
      <footer>
        <div className='freezone'>
          <BsArrowReturnRight />
          <h2>VIEW RESULTS</h2>
        </div>
      </footer>
    </Link>
  )
}

export default DoneRace
