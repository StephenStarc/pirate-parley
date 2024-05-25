import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function PrivateRoute({Component}) {
    const {userInfo} = useSelector((state) => state.auth)
console.log(userInfo)
  return userInfo ? <Component/> : <Navigate to="/login" replace/>
}