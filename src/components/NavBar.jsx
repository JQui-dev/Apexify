// MODULES
import { Link, NavLink } from "react-router-dom"
  import { GoPerson } from "react-icons/go"
  import { AiOutlineFolder, AiOutlineDashboard, AiOutlineFire, AiOutlineEye } from "react-icons/ai"

// COMPONENTS

// STYLE
import './style/NavBar.scss'

function NavBar() {
  return (
    <div className="NavBar">
      <Link to="/" className="title">
        <h1>GP Tracker</h1>
        <img src="/logo.png" alt="logo"/>
      </Link>
      <nav>

        <NavLink to="/next">
          <AiOutlineFire/>
          <h3>Next</h3>
        </NavLink>

        <NavLink to="/last">
          <AiOutlineDashboard/>
          <h3>Last</h3>
        </NavLink>

        <NavLink to="/" className="main">
          <img src="/logo.png"/>
        </NavLink>
        
        <NavLink to="/stand">
          <AiOutlineFolder/>  
          <h3>Stand</h3>
        </NavLink>

        <NavLink to="/profile">
          <GoPerson/>
          <h3>Profile</h3>
        </NavLink>

      </nav>
    </div>
  )
}

export default NavBar