// COMPONENTS
import NavBtn from './NavBtn'

// STYLE
import './style/NavBar.scss'
import {
  IoIosCalendar,
  IoMdPodium,
  IoMdTrophy,
  IoMdInformationCircle
} from 'react-icons/io'

const links = [
  { id: 'calendar', url: '/', icon: <IoIosCalendar /> },
  { id: 'standings', url: '/standing/driver', icon: <IoMdPodium /> },
  { id: 'champions', url: '/champions', icon: <IoMdTrophy /> },
  { id: 'about', url: '/about', icon: <IoMdInformationCircle /> }
]

function NavBar () {
  return (
    <nav className='NavBar'>
      <div className='title'>
        <img src='/assets/logo.webp' alt='' />
        <h1>APEXIFY</h1>
      </div>
      <div className='links'>
        {links.map(i => (
          <NavBtn key={i.id} type={i.id} link={i.url} icon={i.icon} />
        ))}
      </div>
    </nav>
  )
}

export default NavBar
