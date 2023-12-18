import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function StandTable ({ array, type }) {
  const [newArray, setNewArray] = useState([])

  useEffect(() => {
    if (type === 'driver') {
      const drivers = array?.map(driver => ({
        pos: driver.position,
        name: `${driver.Driver?.givenName} ${driver.Driver?.familyName}`,
        points: driver.points,
        team: driver.Constructors?.map(t => ({
          name: t.name,
          id: t.constructorId
        }))
      }))
      setNewArray(drivers)
    } else if (type === 'team') {
      const teams = array?.map(team => ({
        pos: team.position,
        name: team.Constructor?.name,
        points: team.points,
        wins: team.wins
      }))
      setNewArray(teams)
    }
  }, [array, type])

  return (
    <div className='StandTable'>
      <div className='row title'>
        <h2>Name</h2>
        <h3 className='middle'>{type === 'driver' ? 'Team' : 'Wins'}</h3>
        <h4>Points</h4>
      </div>
      {newArray?.map(i => (
        <div className='row' key={`${i.pos}_${i.name}`}>
          <section className='left'>
            <h2>{i.pos}</h2>
            <h3>{i.name}</h3>
          </section>
          <section className='middle'>
            {type === 'driver' && (
              <div className='teams'>
                {i.team?.map((t, key) => (
                  <Link to={`/team/${t.id}`} key={key} className='team'>
                    <h3>{t.name}</h3>
                  </Link>
                ))}
              </div>
            )}
            {type === 'team' && <h3>{i.wins}</h3>}
          </section>
          <h4 className='points'>{i.points}</h4>
        </div>
      ))}
    </div>
  )
}

export default StandTable
