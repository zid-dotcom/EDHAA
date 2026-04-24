import { Navigate, Outlet } from 'react-router-dom'
import { getAuthToken } from '../lib/api'

export default function ProtectedAdminRoute() {
  const token = getAuthToken()

  if (!token) {
    return <Navigate to="/admin/login" replace />
  }

  return <Outlet />
}
