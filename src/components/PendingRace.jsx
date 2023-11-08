import { useFutureRace } from '../hooks/useFutureRace'
import './PendingRace.scss'

function PendingRace ({ info, next, children }) {
  const { futureRace } = useFutureRace({ year: info.season, round: info.round })
  return (
    <div className='PendingRace'>
      {children}
      <img src={`/assets/minimap/${futureRace.circuitID}.avif`} />
      <section className='date'>
        <h2>{futureRace.date}</h2>
      </section>
    </div>
  )
}

export default PendingRace
