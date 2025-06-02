"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { useAuthStore } from "@/stores/auth-store"
import { LoginForm } from "./login-form"
import { Loader2 } from "lucide-react"

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, checkAuth } = useAuthStore()
  const [isChecking, setIsChecking] = useState(true)
  const initRef = useRef(false)

  useEffect(() => {
    if (initRef.current) return

    const initAuth = async () => {
      initRef.current = true
      checkAuth()
      setIsChecking(false)
    }

    initAuth()
  }, [checkAuth])

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-yellow-600" />
          <p className="text-gray-600">جاري التحقق من صلاحية الدخول...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return <LoginForm />
  }

  return <>{children}</>
}
