import { create } from "zustand"
import { persist } from "zustand/middleware"
import { AuthService, type AdminUser } from "@/lib/pocketbase"

interface AuthState {
  user: AdminUser | null
  isLoading: boolean
  error: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  checkAuth: () => void
  clearError: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set,) => ({
      user: null,
      isLoading: false,
      error: null,

      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null })
        try {
          const user = await AuthService.login(email, password)
          set({ user, isLoading: false })
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : "حدث خطأ غير متوقع",
            isLoading: false,
          })
          throw error
        }
      },

      logout: () => {
        AuthService.logout()
        set({ user: null, error: null })
      },

      checkAuth: () => {
        const user = AuthService.getCurrentUser()
        set({ user })
      },

      clearError: () => {
        set({ error: null })
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ user: state.user }),
    },
  ),
)
