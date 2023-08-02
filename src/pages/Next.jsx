// MODULES
import { useState, useEffect } from 'react'

// COMPONENTS
import Loader from "./../components/Loader"
import Round from '../components/Round'
import CDown from '../components/CDown'
import LastYear from '../components/LastYear'

// STYLE
import './style/Next.scss'

function Next() {

  const [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState({});

  useEffect(()=>{
    fetchNext();
  }, [])

  const fetchNext = async () => {
    try {
      const fetched = await fetch("https://ergast.com/api/f1/current/next.json")
      if(fetched.ok) {
        const res = await fetched.json()
        console.log(res.MRData.RaceTable.Races[0])
        setData(res.MRData.RaceTable.Races[0])
        setLoading(false)
      }
    } catch (error) {
      console.error(error)      
      setLoading(false)
    }
  }

  return (
    <div className='Next'>
      {
        loading ? <Loader/> :
        <>
          <Round country={data.Circuit.Location.country} number={data.round}/>

          <div className="middle">
            <div className="left">
              <CDown what="Race" date={data.date} time={data.time}/>
              <LastYear circuit={data.Circuit && data.Circuit.circuitId}/>
            </div>
            <div className="right">
              <div className="circuit">
                <img className="map" src={`/assets/map/${data.Circuit.Location.country}.avif`}/>
                <h3>{data.Circuit.circuitName}</h3>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default Next