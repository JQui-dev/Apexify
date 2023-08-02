// MODULES
import React, { useState, useEffect } from 'react'

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
    <div className='Stand'>
      {
        loading ? <Loader/> :
        <>
        {
          teams.map((team, key) => (
            <div className='teamCard' key={key}>
              <div className="left">
                <h2 className={team.position>=10 && "double"}>{team.position}</h2>
                <img src={`/assets/team/${team.Constructor.constructorId}.png`}/>
              </div>
              <div className="drivers">
                {
                
                  drivers.map((driver, key)=>(
                    <React.Fragment key={key}>
                    {
                      team.Constructor.constructorId === driver.Constructors[0].constructorId &&
                    <div className='driver'>
                      <h4>{driver.Driver.code}</h4>
                      <h5>{driver.points}</h5>
                    </div>
                    }
                  </React.Fragment>
                ))
                }
              </div>
              <h3>{team.points}</h3>
            </div>
          ))
        }
        </>
      }
    </div>
  )
}

export default Stand