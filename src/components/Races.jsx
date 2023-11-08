/* eslint-disable multiline-ternary */
import React from 'react'

import DoneRace from './DoneRace'
import PendingRace from './PendingRace'

import './Races.scss'

function Races ({ races }) {
  return (
    <div className='Races'>
      {races.map(race => (
        <React.Fragment key={`${race.season}_${race.round}`}>
          {race.isFinished ? (
            <DoneRace info={race}>
              <header>
                <h2>{race.round}</h2>
                <h3>{race.name}</h3>
              </header>
            </DoneRace>
          ) : (
            <PendingRace info={races}>
              <header>
                <h2>{race.round}</h2>
                <h3>{race.name}</h3>
              </header>
            </PendingRace>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Races
