export const authMock = {
  users: [],

  async signup(email, password, userData) {
    const user = {
      id: Date.now().toString(),
      email,
      name: userData.name,
      phone: userData.phone,
      cep: userData.cep,
      address: userData.address,
      created_at: new Date().toISOString()
    }
    
    this.users.push(user)
    localStorage.setItem('currentUser', JSON.stringify(user))
    localStorage.setItem('users', JSON.stringify(this.users))
    
    return { user }
  },

  async login(email, password) {
    const user = this.users.find(u => u.email === email)
    
    if (!user) {
      throw new Error('Usuário não encontrado')
    }
    
    localStorage.setItem('currentUser', JSON.stringify(user))
    
    return { session: { user } }
  },

  async logout() {
    localStorage.removeItem('currentUser')
  },

  async getCurrentUser() {
    const user = localStorage.getItem('currentUser')
    return user ? JSON.parse(user) : null
  }
}