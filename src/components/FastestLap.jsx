// MODULES
import React from 'react'
import { LuTimer } from "react-icons/lu"

// COMPONENTS

// STYLE
import './style/FastestLap.scss'

function FastestLap({list}) {
  return (
    <>
    {
      list.map((res, key)=>(
        <React.Fragment key={key}>
          {
            res.FastestLap && res.FastestLap.rank === "1" &&
            <div className="FastestLap">
              <div className="name">
                <h2 className='flap'>Fastes Lap:</h2>
                <div className="wrap">
                  <img src={`/assets/team/${res.Constructor.constructorId}.png`}/>
                  <h3>{res.Driver.code}</h3>
                </div>
              </div>
              <div className="time">
                <LuTimer/>
                <h3>{res.FastestLap.Time.time}</h3>
              </div>
            </div>
          }
        </React.Fragment>
      ))
    }
    </>
  )
}

export default FastestLap