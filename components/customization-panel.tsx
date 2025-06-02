"use client"
import { Card, CardContent } from "@/components/ui/card"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Settings, Palette, Type, Layout, X, Wifi, RotateCcw } from "lucide-react"
import { useCustomizationStore } from "@/stores/customization-store"
import { useState } from "react"
import { AdvancedColorPicker } from "@/components/ui/advanced-color-picker"
import { getActiveConfigs, getConfigDisplayName } from "@/types/customization"

interface CustomizationPanelProps {
  isOpen: boolean
  onClose: () => void
}

export function CustomizationPanel({ isOpen, onClose }: CustomizationPanelProps) {
  const { settings, updateSettings, resetSettings, setCardStyle } = useCustomizationStore()
  const [activeTab, setActiveTab] = useState("style")
  const [showDetailedStyling, setShowDetailedStyling] = useState(false)

  if (!isOpen) return null

  // All card styles grouped by category for easier selection
  const allCardStyles = [
    {
      category: "عصري",
      color: "blue",
      styles: [
        { id: "modern-clean", name: "نظيف", description: "تصميم بسيط وواضح" },
        { id: "modern-glass", name: "زجاجي", description: "تأثير زجاجي شفاف" },
        { id: "modern-neon", name: "نيون", description: "تأثيرات ضوئية مميزة" },
        { id: "modern-simple", name: "بسيط", description: "تصميم بسيط جداً" },
      ],
    },
    {
      category: "كلاسيكي",
      color: "amber",
      styles: [
        { id: "classic-royal", name: "ملكي", description: "تصميم فاخر وملكي" },
        { id: "classic-vintage", name: "عتيق", description: "طراز قديم أنيق" },
      ],
    },
    {
      category: "إبداعي",
      color: "purple",
      styles: [
        { id: "creative-artistic", name: "فني", description: "تصميم فني ملون" },
        { id: "creative-geometric", name: "هندسي", description: "تصميم بأشكال هندسية" },
        { id: "creative-gradient", name: "متدرج", description: "تصميم بألوان متدرجة" },
      ],
    },
    {
      category: "تجاري",
      color: "gray",
      styles: [
        { id: "business-corporate", name: "مؤسسي", description: "تصميم مهني ومؤسسي" },
        { id: "business-dashboard", name: "لوحة تحكم", description: "تصميم لوحة معلومات" },
        { id: "business-table", name: "جدول", description: "تصميم جدولي منظم" },
      ],
    },
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

  const handleColorChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await updateSettings({
      backgroundColor: "solid-custom",
      customBackgroundColor: e.target.value,
    })
  }

  const getCategoryColorClasses = (color: string, isSelected: boolean) => {
    const colors = {
      blue: isSelected
        ? "ring-2 ring-blue-500 bg-blue-50 border-blue-200"
        : "border-blue-200 hover:border-blue-300 hover:bg-blue-50",
      amber: isSelected
        ? "ring-2 ring-amber-500 bg-amber-50 border-amber-200"
        : "border-amber-200 hover:border-amber-300 hover:bg-amber-50",
      purple: isSelected
        ? "ring-2 ring-purple-500 bg-purple-50 border-purple-200"
        : "border-purple-200 hover:border-purple-300 hover:bg-purple-50",
      gray: isSelected
        ? "ring-2 ring-gray-500 bg-gray-50 border-gray-200"
        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <Settings className="h-6 w-6 text-yellow-600" />
            <h2 className="text-xl font-bold">إعدادات المتجر</h2>
            <div className="flex items-center gap-1 text-green-600">
              <Wifi className="h-4 w-4" />
              <span className="text-sm">متصل</span>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
            <X className="h-5 w-5" />
          </Button>
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
            <div className="space-y-8">
              {/* Improved Card Style Selection */}
              <div>
                <h3 className="text-lg font-semibold mb-6">🎨 اختيار نمط البطاقة</h3>
                <div className="space-y-6">
                  {allCardStyles.map((category) => (
                    <div key={category.category}>
                      <h4 className="text-md font-medium mb-3 text-gray-700">{category.category}</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {category.styles.map((style) => (
                          <Card
                            key={style.id}
                            className={`cursor-pointer transition-all duration-200 hover:scale-105 ${getCategoryColorClasses(
                              category.color,
                              settings.cardStyle === style.id,
                            )}`}
                            onClick={() => setCardStyle(style.id)}
                          >
                            <CardContent className="p-3 text-center">
                              <h5 className="font-semibold text-sm">{style.name}</h5>
                              <p className="text-xs text-gray-600 mt-1">{style.description}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Detailed Styling Options */}
              <div className="border-t pt-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">🎛️ تخصيص التفاصيل</h3>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => useCustomizationStore.getState().resetCardStyling(settings.cardStyle)}
                    >
                      <RotateCcw className="h-4 w-4 mr-1" />
                      استعادة الافتراضي
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => setShowDetailedStyling(!showDetailedStyling)}>
                      {showDetailedStyling ? "إخفاء" : "إظهار"} التفاصيل
                    </Button>
                  </div>
                </div>

                {showDetailedStyling && (
                  <div className="space-y-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border">
                    {(() => {
                      const activeConfigs = getActiveConfigs(settings.cardStyle)

                      // Group configurations by type
                      const colorConfigs = activeConfigs.filter(
                        (key) =>
                          key.includes("Color") || key === "primaryColor" || key === "buyColor" || key === "sellColor",
                      )
                      const layoutConfigs = activeConfigs.filter((key) =>
                        [
                          "padding",
                          "margin",
                          "spacing",
                          "fontSize",
                          "fontWeight",
                          "headerAlignment",
                          "contentAlignment",
                          "priceLayout",
                        ].includes(key),
                      )
                      const borderConfigs = activeConfigs.filter(
                        (key) => key.includes("border") || key === "borderRadius",
                      )
                      const effectConfigs = activeConfigs.filter((key) =>
                        [
                          "shadowStyle",
                          "shadowColor",
                          "hoverEffect",
                          "transparency",
                          "glassEffect",
                          "neonEffect",
                          "gradientDirection",
                          "iconStyle",
                        ].includes(key),
                      )

                      return (
                        <>
                          {/* Colors Section */}
                          {colorConfigs.length > 0 && (
                            <div className="space-y-6">
                              <h4 className="text-md font-semibold text-gray-800 border-b pb-2">🎨 الألوان</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {colorConfigs.map((configKey) => (
                                  <AdvancedColorPicker
                                    key={configKey}
                                    label={getConfigDisplayName(configKey)}
                                    value={(settings.cardStyling?.[configKey] as string) || "#ffffff"}
                                    onChange={(color) =>
                                      updateSettings({
                                        cardStyling: { ...settings.cardStyling, [configKey]: color },
                                      })
                                    }
                                    showOpacity={configKey.includes("background") || configKey.includes("sub")}
                                  />
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Layout Section */}
                          {layoutConfigs.length > 0 && (
                            <div className="space-y-6">
                              <h4 className="text-md font-semibold text-gray-800 border-b pb-2">
                                📏 التخطيط والمسافات
                              </h4>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {layoutConfigs.map((configKey) => {
                                  if (configKey === "padding" || configKey === "margin") {
                                    return (
                                      <div key={configKey}>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">
                                          {getConfigDisplayName(configKey)}
                                        </label>
                                        <select
                                          value={(settings.cardStyling?.[configKey] as string) || "1rem"}
                                          onChange={(e) =>
                                            updateSettings({
                                              cardStyling: { ...settings.cardStyling, [configKey]: e.target.value },
                                            })
                                          }
                                          className="w-full p-2 border border-gray-300 rounded-lg bg-white"
                                        >
                                          <option value="0rem">بدون</option>
                                          <option value="0.5rem">صغير</option>
                                          <option value="1rem">متوسط</option>
                                          <option value="1.5rem">كبير</option>
                                          <option value="2rem">كبير جداً</option>
                                        </select>
                                      </div>
                                    )
                                  }

                                  if (configKey === "spacing") {
                                    return (
                                      <div key={configKey}>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">
                                          {getConfigDisplayName(configKey)}
                                        </label>
                                        <select
                                          value={(settings.cardStyling?.[configKey] as string) || "normal"}
                                          onChange={(e) =>
                                            updateSettings({
                                              cardStyling: { ...settings.cardStyling, [configKey]: e.target.value },
                                            })
                                          }
                                          className="w-full p-2 border border-gray-300 rounded-lg bg-white"
                                        >
                                          <option value="compact">مضغوط</option>
                                          <option value="normal">عادي</option>
                                          <option value="spacious">واسع</option>
                                        </select>
                                      </div>
                                    )
                                  }

                                  if (configKey === "fontSize") {
                                    return (
                                      <div key={configKey}>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">
                                          {getConfigDisplayName(configKey)}
                                        </label>
                                        <select
                                          value={(settings.cardStyling?.[configKey] as string) || "normal"}
                                          onChange={(e) =>
                                            updateSettings({
                                              cardStyling: { ...settings.cardStyling, [configKey]: e.target.value },
                                            })
                                          }
                                          className="w-full p-2 border border-gray-300 rounded-lg bg-white"
                                        >
                                          <option value="small">صغير</option>
                                          <option value="normal">عادي</option>
                                          <option value="large">كبير</option>
                                        </select>
                                      </div>
                                    )
                                  }

                                  if (configKey === "fontWeight") {
                                    return (
                                      <div key={configKey}>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">
                                          {getConfigDisplayName(configKey)}
                                        </label>
                                        <select
                                          value={(settings.cardStyling?.[configKey] as string) || "normal"}
                                          onChange={(e) =>
                                            updateSettings({
                                              cardStyling: { ...settings.cardStyling, [configKey]: e.target.value },
                                            })
                                          }
                                          className="w-full p-2 border border-gray-300 rounded-lg bg-white"
                                        >
                                          <option value="light">خفيف</option>
                                          <option value="normal">عادي</option>
                                          <option value="medium">متوسط</option>
                                          <option value="semibold">شبه سميك</option>
                                          <option value="bold">سميك</option>
                                        </select>
                                      </div>
                                    )
                                  }

                                  if (configKey === "priceLayout") {
                                    return (
                                      <div key={configKey}>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">
                                          {getConfigDisplayName(configKey)}
                                        </label>
                                        <select
                                          value={(settings.cardStyling?.[configKey] as string) || "grid"}
                                          onChange={(e) =>
                                            updateSettings({
                                              cardStyling: { ...settings.cardStyling, [configKey]: e.target.value },
                                            })
                                          }
                                          className="w-full p-2 border border-gray-300 rounded-lg bg-white"
                                        >
                                          <option value="side-by-side">جنباً إلى جنب</option>
                                          <option value="stacked">مكدس</option>
                                          <option value="grid">شبكة</option>
                                          <option value="inline">خط واحد</option>
                                        </select>
                                      </div>
                                    )
                                  }

                                  if (configKey === "headerAlignment" || configKey === "contentAlignment") {
                                    return (
                                      <div key={configKey}>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">
                                          {getConfigDisplayName(configKey)}
                                        </label>
                                        <select
                                          value={(settings.cardStyling?.[configKey] as string) || "center"}
                                          onChange={(e) =>
                                            updateSettings({
                                              cardStyling: { ...settings.cardStyling, [configKey]: e.target.value },
                                            })
                                          }
                                          className="w-full p-2 border border-gray-300 rounded-lg bg-white"
                                        >
                                          <option value="left">يسار</option>
                                          <option value="center">وسط</option>
                                          <option value="right">يمين</option>
                                        </select>
                                      </div>
                                    )
                                  }

                                  return null
                                })}
                              </div>
                            </div>
                          )}

                          {/* Border Section */}
                          {borderConfigs.length > 0 && (
                            <div className="space-y-6">
                              <h4 className="text-md font-semibold text-gray-800 border-b pb-2">🔲 الحدود والحواف</h4>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {borderConfigs.includes("borderRadius") && (
                                  <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700">
                                      انحناء الحواف
                                    </label>
                                    <div className="space-y-2">
                                      <input
                                        type="range"
                                        min="0"
                                        max="20"
                                        value={Number.parseFloat(settings.cardStyling?.borderRadius || "12")}
                                        onChange={(e) =>
                                          updateSettings({
                                            cardStyling: {
                                              ...settings.cardStyling,
                                              borderRadius: `${e.target.value}px`,
                                            },
                                          })
                                        }
                                        className="w-full"
                                      />
                                      <span className="text-xs text-gray-500 block text-center">
                                        {settings.cardStyling?.borderRadius}
                                      </span>
                                    </div>
                                  </div>
                                )}

                                {borderConfigs.includes("borderSize") && (
                                  <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700">سمك الحدود</label>
                                    <select
                                      value={settings.cardStyling?.borderSize || "1px"}
                                      onChange={(e) =>
                                        updateSettings({
                                          cardStyling: { ...settings.cardStyling, borderSize: e.target.value },
                                        })
                                      }
                                      className="w-full p-2 border border-gray-300 rounded-lg bg-white"
                                    >
                                      <option value="0px">بدون حدود</option>
                                      <option value="1px">رفيع</option>
                                      <option value="2px">متوسط</option>
                                      <option value="3px">سميك</option>
                                    </select>
                                  </div>
                                )}

                                {borderConfigs.includes("borderStyle") && (
                                  <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700">نمط الحدود</label>
                                    <select
                                      value={settings.cardStyling?.borderStyle || "solid"}
                                      onChange={(e) =>
                                        updateSettings({
                                          cardStyling: { ...settings.cardStyling, borderStyle: e.target.value as any },
                                        })
                                      }
                                      className="w-full p-2 border border-gray-300 rounded-lg bg-white"
                                    >
                                      <option value="solid">مصمت</option>
                                      <option value="dashed">متقطع</option>
                                      <option value="dotted">منقط</option>
                                      <option value="none">بدون</option>
                                    </select>
                                  </div>
                                )}

                                {borderConfigs.includes("borderColor") && (
                                  <div className="col-span-2">
                                    <AdvancedColorPicker
                                      label="لون الحدود"
                                      value={settings.cardStyling?.borderColor || "#e5e7eb"}
                                      onChange={(color) =>
                                        updateSettings({
                                          cardStyling: { ...settings.cardStyling, borderColor: color },
                                        })
                                      }
                                      showOpacity={true}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {/* Effects Section */}
                          {effectConfigs.length > 0 && (
                            <div className="space-y-6">
                              <h4 className="text-md font-semibold text-gray-800 border-b pb-2">✨ التأثيرات</h4>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {effectConfigs.map((configKey) => {
                                  if (configKey === "shadowStyle") {
                                    return (
                                      <div key={configKey}>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">
                                          {getConfigDisplayName(configKey)}
                                        </label>
                                        <select
                                          value={(settings.cardStyling?.[configKey] as string) || "medium"}
                                          onChange={(e) =>
                                            updateSettings({
                                              cardStyling: { ...settings.cardStyling, [configKey]: e.target.value },
                                            })
                                          }
                                          className="w-full p-2 border border-gray-300 rounded-lg bg-white"
                                        >
                                          <option value="none">بدون ظل</option>
                                          <option value="light">خفيف</option>
                                          <option value="medium">متوسط</option>
                                          <option value="heavy">قوي</option>
                                          <option value="glow">توهج</option>
                                          <option value="colored">ملون</option>
                                        </select>
                                      </div>
                                    )
                                  }

                                  if (configKey === "hoverEffect") {
                                    return (
                                      <div key={configKey}>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">
                                          {getConfigDisplayName(configKey)}
                                        </label>
                                        <select
                                          value={(settings.cardStyling?.[configKey] as string) || "scale"}
                                          onChange={(e) =>
                                            updateSettings({
                                              cardStyling: { ...settings.cardStyling, [configKey]: e.target.value },
                                            })
                                          }
                                          className="w-full p-2 border border-gray-300 rounded-lg bg-white"
                                        >
                                          <option value="none">بدون تأثير</option>
                                          <option value="scale">تكبير</option>
                                          <option value="lift">رفع</option>
                                          <option value="glow">توهج</option>
                                          <option value="rotate">دوران</option>
                                        </select>
                                      </div>
                                    )
                                  }

                                  if (configKey === "transparency") {
                                    return (
                                      <div key={configKey}>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">
                                          {getConfigDisplayName(configKey)}
                                        </label>
                                        <div className="space-y-2">
                                          <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={(settings.cardStyling?.[configKey] as number) || 100}
                                            onChange={(e) =>
                                              updateSettings({
                                                cardStyling: {
                                                  ...settings.cardStyling,
                                                  [configKey]: Number.parseInt(e.target.value),
                                                },
                                              })
                                            }
                                            className="w-full"
                                          />
                                          <span className="text-xs text-gray-500 block text-center">
                                            {settings.cardStyling?.[configKey] || 100}%
                                          </span>
                                        </div>
                                      </div>
                                    )
                                  }

                                  if (configKey === "glassEffect" || configKey === "neonEffect") {
                                    return (
                                      <div key={configKey}>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                          <input
                                            type="checkbox"
                                            checked={(settings.cardStyling?.[configKey] as boolean) || false}
                                            onChange={(e) =>
                                              updateSettings({
                                                cardStyling: { ...settings.cardStyling, [configKey]: e.target.checked },
                                              })
                                            }
                                            className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                                          />
                                          <span className="text-sm font-medium text-gray-700">
                                            {getConfigDisplayName(configKey)}
                                          </span>
                                        </label>
                                      </div>
                                    )
                                  }

                                  if (configKey === "shadowColor") {
                                    return (
                                      <div key={configKey} className="col-span-2">
                                        <AdvancedColorPicker
                                          label={getConfigDisplayName(configKey)}
                                          value={(settings.cardStyling?.[configKey] as string) || "#000000"}
                                          onChange={(color) =>
                                            updateSettings({
                                              cardStyling: { ...settings.cardStyling, [configKey]: color },
                                            })
                                          }
                                          showOpacity={true}
                                        />
                                      </div>
                                    )
                                  }

                                  return null
                                })}
                              </div>
                            </div>
                          )}
                        </>
                      )
                    })()}

                    {/* Preview Section */}
                    <div className="space-y-4">
                      <h4 className="text-md font-semibold text-gray-800 border-b pb-2">👁️ معاينة مباشرة</h4>
                      <div className="p-4 bg-white rounded-lg border-2 border-dashed border-gray-300">
                        <p className="text-sm text-gray-600 text-center">
                          ستظهر التغييرات مباشرة على بطاقات الذهب في الصفحة الرئيسية
                        </p>
                        <p className="text-xs text-gray-500 text-center mt-2">
                          عدد التكوينات النشطة: {getActiveConfigs(settings.cardStyle).length}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
