"use client"

import type React from "react"

import { useEffect } from "react"
import { useAuthStore } from "@/stores/auth-store"
import { useCustomizationStore } from "@/stores/customization-store"
import { AuthService } from "@/lib/pocketbase"

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { checkAuth } = useAuthStore()
  const { loadSettings, hasLoadedOnce } = useCustomizationStore()

  useEffect(() => {
    checkAuth()

    const unsubscribe = AuthService.onAuthChange(async (user) => {
      useAuthStore.setState({ user })

      if (user) {
        await loadSettings()
      } else {
        useCustomizationStore.setState({ hasLoadedOnce: false })
      }
    })

    return unsubscribe
  }, [checkAuth, loadSettings, hasLoadedOnce])

  if (!hasLoadedOnce) {
    loadSettings()
  }

  return <>{children}</>
}
