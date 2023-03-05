import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Protectroute = ({ children }) => {
  const { user } = useSelector((state) => state.user)

  if (!user) {
    return <Navigate to='landing' />
  }

  return children
}

export default Protectroute
