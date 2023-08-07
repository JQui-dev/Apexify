// MODULES
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS
import Loader from "./../components/Loader"

// STYLE
import './style/Stand.scss'

function Stand() {

  const [ loading, setLoading ] = useState(true)
  const [ teams, setTeams ] = useState([]);
  const [ drivers, setDrivers ] = useState([]);

  useEffect(()=>{
    fetchTeams();
    fetchDrivers();
  }, [])

  const fetchTeams = async () => {
    try {
      const fetched = await fetch("https://ergast.com/api/f1/current/constructorStandings.json")
      if(fetched.ok) {
        const res = await fetched.json()
        console.log(res.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
        setTeams(res.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
        setLoading(false)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const fetchDrivers = async () => {
    try {
      const fetched = await fetch("https://ergast.com/api/f1/current/driverStandings.json")
      if(fetched.ok) {
        const res = await fetched.json()
        console.log(res.MRData.StandingsTable.StandingsLists[0].DriverStandings)
        setDrivers(res.MRData.StandingsTable.StandingsLists[0].DriverStandings)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {
        loading ? <Loader/> :
        <div className='Stand'>
          {
            teams.map((team, key) => (
              <section className="teams" key={key}>
                <div className="pos">
                  <h2>{team.position}</h2>
                  <h3>{team.points}</h3>
                </div>
                <div className="team">
                  <h2>{team.Constructor.name}</h2>
                  <img src={`/assets/team/${team.Constructor.constructorId}.png`}/>
                </div>
                <div className="drivers">
                {
                  drivers.map((driver, key) => (
                    driver.Constructors[0].constructorId == team.Constructor.constructorId &&
                    <div className="driver" key={key}>
                      <h2>{driver.Driver.givenName} {driver.Driver.familyName}</h2>
                      <img src={`/assets/driver/${driver.Driver.code}.png`}/>
                    </div>
                  ))
                }
                </div>
                <div className="car">
                  <img src={`assets/team/car/${team.Constructor.constructorId}.avif`}/>
                </div>
              </section>
            ))
          }
        </div>
      }
    </>
  )
}

export default Stand