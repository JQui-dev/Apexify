// MODULES
import { Link } from 'react-router-dom'

// STYLE
import './style/ChampCard.scss'

function ChampCard ({ year, title, champ }) {
  const name =
    champ.Driver?.givenName && champ.Driver?.familyName
      ? `${champ.Driver?.givenName} ${champ.Driver?.familyName}`
      : champ.Constructor?.name

  return (
    <div className='ChampCard'>
      <div className='info'>
        <Link
          to={
            title === 'Driver'
              ? `/driver/${champ.Driver.driverId}`
              : `/team/${champ.Constructor.constructorId}`
          }
        >
          <h1>{name}</h1>
        </Link>
        <h2>
          {year} {title}'s Champion
        </h2>
      </div>
      <div className='achieve'>
        <h3>{champ.points}</h3>
        <h4>Wins: {champ.wins}</h4>
      </div>
    </div>
  )
}

export default ChampCard
