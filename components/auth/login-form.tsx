"use client"

import type React from "react"

import { useState } from "react"
import { useAuthStore } from "@/stores/auth-store"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, EyeOff, LogIn, Shield, Loader2 } from "lucide-react"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const { login, isLoading, error, clearError } = useAuthStore()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    clearError()

    if (!email || !password) {
      return
    }

    try {
      await login(email, password)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-amber-50 p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-yellow-100 rounded-full">
              <Shield className="h-12 w-12 text-yellow-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">لوحة تحكم متجر الذهب</h1>
          <p className="text-sm text-gray-500">نظام إدارة أسعار الذهب المباشرة</p>
        </div>

        {/* Login Form */}
        <Card className="shadow-xl border-0">
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  البريد الإلكتروني
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                  placeholder="admin@example.com"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  كلمة المرور
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                    placeholder="••••••••"
                    required
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-700 text-center">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white"
                disabled={isLoading || !email || !password}
              >
                {isLoading ? (
                  <>
                    جاري تسجيل الدخول...
                    <Loader2 className="h-4 w-4 ml-2 animate-spin" />
                  </>
                ) : (
                  <>
                    تسجيل الدخول
                    <LogIn className="h-4 w-4 ml-2 rotate-180" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
