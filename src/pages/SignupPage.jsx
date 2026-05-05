import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { authService } from '../supabase'

export default function SignupPage({ onSignup }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cep: '',
    address: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!formData.name || !formData.email || !formData.phone || !formData.cep || !formData.address || !formData.password) {
      setError('Preencha todos os campos')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Senhas não conferem')
      return
    }

    if (formData.password.length < 6) {
      setError('Senha deve ter pelo menos 6 caracteres')
      return
    }

    setLoading(true)
    try {
      const result = await authService.signup(formData.email, formData.password, {
        name: formData.name,
        phone: formData.phone,
        cep: formData.cep,
        address: formData.address
      })
      
      onSignup(result.user)
      navigate('/')
    } catch (err) {
      setError(err.message || 'Erro ao criar conta')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: 'calc(100vh - 64px)', backgroundColor: '#f3f4f6', padding: '48px 24px' }}>
      <div style={{ maxWidth: '400px', margin: '0 auto', backgroundColor: 'white', borderRadius: '12px', padding: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
        <div style={{ marginBottom: '32px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', textDecoration: 'none' }}>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#ef8a23', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'white', fontWeight: 'bold' }}>é</span>
            </div>
            <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#1a1a1a' }}>Prajá</span>
          </Link>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '8px' }}>Criar conta</h2>
          <p style={{ color: '#666', fontSize: '14px' }}>Preencha seus dados para começar</p>
        </div>

        {error && (
          <div style={{ backgroundColor: '#fee2e2', border: '1px solid #fca5a5', color: '#991b1b', padding: '12px 16px', borderRadius: '6px', marginBottom: '16px', fontSize: '14px' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { name: 'name', label: 'Nome Completo', placeholder: 'Seu nome' },
            { name: 'email', label: 'Email', placeholder: 'seu@email.com', type: 'email' },
            { name: 'phone', label: 'Telefone', placeholder: '(41) 99999-9999' },
            { name: 'cep', label: 'CEP', placeholder: '80000-000' },
            { name: 'address', label: 'Endereço', placeholder: 'Rua, número' },
            { name: 'password', label: 'Senha', placeholder: '••••••••', type: 'password' },
            { name: 'confirmPassword', label: 'Confirmar Senha', placeholder: '••••••••', type: 'password' }
          ].map(field => (
            <div key={field.name}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '4px' }}>
                {field.label}
              </label>
              <input
                type={field.type || 'text'}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  outline: 'none',
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: '#ef8a23',
              color: 'white',