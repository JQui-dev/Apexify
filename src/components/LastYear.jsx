// MODULES
import React, { useState, useEffect } from 'react';

// COMPONENTS
import Winner from './Winner';

// STYLE

function LastYear({circuit}) {

    const [ races, setRaces ] = useState([])
    const [ data, setData ] = useState()

    useEffect(()=>{
        fetchLastYear();
    }, [ circuit ])

    useEffect(()=>{
        races.map((res)=>{
            res.Circuit.circuitId === circuit &&
            fetchResults(res.round);
        })
    }, [ races ])

    const fetchLastYear = async () => {
        try {
          const fetched = await fetch("https://ergast.com/api/f1/2022.json")
          if(fetched.ok) {
            const res = await fetched.json()
            setRaces(res.MRData.RaceTable.Races)
          }
        } catch (error) {
          console.error(error)      
        }
      }
    
    const fetchResults = async (round) => {
        try {
          const fetched = await fetch(`https://ergast.com/api/f1/2022/${round}/results.json`)
          if(fetched.ok) {
            const res = await fetched.json()
            setData(res.MRData.RaceTable.Races[0])
            console.log(res.MRData.RaceTable.Races[0])
          }
        } catch (error) {
          console.error(error)      
        }
      }

  return (
    <div className='LastYear'>
        <div className="winner">
          {
            data &&
            <Winner results={data.Results} year={data.season}/>
          }
        </div>
    </div>
  )
}

export default LastYear