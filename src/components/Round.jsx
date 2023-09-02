import React from 'react'

import './style/Round.scss'

function Round ({ country, number }) {
  return (
    <div className='Round'>
      <img className='back' src={`/assets/circuit/${country}.jpg`} />
      <div className='round'>
        <h3>{country} GP</h3>
        <h2>ROUND {number}</h2>
      </div>
    </div>
  )
}

export default Round
