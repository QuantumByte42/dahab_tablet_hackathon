"use client"

import type React from "react"

import { useEffect } from "react"
import { useAuthStore } from "@/stores/auth-store"
import { AuthService } from "@/lib/pocketbase"

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { checkAuth } = useAuthStore()

  useEffect(() => {
    // Check authentication status on app load
    checkAuth()

    // Listen for auth changes
    const unsubscribe = AuthService.onAuthChange((user) => {
      useAuthStore.setState({ user })
    })

    return unsubscribe
  }, [checkAuth])

  return <>{children}</>
}
