// MODULES
import { NavLink } from 'react-router-dom'

// STYLE
import './style/NavBtn.scss'

function NavBtn ({ type, link, icon }) {
  return (
    <NavLink to={link} className='NavBtn'>
      {icon}
      <label>{type}</label>
    </NavLink>
  )
}

export default NavBtn
