import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout } from "../components/Reducers/Slices/authSlice"

export default function Logout() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const handleLogout = async () => {
      dispatch(logout())
      navigate("/auth")
    }

    handleLogout()
  }, [dispatch, navigate])

  return null
}
