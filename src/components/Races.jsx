import React from 'react'

import './Races.scss'

function Races ({ races }) {
  return (
    <div className='Races'>
      {races.map(race => (
        <div
          className='race'
          key={race.cID}
        >
          <section className='main'>
            <h2>{race.round}</h2>
            <h3>{race.name}</h3>
          </section>

          <section className='sessions'>
            {race?.sessions?.map(ses => (
              <React.Fragment key={`${race.cID}_${ses.type}`}>
                {ses.date && (
                  <div className='session'>
                    <h4>{ses.type}</h4>
                    <aside>
                      <h5>{ses.date}</h5>
                      <h6>{ses?.time}</h6>
                    </aside>
                  </div>
                )}
              </React.Fragment>
            ))}
          </section>
        </div>
      ))}
    </div>
  )
}

export default Races
