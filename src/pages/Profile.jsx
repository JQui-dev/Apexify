// MODULES
import React, { useEffect, useState } from 'react'
import { GoPencil } from 'react-icons/go'
import { BsNut, BsShare } from 'react-icons/bs'
// COMPONENTS

// STYLE
import './style/Profile.scss'

function Profile () {
  const [team, setTeam] = useState('red_bull')
  const [teams, setTeams] = useState([])
  const [drivers, setDrivers] = useState([])

  useEffect(() => {
    fetchTeams()
    fetchDrivers()
  }, [])

  const fetchTeams = async () => {
    try {
      const fetched = await fetch(
        'https://ergast.com/api/f1/current/constructorStandings.json'
      )
      if (fetched.ok) {
        const res = await fetched.json()
        console.log(
          res.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
        )
        setTeams(
          res.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
        )
      }
    } catch (error) {
      console.error(error)
    }
  }

  const fetchDrivers = async () => {
    try {
      const fetched = await fetch(
        'https://ergast.com/api/f1/current/driverStandings.json'
      )
      if (fetched.ok) {
        const res = await fetched.json()
        console.log(res.MRData.StandingsTable.StandingsLists[0].DriverStandings)
        setDrivers(res.MRData.StandingsTable.StandingsLists[0].DriverStandings)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='Profile'>
      <section className='myProfile'>
        <header className='me'>
          <div className='left'>
            <img className='myImg' src='/profile.jpg' />
            <img className='teamImg' src={`/assets/team/${team}.png`} />
          </div>
          <div className='right'>
            <h2>@User123</h2>
            <select name='selection' onChange={e => setTeam(e.target.value)}>
              {teams.map((team, key) => (
                <option key={key} value={team.Constructor.constructorId}>
                  {team.Constructor.name}
                </option>
              ))}
            </select>
          </div>
        </header>
        <div className='car'>
          <img src={`/assets/team/car/${team}.avif`} />
        </div>
        <div className='buttons'>
          <button>
            <GoPencil />
            Edit profile
          </button>
          <button>
            <BsNut />
            Configuration
          </button>
          <button>
            <BsShare />
            Share
          </button>
        </div>
      </section>
      <section className='multiScreen'>
        <div className='yourDrivers'>
          {drivers.map((driver, key) => (
            <React.Fragment key={key}>
              {driver.Constructors[0].constructorId === team && (
                <div className='wrap'>
                  <img src={`/assets/driver/${driver.Driver.code}.png`} />
                  <div className='info'>
                    <div className='who'>
                      <h5 className='pos'>{driver.position}</h5>
                      <h2 className='name'>{driver.Driver.code}</h2>
                    </div>
                    <h3 className='points'>{driver.points} pts</h3>
                    {driver.wins > 0 && (
                      <h4 className='wins'>Wins: {driver.wins}</h4>
                    )}
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Profile
