import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import Signup from './views/Signup'
import { useEffect, useState } from 'react'

function App() {
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    const user = window.localStorage.getItem('user')
    if (user) {
      setLogged(true)
    }
  }, [])

  return (
    <Routes>
      {logged && (
        <Route
          path="/"
          element={<Home />}
        />
      )}
      {!logged && (
        <Route
          path="/login"
          element={<Login setLogged={setLogged} />}
        />
      )}
      {!logged && (
        <Route
          path="/signup"
          element={<Signup setLogged={setLogged} />}
        />
      )}
      <Route
        path="*"
        element={<Navigate to={logged ? '/' : '/login'} />}
      />
    </Routes>
  )
}

export default App
