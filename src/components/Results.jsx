// MODULES
import React from 'react'
import { LuTimer } from "react-icons/lu"

// COMPONENTS

// STYLE
import './style/Results.scss'

function Results({list}) {
  return (
    <div className='Results'>
        {
        list.map((res, key) => (
            <div className={`card ${res.FastestLap && res.FastestLap.rank === "1" ? "fastest" : ""}`} key={key}>
                <h2 className='pos'>{res.position}</h2>
                <div className="left">
                    <div className="images">
                        <img className='driverImg' src={`/assets/driver/${res.Driver.code}.png`}/>
                        <img className='teamImg' src={`/assets/team/${res.Constructor.constructorId}.png`}/>
                    </div>
                    <div className='name'>
                        <h4>{res.number}</h4>
                        <h3>{res.Driver.code}</h3>
                    </div>
                </div>
                <div className="right">
                    {
                        res.Time && res.Time.time ?
                        <h3 className='time'>{res.Time.time}</h3>
                        : res.status != "Finished" &&
                        <h3 className="dnf">DNF</h3>
                    }
                    {
                        key < 10 &&
                        <h4 className='points'>+{res.points} pts</h4>
                    }
                </div>
            </div>
        ))
        }
    </div>
  )
}

export default Results