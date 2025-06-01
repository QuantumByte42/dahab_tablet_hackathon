import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coins, TrendingUp, TrendingDown } from "lucide-react"
import type { GoldItem } from "@/types/gold"

interface GoldItemCardProps {
  item: GoldItem
}

export function GoldItemCard({ item }: GoldItemCardProps) {
  const priceDifference = item.sellPrice - item.purchasePrice
  const profitMargin = ((priceDifference / item.purchasePrice) * 100).toFixed(2)

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200 border-2 hover:border-yellow-200">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-100 rounded-full">
              <Coins className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">{item.nameAr}</h3>
              <p className="text-sm text-gray-600">{item.name}</p>
            </div>
          </div>
          <Badge variant="outline" className="text-xs">
            {item.code}
          </Badge>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium text-gray-600">العيار</span>
            <span className="font-semibold text-gray-900">{item.grade}</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-1">
                <TrendingDown className="h-4 w-4 text-green-600" />
                <span className="text-xs font-medium text-green-700">سعر الشراء</span>
              </div>
              <p className="text-lg font-bold text-green-800">{item.purchasePrice.toFixed(2)} د.أ</p>
            </div>

            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="h-4 w-4 text-blue-600" />
                <span className="text-xs font-medium text-blue-700">سعر البيع</span>
              </div>
              <p className="text-lg font-bold text-blue-800">{item.sellPrice.toFixed(2)} د.أ</p>
            </div>
          </div>

          <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-yellow-700">هامش الربح</span>
              <span className="font-bold text-yellow-800">{profitMargin}%</span>
            </div>
            <div className="text-xs text-yellow-600 mt-1">+{priceDifference.toFixed(2)} د.أ للوحدة</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
