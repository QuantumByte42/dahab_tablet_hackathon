import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coins, TrendingUp, TrendingDown } from "lucide-react"
import type { GoldItem } from "@/types/gold"
import type { CustomizationSettings } from "@/types/customization"

interface ModernCardProps {
  item: GoldItem
  settings: CustomizationSettings
}

export function ModernCard({ item }: ModernCardProps) {
  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-yellow-400 bg-yellow-50 hover:scale-105">
      <CardContent className="p-6">
        {/* Header with icon and title */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <Coins className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-900">{item.nameAr}</h3>
              <p className="text-sm text-gray-500">{item.name}</p>
            </div>
          </div>
          <Badge variant="outline" className="text-xs font-mono">
            {item.code}
          </Badge>
        </div>

        {/* Grade section */}
        <div className="mb-6 p-4 bg-white rounded-lg border shadow-sm">
          <div className="text-center">
            <span className="text-sm font-medium text-gray-600 block mb-1">العيار</span>
            <span className="font-bold text-2xl text-gray-900">{item.grade}</span>
          </div>
        </div>

        {/* Prices in grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 rounded-xl border border-green-200 text-center">
            <TrendingDown className="h-5 w-5 text-green-600 mx-auto mb-2" />
            <span className="text-xs font-medium text-green-700 block mb-1">شراء</span>
            <p className="text-lg font-bold text-green-800">{item.purchasePrice.toFixed(2)}</p>
            <p className="text-xs text-green-600">دينار أردني</p>
          </div>

          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 text-center">
            <TrendingUp className="h-5 w-5 text-blue-600 mx-auto mb-2" />
            <span className="text-xs font-medium text-blue-700 block mb-1">بيع</span>
            <p className="text-lg font-bold text-blue-800">{item.sellPrice.toFixed(2)}</p>
            <p className="text-xs text-blue-600">دينار أردني</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
