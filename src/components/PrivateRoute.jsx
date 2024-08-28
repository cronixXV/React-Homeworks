import React from "react"
import { Navigate } from "react-router-dom"
import PropTypes from "prop-types"

function PrivateRoute({ children, authUrl = "/auth" }) {
  const isAuthenticated = !!localStorage.getItem("isAuthenticated")

  if (!isAuthenticated) {
    return <Navigate to={authUrl} />
  }
  return children
}
PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  authUrl: PropTypes.string,
}

export default PrivateRoute
