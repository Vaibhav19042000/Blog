import { useSelector } from "react-redux"
import { Outlet,Navigate } from "react-router-dom"

const PrivateRoute = () => {
  const {currentUser} = useSelector(state => state.user)
  console.log("Current User:", currentUser); 
  return currentUser ? <Outlet/> : <Navigate to='/signIn'/>;
  
}

export default PrivateRoute
