import { useCountDown } from './../hooks/useCountDown'

function Counter ({ date, time }) {
  const { cd, countdownReady } = useCountDown({ date, time })

  if (countdownReady) return <h2>The race has started!</h2>

  return (
    <div className='Counter'>
      <section>
        <h2>{cd.days}</h2>
        <h3>DAYS</h3>
      </section>
      <section>
        <h2>{cd.hours}</h2>
        <h3>HOURS</h3>
      </section>
      <section>
        <h2>{cd.minutes}</h2>
        <h3>MINS</h3>
      </section>
    </div>
  )
}

export default Counter
