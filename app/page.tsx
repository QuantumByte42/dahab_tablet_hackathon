"use client"

import { GoldDashboard } from "@/components/gold-dashboard"
import { Header } from "@/components/header"
import { useCustomizationStore } from "@/stores/customization-store"

export default function Home() {
  const { settings } = useCustomizationStore()

  const backgroundColorClasses = {
    "gradient-gold": "bg-gradient-to-br from-yellow-50 to-amber-50",
    "gradient-blue": "bg-gradient-to-br from-blue-50 to-indigo-50",
    "gradient-green": "bg-gradient-to-br from-green-50 to-emerald-50",
    "gradient-purple": "bg-gradient-to-br from-purple-50 to-violet-50",
    "gradient-rose": "bg-gradient-to-br from-rose-50 to-pink-50",
    "solid-white": "bg-white",
    "solid-dark": "bg-gray-900 text-white",
    "solid-custom": "",
  }

  const backgroundPatternClasses = {
    none: "",
    dots: "bg-[radial-gradient(circle,_rgba(0,0,0,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]",
    lines:
      "bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]",
    geometric:
      "bg-[conic-gradient(from_0deg_at_50%_50%,rgba(0,0,0,0.05)_0deg,rgba(255,255,255,1)_60deg,rgba(0,0,0,0.05)_120deg,rgba(255,255,255,1)_180deg,rgba(0,0,0,0.05)_240deg,rgba(255,255,255,1)_300deg,rgba(0,0,0,0.05)_360deg)] bg-[size:20px_20px]",
    waves:
      "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNWMxLjI1LTIuNSAzLjc1LTIuNSA1IDBzMy43NSAyLjUgNSAwIDMuNzUtMi41IDUgMCA1IDAgNSAwIiBzdHJva2U9InJnYmEoMCwwLDAsMC4wNSkiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiLz48L3N2Zz4=')]",
    diagonal:
      "bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.05)_10px,rgba(0,0,0,0.05)_20px)]",
    grid: "bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]",
    hexagon:
      "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcgMGw3IDRsNy00djhsLTcgNGwtNy00eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]",
    triangles:
      "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDJsMTAgMTZIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]",
    circles: "bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_2px,transparent_2px)] bg-[length:25px_25px]",
    zigzag:
      "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMTBsNS01aDVsNSA1aDVsLTUtNWgtNWwtNS01aC01eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]",
    cross:
      "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDJWMThNMiAxMGgxNiIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]",
  }

  const fontClasses = {
    cairo: "font-cairo",
    amiri: "font-amiri",
    tajawal: "font-tajawal",
    almarai: "font-almarai",
    rubik: "font-rubik",
  }

  const getBackgroundStyle = () => {
    if (settings.backgroundColor === "solid-custom") {
      return { backgroundColor: settings.customBackgroundColor }
    }
    return {}
  }

  return (
    <div className={`min-h-screen transition-all duration-300 ${fontClasses[settings.fontFamily]}`}>
      {/* Background color layer */}
      <div
        className={`fixed inset-0 z-0 ${backgroundColorClasses[settings.backgroundColor]}`}
        style={getBackgroundStyle()}
      ></div>

      {/* Pattern overlay layer */}
      <div className={`fixed inset-0 z-0 ${backgroundPatternClasses[settings.backgroundPattern]}`}></div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <GoldDashboard />
        </div>
      </div>
    </div>
  )
}
