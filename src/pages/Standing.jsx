/* eslint-disable multiline-ternary */
// MODULES
import { useParams } from 'react-router'

// COMPONENTS
import StandTable from '../components/StandTable'

// HOOKS
import { useStanding } from '../hooks/useStanding'
import { NavLink } from 'react-router-dom'

// STYLE
import './style/Standing.scss'

function Standing () {
  const { year, id } = useParams()
  const { standingArray } = useStanding({ year, stand: id, pos: '' })

  return (
    <div className='Standing'>
      <div className='buttons'>
        <NavLink to={`/${year}/driver/standing`}>Drivers' Standing</NavLink>
        <NavLink to={`/${year}/team/standing`}>Constructors' Standing</NavLink>
      </div>
      {id === 'driver' && <StandTable array={standingArray} type='driver' />}
      {id === 'team' && <StandTable array={standingArray} type='team' />}
    </div>
  )
}

export default Standing
