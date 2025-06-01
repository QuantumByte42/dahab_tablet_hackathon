import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown } from "lucide-react"
import type { GoldItem } from "@/types/gold"
import type { CustomizationSettings } from "@/types/customization"

interface ClassicCardProps {
  item: GoldItem
  settings: CustomizationSettings
}

export function ClassicCard({ item }: ClassicCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200 bg-gradient-to-b from-amber-50 to-yellow-50 border-amber-200">
      <CardContent className="p-6">
        {/* Centered header with crown */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-amber-100 rounded-full border-2 border-amber-300">
              <Crown className="h-10 w-10 text-amber-600" />
            </div>
          </div>
          <h3 className="font-bold text-2xl text-amber-900 mb-2">{item.nameAr}</h3>
          <p className="text-sm text-amber-700 mb-3">{item.name}</p>
          <Badge variant="outline" className="border-amber-400 text-amber-700 px-3 py-1">
            {item.code}
          </Badge>
        </div>

        {/* Ornate grade display */}
        <div className="text-center mb-6 p-4 bg-amber-100 rounded-lg border-2 border-amber-300">
          <div className="text-amber-700 text-sm font-medium mb-1">✦ العيار ✦</div>
          <div className="font-bold text-3xl text-amber-900">{item.grade}</div>
        </div>

        {/* Stacked price layout */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg border-2 border-amber-200 shadow-sm overflow-hidden">
            <div className="bg-amber-100 px-4 py-2 border-b border-amber-200">
              <span className="font-medium text-amber-800 text-sm">سعر الشراء</span>
            </div>
            <div className="p-4 text-center">
              <span className="font-bold text-xl text-green-700">{item.purchasePrice.toFixed(2)} د.أ</span>
            </div>
          </div>

          <div className="bg-white rounded-lg border-2 border-amber-200 shadow-sm overflow-hidden">
            <div className="bg-amber-100 px-4 py-2 border-b border-amber-200">
              <span className="font-medium text-amber-800 text-sm">سعر البيع</span>
            </div>
            <div className="p-4 text-center">
              <span className="font-bold text-xl text-blue-700">{item.sellPrice.toFixed(2)} د.أ</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
