import { NavLink } from 'react-router-dom'

import { BsFillCalendarFill } from 'react-icons/bs'
import { IoIosPodium, IoMdMedal } from 'react-icons/io'

function NavBar () {
  return (
    <nav>
      <section>
        <NavLink to='/calendar'>
          <BsFillCalendarFill />
        </NavLink>
        <NavLink to='/standing'>
          <IoIosPodium />
        </NavLink>
        <NavLink to='/results'>
          <IoMdMedal />
        </NavLink>
      </section>

      <NavLink to='/'>
        <img src='./logo.png' alt='logo' />
      </NavLink>
    </nav>
  )
}

export default NavBar
