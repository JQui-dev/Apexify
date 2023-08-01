// MODULES

// COMPONENTS

// STYLE
import './style/Loader.scss'

function Loader() {
  return (
    <div className='Loader'>
      <img className='wheel' src="/logo.png" rel='preload'/>
    </div>
  )
}

export default Loader