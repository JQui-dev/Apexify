// MODULES
import { useState, useEffect } from 'react'

// COMPONENTS
import Loader from '../components/Loader';
import Round from '../components/Round';
import FastestLap from '../components/FastestLap';
import Results from '../components/Results';

// STYLE
import './style/Last.scss'

function Last() {

  const [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState()

  useEffect(()=>{
    fetchLast();
  }, [])

  const fetchLast = async () => {
    try {
      const fetched = await fetch("https://ergast.com/api/f1/current/last/results.json")
      if(fetched.ok) {
        const res = await fetched.json()
        console.log(res.MRData.RaceTable.Races[0])
        setData(res.MRData.RaceTable.Races[0])
        setLoading(false)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='Last'>
      {
        loading ? <Loader/>
        : 
        <>
          <Round country={data.Circuit.Location.country} number={data.round}/>

          <FastestLap list={data.Results && data.Results}/>

          <Results list={data.Results && data.Results}/>
        </>
      }
    </div>
  )
}

export default Last