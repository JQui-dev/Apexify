import { Link } from 'react-router-dom'

import { useCHampions } from '../hooks/useChampions'

import Loader from './../components/Loader'

import { FaMedal } from 'react-icons/fa6'
import { HiMiniTrophy } from 'react-icons/hi2'

import './Champions.scss'

function Champions () {
  const { champs, loading } = useCHampions()

  if (loading) return <Loader />

  return (
    <div className='Champions'>
      <h1>
        <HiMiniTrophy />
        Hall of Fame
      </h1>
      <section className='champs'>
        {champs?.map(champ => (
          <div className='champ' key={champ.id}>
            <Link to={`/driver/${champ.id}`}>
              <FaMedal />
              <h2>{champ.fullName}</h2>
            </Link>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Champions
