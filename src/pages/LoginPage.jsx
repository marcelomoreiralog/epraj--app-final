import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Mail, Lock } from 'lucide-react'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (email && password) {
      setTimeout(() => {
        setLoading(false)
        navigate('/')
      }, 1000)
    } else {
      setError('Preencha todos os campos')
      setLoading(false)
    }
  }

  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 64px)' }}>
      <div style={{
        display: 'none',
        width: '50%',
        background: 'linear-gradient(135deg, #ef8a23 0%, #d96d0d 100%)',
        color: 'white',
        padding: '60px',
        justifyContent: 'space-between',
        flexDirection: 'column',
        '@media (min-width: 1024px)': { display: 'flex' }
      }}>
        <div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>Prajá</div>
          <p style={{ fontSize: '14px', opacity: 0.9 }}>Marketplace de serviços locais</p>
        </div>
        <div>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '16px' }}>Conectando clientes e profissionais</h2>
          <p style={{ fontSize: '16px', lineHeight: 1.6 }}>Encontre profissionais qualificados próximos a você, solicite orçamentos e contrate com segurança.</p>
        </div>
      </div>

      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '60px 24px'
      }}>
        <div style={{ maxWidth: '400px', margin: '0 auto', width: '100%' }}>
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>Bem-vindo</h2>
            <p style={{ color: '#666' }}>Faça login para acessar sua conta</p>
          </div>

          {error && (
            <div style={{ backgroundColor: '#fee2e2', border: '1px solid #fca5a5', color: '#991b1b', padding: '12px 16px', borderRadius: '6px', marginBottom: '16px', fontSize: '14px' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Email</label>
              <div style={{ position: 'relative' }}>
                <Mail style={{ position: 'absolute', left: '12px', top: '12px', color: '#9ca3af', width: '20px' }} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  style={{
                    width: '100%',
                    paddingLeft: '40px',
                    paddingRight: '16px',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    outline: 'none',
                    fontSize: '16px'
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Senha</label>
              <div style={{ position: 'relative' }}>
                <Lock style={{ position: 'absolute', left: '12px', top: '12px', color: '#9ca3af', width: '20px' }} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  style={{
                    width: '100%',
                    paddingLeft: '40px',
                    paddingRight: '16px',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    outline: 'none',
                    fontSize: '16px'
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                backgroundColor: '#ef8a23',
                color: 'white',
                padding: '12px 16px',
                borderRadius: '8px',
                border: 'none',
                fontWeight: '600',
                cursor: 'pointer',
                marginTop: '16px',
                opacity: loading ? 0.7 : 1
              }}
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <div style={{ marginTop: '24px', textAlign: 'center' }}>
            <p style={{ color: '#666' }}>
              Não tem conta? <Link to="/signup" style={{ color: '#ef8a23', fontWeight: '500', textDecoration: 'none' }}>Cadastre-se</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
