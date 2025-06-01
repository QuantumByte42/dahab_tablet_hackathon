"use client"
import { Card, CardContent } from "@/components/ui/card"
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

  const backgrounds = [
    { id: "gradient-gold", name: "ذهبي متدرج", class: "bg-gradient-to-br from-yellow-50 to-amber-50" },
    { id: "gradient-blue", name: "أزرق متدرج", class: "bg-gradient-to-br from-blue-50 to-indigo-50" },
    { id: "gradient-green", name: "أخضر متدرج", class: "bg-gradient-to-br from-green-50 to-emerald-50" },
    { id: "solid-white", name: "أبيض", class: "bg-white" },
    { id: "solid-dark", name: "داكن", class: "bg-gray-900 text-white" },
    { id: "pattern-geometric", name: "نمط هندسي", class: "bg-gray-50" },
  ]

  const fonts = [
    { id: "cairo", name: "Cairo", class: "font-cairo", preview: "نموذج خط القاهرة" },
    { id: "amiri", name: "Amiri", class: "font-amiri", preview: "نموذج خط أميري" },
    { id: "tajawal", name: "Tajawal", class: "font-tajawal", preview: "نموذج خط تجوال" },
    { id: "almarai", name: "Almarai", class: "font-almarai", preview: "نموذج خط المرعي" },
    { id: "rubik", name: "Rubik", class: "font-rubik", preview: "نموذج خط روبيك" },
  ]

  const accentColors = [
    { id: "gold", name: "ذهبي", class: "bg-yellow-500" },
    { id: "blue", name: "أزرق", class: "bg-blue-500" },
    { id: "green", name: "أخضر", class: "bg-green-500" },
    { id: "purple", name: "بنفسجي", class: "bg-purple-500" },
    { id: "red", name: "أحمر", class: "bg-red-500" },
    { id: "teal", name: "تركوازي", class: "bg-teal-500" },
  ]

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
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
            className={`px-4 py-3 font-medium text-sm flex items-center gap-2 transition-all ${
              activeTab === "style"
                ? "border-b-2 border-yellow-500 text-yellow-700 bg-yellow-50"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("style")}
          >
            <Layout className="h-4 w-4" />
            نمط البطاقات
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm flex items-center gap-2 transition-all ${
              activeTab === "appearance"
                ? "border-b-2 border-yellow-500 text-yellow-700 bg-yellow-50"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("appearance")}
          >
            <Palette className="h-4 w-4" />
            المظهر
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm flex items-center gap-2 transition-all ${
              activeTab === "store"
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
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    settings.cardStyle === style.id
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
            <div className="space-y-8">
              {/* Backgrounds */}
              <div>
                <h3 className="text-lg font-semibold mb-4">خلفية الشاشة</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {backgrounds.map((bg) => (
                    <div
                      key={bg.id}
                      className={`h-20 rounded-lg cursor-pointer border-2 transition-all duration-200 ${bg.class} ${
                        settings.background === bg.id
                          ? "border-yellow-500 ring-2 ring-yellow-200 scale-105 shadow-lg"
                          : "border-gray-200 hover:scale-105 hover:shadow-md"
                      }`}
                      onClick={() => updateSettings({ background: bg.id as any })}
                    >
                      <div className="h-full flex items-center justify-center">
                        <span
                          className={`text-sm font-medium px-2 py-1 rounded ${
                            bg.id === "solid-dark" ? "bg-gray-800 text-white" : "bg-white/80"
                          }`}
                        >
                          {bg.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fonts */}
              <div>
                <h3 className="text-lg font-semibold mb-4">نوع الخط</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {fonts.map((font) => (
                    <Card
                      key={font.id}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                        settings.fontFamily === font.id
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

              {/* Accent Colors */}
              <div>
                <h3 className="text-lg font-semibold mb-4">اللون المميز</h3>
                <div className="flex gap-4 flex-wrap">
                  {accentColors.map((color) => (
                    <div
                      key={color.id}
                      className={`w-16 h-16 rounded-full cursor-pointer border-4 transition-all duration-200 ${color.class} ${
                        settings.accentColor === color.id
                          ? "border-gray-800 scale-110 ring-4 ring-gray-300 shadow-lg"
                          : "border-gray-200 hover:scale-110 hover:shadow-md"
                      }`}
                      onClick={() => updateSettings({ accentColor: color.id as any })}
                      title={color.name}
                    />
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
