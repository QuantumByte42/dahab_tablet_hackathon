"use client"

import { useState, useEffect } from "react"
import { Clock, Calendar, Settings, LogOut, User } from "lucide-react"
import { useCustomizationStore } from "@/stores/customization-store"
import { useAuthStore } from "@/stores/auth-store"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CustomizationPanel } from "./customization-panel"

export function Header() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [showCustomization, setShowCustomization] = useState(false)
  const { settings } = useCustomizationStore()
  const { user, logout } = useAuthStore()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatArabicDate = (date: Date) => {
    return date.toLocaleDateString("ar-JO", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatArabicTime = (date: Date) => {
    return date.toLocaleTimeString("ar-JO", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 mb-8">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{settings.storeName}</h1>
              {user && (
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="outline" className="text-xs">
                    <User className="h-3 w-3 ml-1" />
                    {user.name || user.username}
                  </Badge>
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setShowCustomization(true)}
                className="hover:bg-yellow-50 transition-all duration-200"
              >
                <Settings className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleLogout}
                className="hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                title="تسجيل الخروج"
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="text-left">
            <div className="flex items-center gap-2 text-gray-700 mb-1">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">{formatArabicDate(currentTime)}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Clock className="h-4 w-4" />
              <span className="text-lg font-mono">{formatArabicTime(currentTime)}</span>
            </div>
          </div>
        </div>
      </div>
      <CustomizationPanel isOpen={showCustomization} onClose={() => setShowCustomization(false)} />
    </header>
  )
}
