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
import { IoMdPodium } from 'react-icons/io'

function Standing () {
  const { year, id } = useParams()
  const { standingArray } = useStanding({ year, stand: id, pos: '' })

  return (
    <div className='Standing'>
      <div className='buttons'>
        <NavLink to={`/${year}/driver/standing`}>
          <IoMdPodium /> <h4>{year} Drivers' Standing</h4>
        </NavLink>
        {
          // using anon function to verify year
          (() => {
            const isCurrentYear = year === 'current'
            const isAfter1958 = parseInt(year) >= 1958

            if (isCurrentYear || isAfter1958) {
              return (
                <NavLink to={`/${year}/team/standing`}>
                  <IoMdPodium /> <h4>{year} Constructors' Standing</h4>
                </NavLink>
              )
            }
          })()
        }
      </div>
      {id === 'driver' && <StandTable array={standingArray} type='driver' />}
      {id === 'team' && <StandTable array={standingArray} type='team' />}
    </div>
  )
}

export default Standing
