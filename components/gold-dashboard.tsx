"use client"

import { useGoldData } from "@/hooks/use-gold-data"
import { GoldItemCard } from "@/components/gold-item-card"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, RefreshCw, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GoldDashboard() {
  const { goldItems, loading, error } = useGoldData()

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-yellow-600" />
          <p className="text-gray-600">جاري تحميل أسعار الذهب...</p>
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

  return (
    <div className="space-y-6">
      {/* Gold Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {goldItems.map((item, index) => (
          <GoldItemCard key={`${item.code}-${index}`} item={item} />
        ))}
      </div>

      {/* Auto-refresh indicator */}
      <div className="flex justify-center">
        <Badge variant="outline" className="text-xs">
          <RefreshCw className="h-3 w-3 ml-1" />
          يتم التحديث تلقائياً كل 30 ثانية
        </Badge>
      </div>
    </div>
  )
}
