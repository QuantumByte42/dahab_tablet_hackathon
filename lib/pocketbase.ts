import PocketBase from "pocketbase"

const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL || "http://localhost:8090")

export { pb }

export interface AdminUser {
  id: string
  email: string
  username: string
  name?: string
  avatar?: string
}

export class AuthService {
  static async login(email: string, password: string): Promise<AdminUser> {
    try {
      const authData = await pb.collection("admins").authWithPassword(email, password)
      return {
        id: authData.record.id,
        email: authData.record.email,
        username: authData.record.username,
        name: authData.record.name,
        avatar: authData.record.avatar,
      }
    } catch (error) {
      console.error("Login error:", error)
      throw new Error("فشل في تسجيل الدخول.")
    }
  }

  static logout(): void {
    pb.authStore.clear()
  }

  static getCurrentUser(): AdminUser | null {
    if (!pb.authStore.isValid) {
      return null
    }

    const user = pb.authStore.model
    if (!user) return null

    return {
      id: user.id,
      email: user.email,
      username: user.username,
      name: user.name,
      avatar: user.avatar,
    }
  }

  static isAuthenticated(): boolean {
    return pb.authStore.isValid
  }

  static onAuthChange(callback: (user: AdminUser | null) => void): () => void {
    return pb.authStore.onChange(() => {
      callback(this.getCurrentUser())
    })
  }
}
