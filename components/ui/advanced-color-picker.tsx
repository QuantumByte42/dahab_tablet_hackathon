"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, RotateCcw } from "lucide-react"

interface AdvancedColorPickerProps {
  value: string
  onChange: (value: string) => void
  showOpacity?: boolean
  className?: string
  label?: string
}

// Helper function to convert hex to rgba
function hexToRgba(hex: string, opacity = 1): string {
  const r = Number.parseInt(hex.slice(1, 3), 16)
  const g = Number.parseInt(hex.slice(3, 5), 16)
  const b = Number.parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

// Helper function to extract opacity from rgba
function extractOpacity(color: string): number {
  if (color.startsWith("rgba")) {
    const match = color.match(/rgba$$.*,\s*([\d.]+)$$/)
    return match ? Number.parseFloat(match[1]) * 100 : 100
  }
  return 100
}

// Helper function to get hex from rgba/rgb
function getHexFromColor(color: string): string {
  if (color.startsWith("#")) return color

  if (color.startsWith("rgb")) {
    const match = color.match(/\d+/g)
    if (match && match.length >= 3) {
      const r = Number.parseInt(match[0]).toString(16).padStart(2, "0")
      const g = Number.parseInt(match[1]).toString(16).padStart(2, "0")
      const b = Number.parseInt(match[2]).toString(16).padStart(2, "0")
      return `#${r}${g}${b}`
    }
  }

  return "#ffffff"
}

export function AdvancedColorPicker({
  value,
  onChange,
  showOpacity = true,
  className,
  label,
}: AdvancedColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [hexColor, setHexColor] = useState(getHexFromColor(value))
  const [opacity, setOpacity] = useState(extractOpacity(value))

  useEffect(() => {
    setHexColor(getHexFromColor(value))
    setOpacity(extractOpacity(value))
  }, [value])

  const presetColors = [
    // Whites and Grays
    { name: "أبيض", hex: "#ffffff" },
    { name: "رمادي فاتح", hex: "#f8fafc" },
    { name: "رمادي", hex: "#e2e8f0" },
    { name: "رمادي داكن", hex: "#64748b" },
    { name: "أسود", hex: "#1e293b" },

    // Blues
    { name: "أزرق فاتح", hex: "#dbeafe" },
    { name: "أزرق", hex: "#3b82f6" },
    { name: "أزرق داكن", hex: "#1e40af" },
    { name: "تركوازي", hex: "#06b6d4" },
    { name: "نيلي", hex: "#4f46e5" },

    // Greens
    { name: "أخضر فاتح", hex: "#dcfce7" },
    { name: "أخضر", hex: "#22c55e" },
    { name: "أخضر داكن", hex: "#166534" },
    { name: "زيتي", hex: "#65a30d" },

    // Yellows and Oranges
    { name: "أصفر فاتح", hex: "#fef3c7" },
    { name: "أصفر", hex: "#f59e0b" },
    { name: "برتقالي", hex: "#ea580c" },
    { name: "ذهبي", hex: "#d97706" },

    // Reds and Pinks
    { name: "أحمر فاتح", hex: "#fecaca" },
    { name: "أحمر", hex: "#ef4444" },
    { name: "أحمر داكن", hex: "#991b1b" },
    { name: "وردي", hex: "#ec4899" },

    // Purples
    { name: "بنفسجي فاتح", hex: "#f3e8ff" },
    { name: "بنفسجي", hex: "#a855f7" },
    { name: "بنفسجي داكن", hex: "#5b21b6" },
  ]

  const handleColorChange = (newHex: string, newOpacity: number = opacity) => {
    if (showOpacity && newOpacity < 100) {
      onChange(hexToRgba(newHex, newOpacity / 100))
    } else {
      onChange(newHex)
    }
  }

  const handlePresetClick = (hex: string) => {
    setHexColor(hex)
    handleColorChange(hex)
  }

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHex = e.target.value
    setHexColor(newHex)
    handleColorChange(newHex)
  }

  const handleOpacityChange = (newOpacity: number[]) => {
    const opacityValue = newOpacity[0]
    setOpacity(opacityValue)
    handleColorChange(hexColor, opacityValue)
  }

  const resetToDefault = () => {
    setHexColor("#ffffff")
    setOpacity(100)
    onChange("#ffffff")
  }

  const currentColor = showOpacity && opacity < 100 ? hexToRgba(hexColor, opacity / 100) : hexColor

  return (
    <div className={cn("space-y-4", className)}>
      {label && (
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-gray-700">{label}</h4>
          <Button variant="ghost" size="sm" onClick={resetToDefault} className="h-auto p-1 text-xs">
            <RotateCcw className="h-3 w-3 mr-1" />
            إعادة تعيين
          </Button>
        </div>
      )}

      {/* Color Display */}
      <Card className="p-3">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-lg border-2 border-white shadow-md cursor-pointer"
            style={{ backgroundColor: currentColor }}
            onClick={() => setIsOpen(!isOpen)}
          />
          <div className="flex-1">
            <div className="text-sm font-medium mb-1">اللون المختار</div>
            <Badge variant="outline" className="font-mono text-xs">
              {currentColor}
            </Badge>
          </div>
          <Button variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)}>
            <Palette className="h-4 w-4" />
          </Button>
        </div>
      </Card>

      {/* Color Picker Panel */}
      {isOpen && (
        <Card className="p-4 space-y-4">
          <CardContent className="p-0 space-y-4">
            {/* Preset Colors */}
            <div>
              <h5 className="text-sm font-medium text-gray-700 mb-3">الألوان السريعة</h5>
              <div className="grid grid-cols-5 gap-2">
                {presetColors.map((color) => (
                  <button
                    key={color.hex}
                    type="button"
                    onClick={() => handlePresetClick(color.hex)}
                    className={cn(
                      "w-10 h-10 rounded-lg border-2 hover:scale-110 transition-all duration-200 relative",
                      hexColor === color.hex
                        ? "border-blue-500 ring-2 ring-blue-200"
                        : "border-gray-200 hover:border-gray-300",
                    )}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {hexColor === color.hex && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full border border-gray-300" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Color Input */}
            <div>
              <h5 className="text-sm font-medium text-gray-700 mb-3">لون مخصص</h5>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={hexColor}
                  onChange={handleHexChange}
                  className="w-12 h-10 rounded border border-gray-300 cursor-pointer"
                />
                <input
                  type="text"
                  value={hexColor}
                  onChange={handleHexChange}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm font-mono"
                  placeholder="#ffffff"
                />
              </div>
            </div>

            {/* Opacity Slider */}
            {showOpacity && (
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h5 className="text-sm font-medium text-gray-700">الشفافية</h5>
                  <Badge variant="outline" className="text-xs">
                    {Math.round(opacity)}%
                  </Badge>
                </div>
                <div className="px-2">
                  <Slider
                    value={[opacity]}
                    onValueChange={handleOpacityChange}
                    max={100}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>شفاف</span>
                  <span>مصمت</span>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2 border-t">
              <Button variant="outline" size="sm" onClick={() => setIsOpen(false)} className="flex-1">
                تطبيق
              </Button>
              <Button variant="ghost" size="sm" onClick={resetToDefault}>
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
