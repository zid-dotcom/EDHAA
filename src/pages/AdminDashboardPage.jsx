import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiRequest, getAuthToken } from '../lib/api'

const initialForm = {
  title: '',
  description: '',
}

export default function AdminDashboardPage() {
  const navigate = useNavigate()
  const [news, setNews] = useState([])
  const [formData, setFormData] = useState(initialForm)
  const [imageFile, setImageFile] = useState(null)
  const [imageUrl, setImageUrl] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const token = getAuthToken()

  useEffect(() => {
    loadNews()
  }, [])

  async function loadNews() {
    try {
      const data = await apiRequest('/api/news')
      setNews(data)
    } catch (loadError) {
      setError(loadError.message)
    }
  }

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  async function handleImageUpload() {
    if (!imageFile) {
      setError('Please choose an image file')
      return
    }

    setError('')
    setMessage('')

    const uploadData = new FormData()
    uploadData.append('image', imageFile)

    const data = await apiRequest('/api/upload', {
      method: 'POST',
      body: uploadData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    setImageUrl(data.imageUrl)
    setMessage('Image uploaded successfully')
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)

    try {
      await apiRequest('/api/news', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          image: imageUrl,
        }),
      })

      setFormData(initialForm)
      setImageFile(null)
      setImageUrl('')
      setMessage('News item added successfully')
      await loadNews()
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete(id) {
    setError('')
    setMessage('')

    try {
      await apiRequest(`/api/news/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setMessage('News item deleted successfully')
      await loadNews()
    } catch (deleteError) {
      setError(deleteError.message)
    }
  }

  function handleLogout() {
    localStorage.removeItem('adminToken')
    navigate('/admin/login')
  }

  return (
    <div className="site-wrap py-16 sm:py-20">
      <div className="flex flex-col gap-5 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <p className="eyebrow">Admin Dashboard</p>
          <h1 className="section-title">Manage website news and images</h1>
        </div>
        <button type="button" className="button-secondary" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(300px,0.85fr)]">
        <div>
          <form className="space-y-5 border-t border-line pt-6" onSubmit={handleSubmit}>
            <p className="eyebrow">Add News / Event</p>

            <label className="block space-y-2">
              <span className="text-sm uppercase tracking-[0.14em] text-muted">Title</span>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="field"
                required
              />
            </label>

            <label className="block space-y-2">
              <span className="text-sm uppercase tracking-[0.14em] text-muted">Description</span>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="field min-h-[180px] resize-y"
                required
              />
            </label>

            <div className="space-y-3 border-t border-line pt-5">
              <label className="block space-y-2">
                <span className="text-sm uppercase tracking-[0.14em] text-muted">Image</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => setImageFile(event.target.files?.[0] || null)}
                  className="block w-full text-sm text-muted"
                />
              </label>

              <button
                type="button"
                className="button-secondary"
                onClick={handleImageUpload}
                disabled={!imageFile}
              >
                Upload Image
              </button>

              {imageUrl ? (
                <p className="text-sm leading-7 text-muted break-all">Uploaded: {imageUrl}</p>
              ) : null}
            </div>

            {error ? <p className="text-sm text-red-700">{error}</p> : null}
            {message ? <p className="text-sm text-green-700">{message}</p> : null}

            <button type="submit" className="button-primary" disabled={loading}>
              {loading ? 'Saving...' : 'Add News'}
            </button>
          </form>
        </div>

        <div className="border-t border-line pt-6">
          <p className="eyebrow">All News</p>
          <div className="mt-6 space-y-5">
            {news.length === 0 ? (
              <p className="text-sm leading-7 text-muted">No news items available yet.</p>
            ) : (
              news.map((item) => (
                <div key={item._id} className="border-t border-line pt-5">
                  <h2 className="font-serif text-2xl text-ink">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="mt-4 h-32 w-full border border-line object-cover"
                    />
                  ) : null}
                  <button
                    type="button"
                    className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-ink"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
