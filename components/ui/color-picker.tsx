"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface SimpleColorPickerProps {
  value: string
  onChange: (value: string) => void
  className?: string
  label?: string
}

export function SimpleColorPicker({ value, onChange, className, label }: SimpleColorPickerProps) {
  const [color, setColor] = useState(value)

  useEffect(() => {
    setColor(value)
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    setColor(newColor)
    onChange(newColor)
  }

  const presetColors = [
    { name: "أبيض", value: "#ffffff" },
    { name: "رمادي فاتح", value: "#f8fafc" },
    { name: "رمادي", value: "#e2e8f0" },
    { name: "رمادي داكن", value: "#64748b" },
    { name: "أسود", value: "#1e293b" },
    { name: "أزرق فاتح", value: "#dbeafe" },
    { name: "أزرق", value: "#3b82f6" },
    { name: "أزرق داكن", value: "#1e40af" },
    { name: "أخضر فاتح", value: "#dcfce7" },
    { name: "أخضر", value: "#22c55e" },
    { name: "أخضر داكن", value: "#166534" },
    { name: "أصفر فاتح", value: "#fef3c7" },
    { name: "أصفر", value: "#f59e0b" },
    { name: "برتقالي", value: "#ea580c" },
    { name: "أحمر فاتح", value: "#fecaca" },
    { name: "أحمر", value: "#ef4444" },
    { name: "أحمر داكن", value: "#991b1b" },
    { name: "بنفسجي فاتح", value: "#f3e8ff" },
    { name: "بنفسجي", value: "#a855f7" },
    { name: "بنفسجي داكن", value: "#5b21b6" },
    { name: "وردي فاتح", value: "#fce7f3" },
    { name: "وردي", value: "#ec4899" },
    { name: "تركوازي", value: "#06b6d4" },
    { name: "ذهبي", value: "#d97706" },
  ]

  return (
    <div className={cn("space-y-4", className)}>
      {label && <h4 className="text-sm font-medium text-gray-700">{label}</h4>}

      {/* Current color display */}
      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border">
        <div className="w-8 h-8 rounded-full border-2 border-white shadow-sm" style={{ backgroundColor: color }} />
        <span className="text-sm font-medium">اللون المختار</span>
        <span className="text-xs font-mono text-gray-500 ml-auto">{color}</span>
      </div>

      {/* Preset colors grid */}
      <div>
        <h5 className="text-xs font-medium text-gray-600 mb-2">الألوان السريعة</h5>
        <div className="grid grid-cols-6 gap-2">
          {presetColors.map((presetColor) => (
            <button
              key={presetColor.value}
              type="button"
              onClick={() => {
                setColor(presetColor.value)
                onChange(presetColor.value)
              }}
              className={`relative w-10 h-10 rounded-lg border-2 hover:scale-110 transition-all duration-200 ${color === presetColor.value
                  ? "border-yellow-500 ring-2 ring-yellow-200"
                  : "border-gray-200 hover:border-gray-300"
                }`}
              style={{ backgroundColor: presetColor.value }}
              title={presetColor.name}
            >
              {color === presetColor.value && (
                <Check className="w-4 h-4 text-white absolute inset-0 m-auto drop-shadow-sm" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Custom color picker */}
      <div className="space-y-2">
        <h5 className="text-xs font-medium text-gray-600">لون مخصص</h5>
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={color}
            onChange={handleChange}
            className="w-12 h-10 rounded border border-gray-300 cursor-pointer"
          />
          <span className="text-sm text-gray-600">انقر لاختيار لون مخصص</span>
        </div>
      </div>
    </div>
  )
}
