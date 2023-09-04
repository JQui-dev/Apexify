import React from 'react'

import useVisibleItem from '../hooks/useVisibleItem'

import './Races.scss'

function Races ({ races }) {
  const { visible, handleInfo } = useVisibleItem({ races })

  return (
    <div className='Races'>
      {races.map(race => (
        <div
          className='race'
          key={race.cID}
          onClick={() => handleInfo(race.cID)}
        >
          <section className={`main ${!visible[race.cID] && 'big'}`}>
            <h2>{race.round}</h2>
            <h3>{race.name}</h3>
          </section>

          <section className={`sessions ${visible[race.cID] && 'visible'}`}>
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
