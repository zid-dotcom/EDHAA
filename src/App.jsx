import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ProtectedAdminRoute from './components/ProtectedAdminRoute'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AcademicsPage from './pages/AcademicsPage'
import ActivitiesPage from './pages/ActivitiesPage'
import FacilitiesPage from './pages/FacilitiesPage'
import NewsPage from './pages/NewsPage'
import ContactPage from './pages/ContactPage'
import AdminLoginPage from './pages/AdminLoginPage'
import AdminDashboardPage from './pages/AdminDashboardPage'

export default function App() {
  return (
    <div className="page-shell">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/news-events" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route element={<ProtectedAdminRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        </Route>
      </Routes>
    </div>
  )
}
