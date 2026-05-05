import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, MapPin, Star } from 'lucide-react'

const PROFESSIONALS = [
  { id: 1, name: 'João Silva', category: 'construction', city: 'Curitiba', rating: 4.8, reviews: 45, photo: '👨‍🔧' },
  { id: 2, name: 'Maria Santos', category: 'beauty', city: 'Curitiba', rating: 4.9, reviews: 32, photo: '👩‍🦱' },
  { id: 3, name: 'Pedro Oliveira', category: 'automotive', city: 'Curitiba', rating: 4.7, reviews: 28, photo: '👨‍🔧' },
  { id: 4, name: 'Ana Costa', category: 'home', city: 'Curitiba', rating: 5.0, reviews: 15, photo: '👩‍💼' },
  { id: 5, name: 'Carlos Mendes', category: 'maintenance', city: 'Curitiba', rating: 4.6, reviews: 52, photo: '👨‍🏫' },
  { id: 6, name: 'Lucia Ferreira', category: 'education', city: 'Curitiba', rating: 4.9, reviews: 38, photo: '👩‍🏫' },
]

const CATEGORIES = {
  construction: 'Construção',
  maintenance: 'Manutenção',
  beauty: 'Beleza',
  home: 'Doméstico',
  automotive: 'Automotivo',
  events: 'Eventos',
  education: 'Educação',
  technology: 'Tecnologia',
}

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')
  const [sortBy, setSortBy] = useState('rating')

  const filtered = category
    ? PROFESSIONALS.filter(p => p.category === category)
    : PROFESSIONALS

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating
    return 0
  })

  return (
    <div style={{ minHeight: 'calc(100vh - 64px)', backgroundColor: '#f3f4f6' }}>
      {/* Header */}
      <div style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', padding: '24px', position: 'sticky', top: '64px', zIndex: 10 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '16px' }}>Buscar Profissionais</h1>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: '200px', position: 'relative' }}>
              <Search style={{ position: 'absolute', left: '12px', top: '12px', color: '#9ca3af', width: '20px' }} />
              <input
                type="text"
                placeholder="Procure por profissional..."
                style={{
                  width: '100%',
                  paddingLeft: '40px',
                  paddingRight: '16px',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  outline: 'none',
                  fontSize: '14px'
                }}
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '10px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                outline: 'none',
                fontSize: '14px',
                backgroundColor: 'white'
              }}
            >
              <option value="rating">Melhor avaliação</option>
              <option value="recent">Mais recentes</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px' }}>
        {category && (
          <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#666', marginBottom: '16px' }}>
            {CATEGORIES[category] || 'Todos os profissionais'}
          </h2>
        )}

        {sorted.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 24px' }}>
            <p style={{ color: '#666' }}>Nenhum profissional encontrado</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {sorted.map(prof => (
              <div
                key={prof.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  overflow: 'hidden',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
              >
                <div style={{ backgroundColor: '#f0f0f0', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '64px' }}>
                  {prof.photo}
                </div>
                <div style={{ padding: '16px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px' }}>
                    {prof.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        style={{
                          color: i < Math.floor(prof.rating) ? '#fbbf24' : '#d1d5db',
                          fill: i < Math.floor(prof.rating) ? '#fbbf24' : 'none'
                        }}
                      />
                    ))}
                    <span style={{ fontSize: '12px', color: '#666' }}>({prof.reviews})</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#666', fontSize: '12px', marginBottom: '12px' }}>
                    <MapPin size={14} />
                    {prof.city}
                  </div>
                  <button
                    style={{
                      width: '100%',
                      backgroundColor: '#ef8a23',
                      color: 'white',
                      padding: '10px 12px',
                      borderRadius: '6px',
                      border: 'none',
                      fontWeight: '500',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                  >
                    Ver perfil
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
