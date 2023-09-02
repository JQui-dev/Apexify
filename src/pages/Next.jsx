/* eslint-disable multiline-ternary */

// MODULES

// HOOKS
import { useNext } from '../hooks/useNext'

// COMPONENTS
import Loader from './../components/Loader'
import Round from '../components/Round'
import CDown from '../components/CDown'
import LastYear from '../components/LastYear'
import Map from '../components/Map'

// STYLE
import './style/Next.scss'

function Next () {
  const { loading, data } = useNext({
    link: 'current/next'
  })

  if (loading) return <Loader />

  return (
    <section className='Next'>
      <Round country={data.country} number={data.round} />

      <CDown what='Race' date={data.date} time={data.time} />
      <LastYear circuit={data.cID} />
      <Map name={data.cName} id={data.cID} />
    </section>
  )
}

export default Next
