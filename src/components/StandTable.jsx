import './StandTable.scss'

function StandTable ({ type, standings }) {
  if (type === 'drivers') {
    return (
      <section className='Stand'>
        {standings.map(driver => (
          <div className='row' key={driver.id}>
            <div className='name'>
              <h2>{driver.position}</h2>
              <h3>{driver.name}</h3>
            </div>
            <div className='teamImg'>
              <img src={`/assets/team/${driver.teamId}.png`} />
            </div>
            <h4>{driver.points}</h4>
          </div>
        ))}
      </section>
    )
  }

  if (type === 'constructors') {
    return (
      <section className='Stand'>
        {standings.map(team => (
          <div className='row' key={team.id}>
            <div className='name'>
              <h2>{team.position}</h2>
              <h3>{team.name}</h3>
            </div>
            <div className='teamImg'>
              <img src={`/assets/team/${team.id}.png`} />
            </div>
            <h4>{team.points}</h4>
          </div>
        ))}
      </section>
    )
  }
}

export default StandTable
