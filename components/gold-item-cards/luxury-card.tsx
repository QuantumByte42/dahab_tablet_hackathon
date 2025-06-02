import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Diamond, Star, Sparkles } from "lucide-react"
import type { GoldItem } from "@/types/gold"
import type { CustomizationSettings } from "@/types/customization"

interface LuxuryCardProps {
  item: GoldItem
  settings: CustomizationSettings
}

export function LuxuryCard({ item }: LuxuryCardProps) {
  return (
    <Card className="h-full hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white border-0 relative overflow-hidden">
      {/* Luxury background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-purple-600/10"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-400/10 to-transparent rounded-full blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-600/10 to-transparent rounded-full blur-xl"></div>

      <CardContent className="p-6 relative z-10">
        {/* Luxury header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg">
              <Diamond className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-yellow-400 mb-1">{item.nameAr}</h3>
              <p className="text-sm text-gray-300">{item.name}</p>
            </div>
          </div>
          <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 font-bold border-0">
            {item.code}
          </Badge>
        </div>

        {/* Floating grade */}
        <div className="mb-6 relative">
          <div className="absolute -top-2 -right-2">
            <Sparkles className="h-4 w-4 text-yellow-400" />
          </div>
          <div className="p-4 bg-gradient-to-r from-gray-800/80 to-gray-700/80 rounded-lg border border-yellow-400/30 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="text-sm font-medium text-gray-300">العيار</span>
              </div>
              <span className="font-bold text-2xl text-yellow-400">{item.grade}</span>
            </div>
          </div>
        </div>

        {/* Asymmetric price layout */}
        <div className="space-y-4">
          <div className="relative">
            <div className="absolute -top-1 -left-1 w-full h-full bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-lg blur-sm"></div>
            <div className="relative p-4 bg-gradient-to-r from-green-900/40 to-green-800/40 rounded-lg border border-green-500/30 backdrop-blur-sm">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-green-300">سعر الشراء</span>
                <span className="font-bold text-xl text-green-400">{item.purchasePrice.toFixed(2)} د.أ</span>
              </div>
            </div>
          </div>

          <div className="relative ml-4">
            <div className="absolute -top-1 -left-1 w-full h-full bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-lg blur-sm"></div>
            <div className="relative p-4 bg-gradient-to-r from-blue-900/40 to-blue-800/40 rounded-lg border border-blue-500/30 backdrop-blur-sm">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-blue-300">سعر البيع</span>
                <span className="font-bold text-xl text-blue-400">{item.sellPrice.toFixed(2)} د.أ</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
