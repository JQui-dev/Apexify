// MODULES
import { Link } from 'react-router-dom'

// COMPONENTS

// STYLE
import './style/Land.scss'

function Land () {
  return (
    <div className='Land'>
      <img className='bg' src='/landpagebg.jpg' />

      <div className='info'>
        <h3>Be part of the Formula 1 community</h3>
        <div className='join'>
          <h2>Join us now!</h2>
          <Link to='/login'>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Land
