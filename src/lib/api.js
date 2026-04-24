const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export function getApiUrl(path) {
  return `${API_BASE_URL}${path}`
}

export function getAuthToken() {
  return localStorage.getItem('adminToken')
}

export async function apiRequest(path, options = {}) {
  const headers = {
    ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
    ...(options.headers || {}),
  }

  const response = await fetch(getApiUrl(path), {
    ...options,
    headers,
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(data.message || 'Request failed')
  }

  return data
}
