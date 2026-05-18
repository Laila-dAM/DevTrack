import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import App from '../App'
import Login from '../pages/auth/Login'
import ProtectedRoute from '../components/auth/ProtectedRoute'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}