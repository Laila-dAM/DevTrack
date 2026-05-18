import { useState } from 'react'
import api from '../../services/api/api'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(e) {
    e.preventDefault()

    try {
      const response = await api.post('/auth/login', {
        email,
        password
      })

      localStorage.setItem('token', response.data.access_token)

      window.location.href = '/'
    } catch {
      alert('Invalid credentials')
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="bg-slate-900 border border-slate-800 rounded-3xl p-10 w-full max-w-md"
      >
        <h1 className="text-4xl font-bold text-white mb-8">
          DevTrack
        </h1>

        <div className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            className="bg-slate-800 text-white rounded-xl px-4 py-4 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="bg-slate-800 text-white rounded-xl px-4 py-4 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 transition rounded-xl py-4 text-white font-semibold"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}