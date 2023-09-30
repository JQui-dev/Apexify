import React from 'react'

import { Link } from 'react-router-dom'

import './Races.scss'

function Races ({ races, next }) {
  return (
    <div className='Races'>
      {races.map(race => (
        <Link
          to={`/r/${race.season}/${race.round}`}
          className={`race ${
            next.round === race.round && next.season === race.season && 'next'
          }`}
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
                      <h6>{ses?.time}</h6>
                      <h5>{ses.date}</h5>
                    </aside>
                  </div>
                )}
              </React.Fragment>
            ))}
          </section>
        </Link>
      ))}
    </div>
  )
}

export default Races
