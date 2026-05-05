import React from 'react'
import { Link } from 'react-router-dom'

const CATEGORIES = [
  { id: 'construction', name: 'Construção', emoji: '🏗️' },
  { id: 'maintenance', name: 'Manutenção', emoji: '🔧' },
  { id: 'beauty', name: 'Beleza', emoji: '💅' },
  { id: 'home', name: 'Doméstico', emoji: '🏠' },
  { id: 'automotive', name: 'Automotivo', emoji: '🚗' },
  { id: 'events', name: 'Eventos', emoji: '🎉' },
  { id: 'education', name: 'Educação', emoji: '📚' },
  { id: 'technology', name: 'Tecnologia', emoji: '💻' },
]

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fafafa' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #ef8a23 0%, #d96d0d 100%)', color: 'white', padding: '60px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px' }}>Encontre profissionais próximos</h1>
          <p style={{ fontSize: '18px', opacity: 0.9 }}>Contrate com segurança, negocie diretamente e resolva seus problemas urgentes</p>
          
          <div style={{ marginTop: '40px', maxWidth: '500px', margin: '40px auto 0' }}>
            <input
              type="text"
              placeholder="Procure por profissional ou serviço..."
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '16px',
                outline: 'none'
              }}
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '32px', color: '#1a1a1a' }}>Categorias</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '16px' }}>
          {CATEGORIES.map(cat => (
            <Link
              key={cat.id}
              to={`/search?category=${cat.id}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px',
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              <span style={{ fontSize: '32px', marginBottom: '8px' }}>{cat.emoji}</span>
              <span style={{ fontSize: '14px', fontWeight: '500', color: '#666', textAlign: 'center' }}>{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#ef8a23', color: 'white', padding: '60px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '16px' }}>Pronto para começar?</h2>
          <p style={{ fontSize: '18px', marginBottom: '32px', opacity: 0.9 }}>Cadastre-se agora e encontre profissionais qualificados em sua região</p>
          <Link
            to="/signup"
            style={{
              display: 'inline-block',
              backgroundColor: 'white',
              color: '#ef8a23',
              fontWeight: 'bold',
              padding: '12px 32px',
              borderRadius: '6px',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            Criar conta grátis
          </Link>
        </div>
      </section>
    </div>
  )
}
