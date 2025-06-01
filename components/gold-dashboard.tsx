"use client"

import { useGoldData } from "@/hooks/use-gold-data"
import { GoldItemCard } from "@/components/gold-item-card"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, RefreshCw, AlertCircle, Wifi, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCustomizationStore } from "@/stores/customization-store"

export function GoldDashboard() {
  const { goldItems, loading, error } = useGoldData()
  const { settings } = useCustomizationStore()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-yellow-600" />
          <p className="text-gray-600">جاري تحميل أسعار الذهب من Firebase...</p>
          <p className="text-sm text-gray-500 mt-2">الاتصال بقاعدة البيانات...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-6 text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">خطأ في تحميل البيانات</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()} variant="outline">
            <RefreshCw className="h-4 w-4 ml-2" />
            إعادة المحاولة
          </Button>
        </CardContent>
      </Card>
    )
  }

  if (!goldItems || goldItems.length === 0) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-6 text-center">
          <Database className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">لا توجد بيانات</h3>
          <p className="text-gray-600 mb-4">لم يتم العثور على بيانات الذهب في قاعدة البيانات</p>
          <Button onClick={() => window.location.reload()} variant="outline">
            <RefreshCw className="h-4 w-4 ml-2" />
            تحديث البيانات
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Status indicator */}
      <div className="flex justify-center">
        <Badge variant="outline" className="border-green-300 text-green-700 bg-green-50">
          <Wifi className="h-3 w-3 ml-1" />
          متصل بـقاعدة بيانات الذهب
        </Badge>
      </div>

      {/* Gold Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {goldItems.map((item, index) => (
          <div key={`${item.code}-${index}`} className="transform transition-all duration-300 hover:scale-105">
            <GoldItemCard item={item} />
          </div>
        ))}
      </div>

      {/* Auto-refresh indicator */}
      {settings.showLastUpdate && (
        <div className="flex justify-center">
          <Badge variant="outline" className="text-xs">
            <RefreshCw className="h-3 w-3 ml-1 animate-spin" />
            يتم التحديث تلقائياً كل 30 ثانية
          </Badge>
        </div>
      )}
    </div>
  )
}
