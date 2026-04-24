import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiRequest } from '../lib/api'

export default function AdminLoginPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: 'admin',
    password: 'admin123',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      const data = await apiRequest('/api/admin/login', {
        method: 'POST',
        body: JSON.stringify(formData),
      })

      localStorage.setItem('adminToken', data.token)
      navigate('/admin/dashboard')
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="site-wrap py-16 sm:py-20">
      <div className="mx-auto max-w-xl space-y-8">
        <div className="space-y-4">
          <p className="eyebrow">Admin Login</p>
          <h1 className="section-title">Sign in to manage website content</h1>
          <p className="section-copy">
            Use the admin account to upload images and manage news items on the website.
          </p>
        </div>

        <form className="space-y-5 border-t border-line pt-6" onSubmit={handleSubmit}>
          <label className="block space-y-2">
            <span className="text-sm uppercase tracking-[0.14em] text-muted">Username</span>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="field"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm uppercase tracking-[0.14em] text-muted">Password</span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="field"
            />
          </label>

          {error ? <p className="text-sm text-red-700">{error}</p> : null}

          <button type="submit" className="button-primary" disabled={loading}>
            {loading ? 'Signing In...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}
