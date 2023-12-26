// MODULES
import React from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from '../hooks/useHistory'

// STYLE
import './style/History.scss'

function History ({ type }) {
  const { id } = useParams()
  const { info } = useHistory({ type, id })

  return (
    <div className='History'>
      <div className='name'>
        {type === 'driver' && (
          <>
            <h1>
              {info[0]?.DriverStandings[0]?.Driver?.givenName[0]}.{' '}
              {info[0]?.DriverStandings[0]?.Driver?.familyName}
            </h1>
            -<h2>{info[0]?.DriverStandings[0]?.Driver?.nationality}</h2>
          </>
        )}
        {type === 'team' && (
          <>
            <h1>{info[0]?.ConstructorStandings[0]?.Constructor?.name}</h1>-
            <h2>
              {info[0]?.ConstructorStandings[0]?.Constructor?.nationality}
            </h2>
          </>
        )}
      </div>
      <div className='teamTable'>
        <div className='row'>
          <h2>Season</h2>
          <h2>Position</h2>
          <h3>Wins</h3>
          <h4>Points</h4>
        </div>
        {info.map(t => (
          <div className='row' key={t.season}>
            <h2>{t.season}</h2>
            {type === 'driver' &&
              t.DriverStandings?.map((i, key) => (
                <React.Fragment key={key}>
                  <h3>{i.position}</h3>
                  <h4>
                    {i.wins}/{t.round}
                  </h4>
                  <h5>{i.points}</h5>
                </React.Fragment>
              ))}
            {type === 'team' &&
              t.ConstructorStandings?.map((i, key) => (
                <React.Fragment key={key}>
                  <h3>{i.position}</h3>
                  <h4>
                    {i.wins}/{t.round}
                  </h4>
                  <h5>{i.points}</h5>
                </React.Fragment>
              ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default History
