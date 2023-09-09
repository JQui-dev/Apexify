import Counter from '../components/Counter'

import { useFutureRace } from './../hooks/useFutureRace'

import './NotRacedYet.scss'

function NotRacedYet ({ year, round }) {
  const { futureRace } = useFutureRace({ year, round })

  return (
    <div className='NotRacedYet'>
      <header>
        <h2>{futureRace.season}</h2>
        <h3>{futureRace.raceName}</h3>
        <h4>{futureRace.date}</h4>
      </header>
      <Counter date={futureRace?.date} time={futureRace?.time} />
    </div>
  )
}

export default NotRacedYet
