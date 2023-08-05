// MODULES
import React from "react"
    import { AiOutlineTrophy } from "react-icons/ai"

// COMPONENTS

// STYLE
import './style/Winner.scss'

function Winner({results, year}) {
  return (
    <div className='Winner'>
    {
    results && results.map((res, key)=>(
        <React.Fragment key={key}>
        { res.position === "1" &&
        <>
            <div className="info">
                <div className="name">
                    <h3>{res.number}</h3>
                    <h4>{res.Driver.givenName} {res.Driver.familyName}</h4>
                </div>
                <div className="trophy">
                    <AiOutlineTrophy/>
                    <h5>{year}</h5>
                </div>
            </div>
            <img className="driverImg" src={`/assets/driver/${res.Driver.code}.png`} loading="lazy"/>
        </>
        }
        </React.Fragment>
    ))
    }
    </div>
  )
}

export default Winner