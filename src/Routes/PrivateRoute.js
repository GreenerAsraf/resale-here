import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import Spinner from "../Componants/Spinner/Spinner"
import { AuthContext } from "../Context/AuthProvider"

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(loading)
    if (loading) {
      return <Spinner />
    }
  
    if (user && user.uid) {
      return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
  }
  
  export default PrivateRoute
  