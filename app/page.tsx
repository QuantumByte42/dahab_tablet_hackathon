"use client"

import { GoldDashboard } from "@/components/gold-dashboard"
import { Header } from "@/components/header"
import { useCustomizationStore } from "@/stores/customization-store"

export default function Home() {
  const { settings } = useCustomizationStore()

  const backgroundClasses = {
    "gradient-gold": "bg-gradient-to-br from-yellow-50 to-amber-50",
    "gradient-blue": "bg-gradient-to-br from-blue-50 to-indigo-50",
    "gradient-green": "bg-gradient-to-br from-green-50 to-emerald-50",
    "solid-white": "bg-white",
    "solid-dark": "bg-gray-900 text-white",
    "pattern-geometric": "bg-gray-50",
  }

  const fontClasses = {
    cairo: "font-cairo",
    amiri: "font-amiri",
    tajawal: "font-tajawal",
    almarai: "font-almarai",
    rubik: "font-rubik",
  }

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${backgroundClasses[settings.background]} ${fontClasses[settings.fontFamily]}`}
    >
      <Header />
      <div className="container mx-auto px-4 py-8">
        <GoldDashboard />
      </div>
    </div>
  )
}
