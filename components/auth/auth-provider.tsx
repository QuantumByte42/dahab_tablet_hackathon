"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { useAuthStore } from "@/stores/auth-store"
import { useCustomizationStore } from "@/stores/customization-store"
import { AuthService } from "@/lib/pocketbase"

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { checkAuth } = useAuthStore()
  const { loadSettings } = useCustomizationStore()
  const hasLoadedRef = useRef(false)

  useEffect(() => {
    checkAuth()

    const unsubscribe = AuthService.onAuthChange(async (user) => {
      useAuthStore.setState({ user })

      if (user && !hasLoadedRef.current) {
        hasLoadedRef.current = true
        await loadSettings()
      } else if (!user) {
        hasLoadedRef.current = false
      }
    })

    return unsubscribe
  }, [checkAuth, loadSettings])

  return <>{children}</>
}
