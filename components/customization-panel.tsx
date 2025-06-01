"use client"
import { Card, CardContent } from "@/components/ui/card"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Settings, Palette, Type, Layout, X, Wifi } from "lucide-react"
import { useCustomizationStore } from "@/stores/customization-store"
import { useState } from "react"

interface CustomizationPanelProps {
  isOpen: boolean
  onClose: () => void
}

export function CustomizationPanel({ isOpen, onClose }: CustomizationPanelProps) {
  const { settings, updateSettings, resetSettings } = useCustomizationStore()
  const [activeTab, setActiveTab] = useState("style")

  if (!isOpen) return null

  const cardStyles = [
    { id: "modern", name: "عصري", description: "تصميم حديث ونظيف" },
    { id: "classic", name: "كلاسيكي", description: "تصميم تقليدي أنيق" },
    { id: "luxury", name: "فاخر", description: "تصميم راقي ومميز" },
    { id: "minimal", name: "بسيط", description: "تصميم بسيط وواضح" },
    { id: "elegant", name: "أنيق", description: "تصميم أنيق ومتوازن" },
    { id: "bold", name: "جريء", description: "تصميم جريء وملفت" },
  ]

  const backgroundColors = [
    { id: "gradient-gold", name: "ذهبي متدرج", class: "bg-gradient-to-br from-yellow-50 to-amber-50" },
    { id: "gradient-blue", name: "أزرق متدرج", class: "bg-gradient-to-br from-blue-50 to-indigo-50" },
    { id: "gradient-green", name: "أخضر متدرج", class: "bg-gradient-to-br from-green-50 to-emerald-50" },
    { id: "gradient-purple", name: "بنفسجي متدرج", class: "bg-gradient-to-br from-purple-50 to-violet-50" },
    { id: "gradient-rose", name: "وردي متدرج", class: "bg-gradient-to-br from-rose-50 to-pink-50" },
    { id: "solid-white", name: "أبيض", class: "bg-white" },
    { id: "solid-dark", name: "داكن", class: "bg-gray-900 text-white" },
  ]

  const backgroundPatterns = [
    { id: "none", name: "بدون نمط", preview: "bg-gray-100" },
    {
      id: "dots",
      name: "نقاط",
      preview: "bg-gray-100 bg-[radial-gradient(circle,_rgba(0,0,0,0.2)_1px,_transparent_1px)] bg-[length:10px_10px]",
    },
    {
      id: "lines",
      name: "خطوط",
      preview:
        "bg-gray-100 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:10px_10px]",
    },
    {
      id: "geometric",
      name: "هندسي",
      preview:
        "bg-gray-100 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(0,0,0,0.1)_0deg,rgba(255,255,255,1)_60deg,rgba(0,0,0,0.1)_120deg,rgba(255,255,255,1)_180deg,rgba(0,0,0,0.1)_240deg,rgba(255,255,255,1)_300deg,rgba(0,0,0,0.1)_360deg)] bg-[size:10px_10px]",
    },
    {
      id: "waves",
      name: "أمواج",
      preview:
        "bg-gray-100 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNWMxLjI1LTIuNSAzLjc1LTIuNSA1IDBzMy43NSAyLjUgNSAwIiBzdHJva2U9InJnYmEoMCwwLDAsMC4yKSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')]",
    },
    {
      id: "diagonal",
      name: "قطري",
      preview:
        "bg-gray-100 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(0,0,0,0.1)_5px,rgba(0,0,0,0.1)_10px)]",
    },
    {
      id: "grid",
      name: "شبكة",
      preview:
        "bg-gray-100 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:10px_10px]",
    },
    { id: "hexagon", name: "سداسي", preview: "bg-gray-100" },
    { id: "triangles", name: "مثلثات", preview: "bg-gray-100" },
    {
      id: "circles",
      name: "دوائر",
      preview:
        "bg-gray-100 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:12px_12px]",
    },
    { id: "zigzag", name: "متعرج", preview: "bg-gray-100" },
    { id: "cross", name: "صليب", preview: "bg-gray-100" },
  ]

  const fonts = [
    { id: "cairo", name: "Cairo", class: "font-cairo", preview: "نموذج خط القاهرة" },
    { id: "amiri", name: "Amiri", class: "font-amiri", preview: "نموذج خط أميري" },
    { id: "tajawal", name: "Tajawal", class: "font-tajawal", preview: "نموذج خط تجوال" },
    { id: "almarai", name: "Almarai", class: "font-almarai", preview: "نموذج خط المرعي" },
    { id: "rubik", name: "Rubik", class: "font-rubik", preview: "نموذج خط روبيك" },
  ]

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSettings({
      backgroundColor: "solid-custom",
      customBackgroundColor: e.target.value,
    })
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <Settings className="h-6 w-6 text-yellow-600" />
            <h2 className="text-xl font-bold">إعدادات المتجر</h2>
            <div className="flex items-center gap-1 text-green-600">
              <Wifi className="h-4 w-4" />
              <span className="text-sm">Firebase</span>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Firebase status notice */}
        <div className="bg-green-50 border-b border-green-200 p-3">
          <p className="text-sm text-green-700 text-center">🔥 متصل بقاعدة بيانات Firebase - البيانات محدثة مباشرة</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            className={`px-4 py-3 font-medium text-sm flex items-center gap-2 transition-all ${activeTab === "style"
              ? "border-b-2 border-yellow-500 text-yellow-700 bg-yellow-50"
              : "text-gray-500 hover:text-gray-700"
              }`}
            onClick={() => setActiveTab("style")}
          >
            <Layout className="h-4 w-4" />
            نمط البطاقات
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm flex items-center gap-2 transition-all ${activeTab === "appearance"
              ? "border-b-2 border-yellow-500 text-yellow-700 bg-yellow-50"
              : "text-gray-500 hover:text-gray-700"
              }`}
            onClick={() => setActiveTab("appearance")}
          >
            <Palette className="h-4 w-4" />
            المظهر
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm flex items-center gap-2 transition-all ${activeTab === "store"
              ? "border-b-2 border-yellow-500 text-yellow-700 bg-yellow-50"
              : "text-gray-500 hover:text-gray-700"
              }`}
            onClick={() => setActiveTab("store")}
          >
            <Type className="h-4 w-4" />
            المتجر
          </button>
        </div>

        <div className="overflow-y-auto p-6" style={{ maxHeight: "calc(90vh - 180px)" }}>
          {activeTab === "style" && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {cardStyles.map((style) => (
                <Card
                  key={style.id}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${settings.cardStyle === style.id
                    ? "ring-2 ring-yellow-500 bg-yellow-50 scale-105 shadow-lg"
                    : "hover:scale-105"
                    }`}
                  onClick={() => updateSettings({ cardStyle: style.id as any })}
                >
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold">{style.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{style.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === "appearance" && (
            <div className="space-y-10">
              {/* Background Colors */}
              <div>
                <h3 className="text-lg font-semibold mb-4">🎨 لون الخلفية</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {backgroundColors.map((bg) => (
                    <div
                      key={bg.id}
                      className={`h-16 rounded-lg cursor-pointer border-2 transition-all duration-200 ${bg.class} ${settings.backgroundColor === bg.id
                        ? "border-yellow-500 ring-2 ring-yellow-200 scale-105 shadow-lg"
                        : "border-gray-200 hover:scale-105 hover:shadow-md"
                        }`}
                      onClick={() => updateSettings({ backgroundColor: bg.id as any })}
                    >
                      <div className="h-full flex items-center justify-center">
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded ${bg.id === "solid-dark" ? "bg-gray-800 text-white" : "bg-white/80"
                            }`}
                        >
                          {bg.name}
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Custom color option */}
                  <div
                    className={`h-16 rounded-lg cursor-pointer border-2 transition-all duration-200 relative overflow-hidden
                      ${settings.backgroundColor === "solid-custom"
                        ? "border-yellow-500 ring-2 ring-yellow-200 scale-105 shadow-lg"
                        : "border-gray-200 hover:scale-105 hover:shadow-md"
                      }`}
                    style={{ backgroundColor: settings.customBackgroundColor }}
                    onClick={() => {
                      document.getElementById("custom-color-picker")?.click()
                      updateSettings({ backgroundColor: "solid-custom" })
                    }}
                  >
                    <input
                      id="custom-color-picker"
                      type="color"
                      value={settings.customBackgroundColor}
                      onChange={handleColorChange}
                      className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                    />
                    <div className="h-full flex items-center justify-center">
                      <span className="text-xs font-medium px-2 py-1 rounded bg-white/80">لون مخصص</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Patterns */}
              <div>
                <h3 className="text-lg font-semibold mb-4">🔳 نمط الخلفية</h3>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                  {backgroundPatterns.map((pattern) => (
                    <div
                      key={pattern.id}
                      className={`h-16 rounded-lg cursor-pointer border-2 transition-all duration-200 ${pattern.preview} ${settings.backgroundPattern === pattern.id
                        ? "border-yellow-500 ring-2 ring-yellow-200 scale-105 shadow-lg"
                        : "border-gray-200 hover:scale-105 hover:shadow-md"
                        }`}
                      onClick={() => updateSettings({ backgroundPattern: pattern.id as any })}
                    >
                      <div className="h-full flex items-center justify-center">
                        <span className="text-xs font-medium px-2 py-1 rounded bg-white/80">{pattern.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fonts */}
              <div>
                <h3 className="text-lg font-semibold mb-4">✍️ نوع الخط</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {fonts.map((font) => (
                    <Card
                      key={font.id}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${settings.fontFamily === font.id
                        ? "ring-2 ring-yellow-500 bg-yellow-50 scale-105 shadow-lg"
                        : "hover:scale-105"
                        }`}
                      onClick={() => updateSettings({ fontFamily: font.id as any })}
                    >
                      <CardContent className="p-4 text-center">
                        <h4 className={`font-semibold text-xl mb-2 ${font.class}`}>{font.preview}</h4>
                        <p className="text-sm text-gray-600">{font.name}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "store" && (
            <div className="space-y-8">
              {/* Store Name */}
              <div>
                <h3 className="text-lg font-semibold mb-4">اسم المتجر</h3>
                <input
                  type="text"
                  value={settings.storeName}
                  onChange={(e) => updateSettings({ storeName: e.target.value })}
                  className="w-full p-3 border rounded-lg text-lg transition-all duration-200 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="اسم المتجر"
                />
              </div>

              {/* Options */}
              <div>
                <h3 className="text-lg font-semibold mb-4">خيارات العرض</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.showLastUpdate}
                      onChange={(e) => updateSettings({ showLastUpdate: e.target.checked })}
                      className="w-5 h-5 text-yellow-600 focus:ring-yellow-500"
                    />
                    <span>عرض وقت آخر تحديث</span>
                  </label>
                </div>
              </div>

              {/* Reset Button */}
              <div className="pt-4 border-t">
                <Button
                  onClick={resetSettings}
                  variant="outline"
                  className="w-full transition-all duration-200 hover:bg-red-50 hover:border-red-300 hover:text-red-700"
                >
                  إعادة تعيين جميع الإعدادات
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
