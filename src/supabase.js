import { authMock } from './authMock'

export const authService = authMock

export const budgetService = {
  async createBudget(clientId, professionalId, description, amount) {
    return { id: Date.now() }
  },

  async getBudgets(userId, isClient = true) {
    return []
  }
}

export const messageService = {
  async sendMessage(budgetId, senderId, content) {
    return { id: Date.now() }
  },

  async getMessages(budgetId) {
    return []
  }
}

export const promotionService = {
  async createPromotion(professionalId) {
    return { id: Date.now() }
  },

  async getActivePromotions() {
    return []
  }
}