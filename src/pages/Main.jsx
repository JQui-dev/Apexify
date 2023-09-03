import { Link } from 'react-router-dom'

import './Main.scss'

function Main () {
  return (
    <div className='Main'>
      <section className='tCard'>
        <h1>GP TRACKER</h1>
        <img src='/car.png' alt='car' />
      </section>

      <h2>The best content of F1</h2>

      <section className='links'>
        <Link to='/calendar'>Calendar</Link>
        <Link to='/standing'>Standing</Link>
        <Link to='/results'>Results</Link>
      </section>
    </div>
  )
}

export default Main
