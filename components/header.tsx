"use client"

import { useState, useEffect } from "react"
import { Clock, Calendar } from "lucide-react"

export function Header() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatArabicDate = (date: Date) => {
    return date.toLocaleDateString("en-JO", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatArabicTime = (date: Date) => {
    return date.toLocaleTimeString("en-JO", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 mb-8">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">متجر الذهب</h1>
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
    </header>
  )
}
