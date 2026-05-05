import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

export const authService = {
  async signup(email, password, userData) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    
    if (error) throw error
    
    // Salva dados do usuário na tabela users
    if (data.user) {
      await supabase.from('users').insert([{
        id: data.user.id,
        email: data.user.email,
        name: userData.name,
        phone: userData.phone,
        cep: userData.cep,
        address: userData.address,
        is_professional: false
      }])
    }
    
    return data
  },

  async login(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    
    if (error) throw error
    return data
  },

  async logout() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  },

  async getCurrentUser() {
    const { data } = await supabase.auth.getSession()
    return data.session?.user
  },

  async getUserProfile(userId) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single()
    
    if (error) throw error
    return data
  }
}

export const budgetService = {
  async createBudget(clientId, professionalId, description, amount) {
    const { data, error } = await supabase
      .from('budgets')
      .insert([{
        client_id: clientId,
        professional_id: professionalId,
        description,
        estimated_amount: amount,
        status: 'pending'
      }])
      .select()
    
    if (error) throw error
    return data
  },

  async getBudgets(userId, isClient = true) {
    const column = isClient ? 'client_id' : 'professional_id'
    const { data, error } = await supabase
      .from('budgets')
      .select('*')
      .eq(column, userId)
    
    if (error) throw error
    return data
  }
}

export const messageService = {
  async sendMessage(budgetId, senderId, content) {
    const { data, error } = await supabase
      .from('messages')
      .insert([{
        budget_id: budgetId,
        sender_id: senderId,
        content
      }])
      .select()
    
    if (error) throw error
    return data
  },

  async getMessages(budgetId) {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('budget_id', budgetId)
      .order('created_at', { ascending: true })
    
    if (error) throw error
    return data
  }
}

export const promotionService = {
  async createPromotion(professionalId) {
    const expiresAt = new Date()
    expiresAt.setDate(expiresAt.getDate() + 7) // 7 dias
    
    const { data, error } = await supabase
      .from('promotions')
      .insert([{
        professional_id: professionalId,
        price: 39.90,
        is_active: true,
        expires_at: expiresAt.toISOString()
      }])
      .select()
    
    if (error) throw error
    return data
  },

  async getActivePromotions() {
    const { data, error } = await supabase
      .from('promotions')
      .select('*')
      .eq('is_active', true)
      .gt('expires_at', new Date().toISOString())
    
    if (error) throw error
    return data
  }
}