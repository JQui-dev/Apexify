import './style/Map.scss'

function Map ({ name, id }) {
  return (
    <div className='Map'>
      <h3>{name}</h3>
      <img
        className='map'
        src={`/assets/map/${id}.avif`}
        loading='lazy'
      />
    </div>
  )
}

export default Map
