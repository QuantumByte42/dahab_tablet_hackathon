"use client"

import { useState, useEffect } from "react"
import { Clock, Calendar, Settings } from "lucide-react"
import { useCustomizationStore } from "@/stores/customization-store"
import { Button } from "@/components/ui/button"
import { CustomizationPanel } from "./customization-panel"

export function Header() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [showCustomization, setShowCustomization] = useState(false)
  const { settings } = useCustomizationStore()

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

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 mb-8">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{settings.storeName}</h1>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowCustomization(true)}
              className="hover:bg-yellow-50 transition-all duration-200"
            >
              <Settings className="h-5 w-5" />
            </Button>
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
