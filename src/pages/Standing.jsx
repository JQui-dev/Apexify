import { useParams } from 'react-router'

function Standing () {
  const { id } = useParams()
  return <div>{id} Standing</div>
}

export default Standing
