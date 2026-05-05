import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import SearchPage from './pages/SearchPage'

function Header() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const handleLogout = () => {
    setUser(null)
    navigate('/')
  }

  return (
    <header style={{ borderBottom: '1px solid #e5e7eb', padding: '16px 0', position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'white' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#ef8a23', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>é</span>
          </div>
          <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#1a1a1a' }}>Prajá</span>
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {user ? (
            <>
              <Link to="/" style={{ color: '#666', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
              <Link to="/search" style={{ color: '#666', textDecoration: 'none', fontWeight: '500' }}>Buscar</Link>
              <span style={{ color: '#666' }}>Olá, {user.name}</span>
              <button onClick={handleLogout} style={{ backgroundColor: '#ef8a23', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <LogOut size={16} />
                Sair
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={{ color: '#666', textDecoration: 'none', fontWeight: '500' }}>Entrar</Link>
              <Link to="/signup" style={{ backgroundColor: '#ef8a23', color: 'white', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontWeight: '500' }}>
                Cadastro
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  )
}
