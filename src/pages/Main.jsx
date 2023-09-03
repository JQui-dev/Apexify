import { Link } from 'react-router-dom'

import './Main.scss'

function Main () {
  return (
    <div className='Main'>
      {/* Div just avoid the gap */}
      <div>
        <h1>GP TRACKER</h1>
        <h2>Follow your favorite drivers and teams</h2>
      </div>

      <Link to='/'>Coming Race</Link>

      <img src='/car.png' alt='car' />
    </div>
  )
}

export default Main
